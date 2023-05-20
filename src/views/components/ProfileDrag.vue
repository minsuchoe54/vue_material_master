<template>
    <div class="card card-plain h-100" >
        <div class="p-3 pb-0 card-header">
        <h6 class="mb-0">프로필 순서</h6>
        </div>
        <div class="p-3 card-body">
            <div class="d-flex justify-content-end">
            <button class="btn bg-danger btn-md null my-2 mb-2 text-white col-3" v-if="more_photos" @click="More_photos" >접기</button>
        </div>
            <ul class="list-group">
                <draggable class="dragArea list-group w-full" :list="this.info_photos" @change="log">
                    <template v-for="element, index in this.info_photos" :key="index">
                    <template v-if="more_photos==false && index < 8">
                            <li class="px-0 mb-2 border-0 list-group-item d-flex align-items-center font-weight-light">
                            <material-avatar class="me-5" :img="element.attributes.webp_img" alt="kal" border-radius="lg" shadow="regular" v-if="element.attributes.activate"  />
                            <material-avatar class="me-5" :img="element.attributes.webp_img" alt="kal" border-radius="lg" shadow="regular" style="filter: brightness(35%);" v-else />
                            
                            <div class="d-flex align-items-start flex-column justify-content-center">
                                <h6 class="mb-0 text-sm">{{ photo_type_list[element.attributes.type] }} <span style="color:#4caf50">{{ element.attributes.name }}</span></h6>
                            </div>
            
                            <a class="mb-0 btn btn-link pe-3 ps-0 ms-auto" id="dropdownTable" data-bs-toggle="dropdown" aria-expanded="false">
                                <button class="btn mb-0 btn-sm null null" id="custom-btn-link">별칭</button>
    
                            </a>
                            <ul class="dropdown-menu px-2 py-2 ms-sm-n4 ms-n5" aria-labelledby="dropdownTable" style="">
                                <li v-for="value, key, index in photo_type_list" :key="index">
                                    <a class="dropdown-item border-radius-md text-center" @click="Change_infophoto_type(key,element.id)" style="cursor:pointer;">
                                        {{ value }} 
                                    </a>
                                </li>
                            </ul>
                            <a class="mb-0 btn btn-link pe-3 ps-0 ms-auto" @click="Delete_photo(element.id)">삭제</a >
                        </li>
                    
                    </template>
                    <template v-if="more_photos">
                        <li class="px-0 mb-2 border-0 list-group-item d-flex align-items-center font-weight-light" style="background">
                            <material-avatar class="me-5" :img="element.attributes.webp_img" alt="kal" border-radius="lg" shadow="regular" v-if="element.attributes.activate"  />
                            <material-avatar class="me-5" :img="element.attributes.webp_img" alt="kal" border-radius="lg" shadow="regular" style="filter: brightness(35%);" v-else />
                            <!-- alert-secondary -->
                        
                            <div class="d-flex align-items-start flex-column justify-content-center">
                                <h6 class="mb-0 text-sm" >{{ photo_type_list[element.attributes.type] }} <span style="color:#4caf50">{{ element.attributes.name }}</span></h6>
                            </div>
                        
                            <a class="mb-0 btn btn-link pe-3 ps-0 ms-auto" id="dropdownTable" data-bs-toggle="dropdown" aria-expanded="false">
                                <button class="btn mb-0 btn-sm null null" id="custom-btn-link">별칭</button>
                                <!-- <i class="fa fa-ellipsis-v text-secondary" aria-hidden="true"></i> -->
                            </a>
                            <ul class="dropdown-menu px-2 py-2 ms-sm-n4 ms-n5" aria-labelledby="dropdownTable" style="">
                                <li v-for="value, key, index in photo_type_list" :key="index">
                                    <a class="dropdown-item border-radius-md text-center" @click="Change_infophoto_type(key,element.id)" style="cursor:pointer;">
                                        {{ value }}
                                    </a>
                                </li>
                            </ul>
                            <a class="mb-0 btn btn-link pe-3 ps-0 ms-auto" @click="Delete_photo(element.id)">삭제</a >
                        </li>
                
                    </template>
                    </template>
                </draggable>
            <div class="row">
                <input class="form-control mb-2 mt-1" type="file" id="input-custom" ref="file" @change="FileUpload">
                <button class="btn bg-success btn-md null my-2 mb-2 text-white col-8" v-if="more_photos" @click="SavePhotos">순서 저장</button>
                <span class="col-1"></span>
                <button class="btn bg-danger btn-md null my-2 mb-2 text-white col-3" v-if="more_photos" @click="More_photos" >접기</button>
                <button class="btn mb-0 bg-warning btn-md w-100 null my-2 mb-2 text-white" v-else @click="More_photos"> + 더보기</button>
            </div>
            
            </ul>
        </div>
    </div>
</template>
    
<script>
import { VueDraggableNext } from "vue-draggable-next";
import MaterialAvatar from "@/components/MaterialAvatar.vue";
// import SyncLoader from 'vue-spinner/src/SyncLoader.vue';
import axios from 'axios';
export default {
    components : {
        draggable:VueDraggableNext,
        MaterialAvatar,
        // SyncLoader
    },
    props : {
        info_photos:Array,
    },
    computed:{
        
    },
    data(){
        return{
            // photos : this.info_photos,
            photo_type_list : {
                'manager':'매니저',
                'main':'메인사진',
                'course':'코스',
                'option':'옵션',
                'event':'이벤트',
                'phone':'전화번호',
                'notice':'안내사항',
                'etc':'기타',
                
            },
            more_photos : false,
            
        }
    },
    methods:{
        FileUpload(){
            this.file = this.$refs.file.files[0];
            const formData = new FormData();
            formData.append("file", this.file);
            this.$emit('fileupload',formData)
        },
        More_photos(){
            if(this.more_photos == true){
                this.more_photos = false;
            }else{
                this.more_photos = true;
            }
      
        },
        async Change_infophoto_type(type,id){
            let data = {'data':{'type':type}}
            let param = '/api/info-photos/'+id
            await axios.put(this.$store.state.API_URL+param, data, {headers: {Authorization: "Bearer "+this.$store.state.token}})
            .then(res=>{
                if(res.status==200){
                    let photo_index = this.info_photos.findIndex((x) => x.id == id);
                    this.$emit('changetype',type,photo_index)
                }
            })
        },
        Delete_photo(id){
            this.$emit('deletephoto',id)
        },
        SavePhotos(){
            console.log(this.info_photos)
            this.$emit('savephoto',this.info_photos)
        },
   
      
    },
    
}
</script>

<style>
#custom-btn-link{
    color:blue
}
.line-up { 
    filter: brightness(35%); 
}
</style>