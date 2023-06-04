<template>
    <div class="card-body px-0 pb-2">
        <div class="table-responsive p-0">
            <table class="table align-items-center mb-0">
                <thead>
                    <tr>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"> Name </th>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"> Adress </th>
                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"> Status </th>
                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"> Updated </th>
                        <th class="text-secondary opacity-7"></th>
                    </tr>
                </thead>
                
                <tbody v-if="infoData.data.attributes.info_targets.data">
                    <template v-for="list,index in infoData.data.attributes.info_targets.data" :key="index">
                        <template v-if="list.id == select_id">
                          
                            <tr class="table-danger">
                                <td>
                                    <div class="d-flex px-2 py-1">
                                        <div class="d-flex flex-column justify-content-center">
                                            <h6 class="mb-0 text-sm">{{ list.attributes.name }}</h6>
                                            <p class="text-xs text-secondary mb-0"> {{ list.attributes.sitename }} </p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex">
                                        <span class="text-xs text-secondary mb-0 word">{{ list.attributes.site }}{{ list.attributes.url }} </span> &nbsp;&nbsp;
                                        <a :href="list.attributes.site+list.attributes.url" target="_blank" class="text-info font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user"> 바로가기</a>
                                    </div>
                                    
                                </td>
                                <td class="align-middle text-center text-sm">
                                    <span class="badge badge-sm bg-gradient-success" v-if="list.attributes.activate">영업중</span>
                                    <span class="badge badge-sm bg-gradient-danger" v-else>영업중지</span>
                                </td>
                                <td class="align-middle text-center">
                                    <span class="text-secondary text-xs font-weight-bold">{{ FilterDate(list.attributes.updatedAt) }}</span>
                                </td>
                                <td class="align-middle">

                                    <!-- <a class="text-secondary font-weight-bold text-xs" @click="select(list.id)"> 수정완료</a> -->
                                </td>
                            
                            </tr>
                            <tr class="table-danger">
                                <td>
                                    <select id="input-custom" class="mt-1">
                                        <template v-for="list2,index in target_defaults.data.data" :key="index">
                                            <option :value="list2.id" v-if="list2.attributes.name==list.attributes.sitename" selected>
                                                {{ list2.attributes.name }}
                                            </option>
                                            <option :value="list2.id" v-else >
                                                {{ list2.attributes.name }}
                                            </option>
                                        </template>
                                    </select>
                                    
                                </td>
                                <td colspan="4">
                                    <input type="text" id="input-custom" v-model="list.attributes.url">
                                </td>
                            </tr>
                            <tr class="table-danger">
                                <td>
                                    <select id="input-custom" class="mt-1" v-model="list.attributes.activate">
                                        <option value=true>True</option>
                                        <option value=false selected>False</option>
                                    </select><br>
                                    <input type="text" id="input-custom" class="mt-1" placeholder="name" v-model="list.attributes.name"><br>
                                    <select id="input-custom" class="mt-1" v-model="list.attributes.storetype">
                                        <option v-for="(list, index) in storetypeKr" :key="index" :value="list.value">{{ list.text }}</option>
                                    </select><br>
                                    <input type="text" id="input-custom" class="mt-1" placeholder="phone" v-model="list.attributes.phone"><br>
                                    <input type="text" id="input-custom" class="mt-1" placeholder="idx" v-model="list.attributes.idx">
                                </td>
                                <td colspan="4">
                                    <textarea v-model="list.attributes.content" rows="9" cols="55"></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" class="d-flex justify-content-center">
                                    <button class="btn btn-success btn-md mx-2 mt-3" @click="edittarget(list)">저장</button>
                                </td>
                                <td>
                                    <button class="btn btn-danger btn-md mx-2 mt-3" @click="deletetarget(list.id)">삭제하기</button>
                                </td>
                                <td>
                                    <button class="btn btn-warning btn-md mx-2 mt-3" @click="select_id=null">닫기</button>
                                </td>
                            </tr>
                           
                            
                        </template>
                        <template v-else>
                            <tr>
                                <td>
                                    <div class="d-flex px-2 py-1">
                                        <div class="d-flex flex-column justify-content-center">
                                            <h6 class="mb-0 text-sm">{{ list.attributes.name }}</h6>
                                            <p class="text-xs text-secondary mb-0"> {{ list.attributes.sitename }} </p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex">
                                        <span class="text-xs text-secondary mb-0 word">{{ list.attributes.site }}{{ list.attributes.url }} </span> &nbsp;&nbsp;
                                        <a :href="list.attributes.site+list.attributes.url" target="_blank" class="text-info font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user"> 바로가기</a>
                                    </div>
                                    
                                </td>
                                <td class="align-middle text-center text-sm">
                                    <span class="badge badge-sm bg-gradient-success" v-if="list.attributes.activate">영업중</span>
                                    <span class="badge badge-sm bg-gradient-danger" v-else>영업중지</span>
                                </td>
                                <td class="align-middle text-center">
                                    <span class="text-secondary text-xs font-weight-bold">{{ FilterDate(list.attributes.updatedAt) }}</span>
                                </td>
                                <td class="align-middle">
                                    <a class="text-secondary font-weight-bold text-xs" style="cursor:pointer" @click="select(list.id)"> 수정하기</a>
                                </td>
                            
                            </tr>
                        </template>
                    </template>
                </tbody>
            </table>
            <div class="mx-5 " v-if="target_add_form">
                <input type="text" id="input-custom" class="mt-1" placeholder="name" v-model="target_form_data.name">
                <select id="input-custom" class="mt-1" v-model="target_form_data.storetype">
                    <option v-for="(list, index) in storetypeKr" :key="index" :value="list.value">{{ list.text }}</option>
                </select>
                <input type="text"  id="input-custom" class="mt-1" placeholder="phone" v-model="target_form_data.phone">
                <select id="input-custom" class="mt-1" v-model="target_form_data.info_target_default">
                    <template v-for="list2,index in target_defaults.data.data" :key="index">
                        <option :value="list2.id">
                            {{ list2.attributes.name }}
                        </option>
                    </template>
                </select>
                <input type="text"  id="input-custom" class="mt-1" placeholder="url" v-model="target_form_data.url">
                <input type="text"  id="input-custom" class="mt-1" placeholder="idx" v-model="target_form_data.idx">
                <div class="d-flex justify-content-center">
                    <button class="btn btn-success mt-2" @click="savetargetform">
                        save
                    </button>
                </div>
    
            </div>
            <div class="d-flex justify-content-center mt-4" v-else>
                <button class="btn btn-info" @click="ShowTargetAddForm()">타겟추가</button>
            </div>
        </div>
    </div>


</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            select_id : null,
            target_defaults : null,
            storetypeKr:[
                { text: '오피', value: '오피' },
                { text: '휴게텔', value: '휴게텔' },
                { text: '건마', value: '건마' },
                { text: '안마', value: '안마' },
                { text: '출장', value: '출장' },
                { text: '유흥주점', value: '유흥주점' },
                { text: '핸플/립', value: '핸플/립' },        
                { text: '키스방', value: '키스방' }, 
                { text: '트젠/리얼', value: '트젠/리얼' }, 
            ],
            target_add_form : false,
            target_form_data : {name:null, storetype:null, phone:null, url:null, idx:null,info_target_default:null,info:this.infoData.data.id},
            
        }
    },
    props:{
        infoData:Object
    },
    methods:{
        
        ShowTargetAddForm(){
            if(this.target_add_form){
                this.target_add_form = false; 
            }else{
                this.target_add_form = true;
                
            }
            this.select_id = null;
   
        },
        savetargetform(){
            let data = {'data':
                this.target_form_data
            }
            this.$emit('savetargetform',data)
            this.select_id = null;
            this.target_add_form = false;
        },
        edittarget(data){
            this.$emit('edittarget',data)
            this.select_id = null;
            this.target_add_form = false;
        },
        deletetarget(id){
            if (confirm("정말 삭제하시겠습니까??") == true){
                this.$emit('deletetarget',id)
            }
            this.select_id = null;
            this.target_add_form = false;
        },
        select(id){
            if(this.select_id==null){
              
                this.select_id = id

            }else{
                this.select_id = id
            }
            this.target_add_form = false
        },
        async get_deault_sites(){
            let param = '/api/info-target-defaults'
            await axios.get(this.$store.state.API_URL+param,{headers: {Authorization: "Bearer "+this.$store.state.token}})
            .then(res=>{
                this.target_defaults = res
            })
        },
        async get_targets(id){
            let param = '/api/info-target'
            console.log(id)
            console.log(param)
        },
        FilterDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) 
                month = '0' + month;
            if (day.length < 2) 
                day = '0' + day;
            return [year, month, day].join('-');
        }
    },
    mounted(){
        this.get_deault_sites()
    }
}
</script>

<style>
.word {
        /* outline: 1px solid black; */
        display: block;
        color: black;
        width: 230px;
        font-size: 20px;
        font-weight: bolder !important;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
}
</style>