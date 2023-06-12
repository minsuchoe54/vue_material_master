<template>
   
    <div class="modal fade" id="modal3" tabindex="-1">
        <div class="my-spinner-bg" v-if="loader">
            spinner
        </div>
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg modal-fullscreen-lg-down ">
           
            <div class="modal-content">
                <div class="modal-header p-2">
                    <!-- 모달헤더 -->
                    <div class="my-font-b7">
                       <div class="text-center my-3 my-font-b7">
                        <span v-on:click="modalType=0" v-bind:class="modalType == 0 ? 'my-font-theme' : 'my-font-gray'" class="my-cursor">
                            <font-awesome-icon :icon="['far', 'address-card']" size="lg" class="me-1" /><span v-bind:class="modalType == 0 ? '' : 'my-font-gray'">정보</span>    
                        </span>
                        <span class="mx-2 mt-1"></span>
                        <span v-on:click="modalType=1" v-bind:class="modalType == 1 ? 'my-font-theme' : 'my-font-gray'" class="my-cursor"
                            ><font-awesome-icon :icon="['fab', 'cloudscale']" size="lg" class="me-1" /><span v-bind:class="modalType == 1 ? '' : 'my-font-gray'">위치</span></span
                        >
                        <span class="mx-2 mt-1"></span>
                        <span v-on:click="modalType=2" v-bind:class="modalType == 2 ? 'my-font-theme' : 'my-font-gray'" class="my-cursor"
                            ><font-awesome-icon :icon="['far', 'money-bill-alt']" size="lg" class="me-1" /><span v-bind:class="modalType == 2 ? '' : 'my-font-gray'">제휴</span></span
                        >
                        <span class="mx-2 mt-1"></span>
                        <span v-on:click="modalType=3" v-bind:class="modalType == 3 ? 'my-font-theme' : 'my-font-gray'" class="my-cursor"
                            ><font-awesome-icon :icon="['fa', 'user-check']" size="lg" class="me-1" /><span v-bind:class="modalType == 3 ? '' : 'my-font-gray'">계정정보</span></span
                        >
                        <span class="mx-2 mt-1"></span>
                        <span v-on:click="modalType=4" v-bind:class="modalType == 4 ? 'my-font-theme' : 'my-font-gray'" class="my-cursor"
                            ><font-awesome-icon :icon="['far', 'arrow-alt-circle-up']" size="lg" class="me-1" /><span v-bind:class="modalType == 4 ? '' : 'my-font-gray'">타겟</span></span
                        >
                        <span class="mx-2 mt-1"></span>
                        <span v-on:click="modalType=5" v-bind:class="modalType == 5 ? 'my-font-theme' : 'my-font-gray'" class="my-cursor"
                            ><font-awesome-icon :icon="['far', 'bar-chart']" size="lg" class="me-1" /><span v-bind:class="modalType == 5 ? '' : 'my-font-gray'">통계</span></span
                        >
                        <span class="mx-2 mt-1"></span>
                        <span v-on:click="modalType=6" v-bind:class="modalType == 6 ? 'my-font-theme' : 'my-font-gray'" class="my-cursor"
                            ><font-awesome-icon :icon="['fas', 'comment-dots']" size="lg" class="me-1" /><span v-bind:class="modalType == 6 ? '' : 'my-font-gray'">댓글</span></span
                        >
                        <span class="mx-2 mt-1"></span>
                        <span v-on:click="modalType=7" v-bind:class="modalType == 7 ? 'my-font-theme' : 'my-font-gray'" class="my-cursor"
                            ><font-awesome-icon :icon="['far', 'image']" size="lg" class="me-1" /><span v-bind:class="modalType == 7 ? '' : 'my-font-gray'">Preview</span></span
                        >
                       
                    </div>
                        <!-- <a v-bind:href="`sms:${detailData.phone}${this.contactSMS}`" class="my-font-gray">문자보내기</a> -->
                    </div>
                    <a href="#" onclick="return false;" class="my-font-gray" data-bs-dismiss="modal"><font-awesome-icon :icon="['fas', 'times']" size="lg" /></a>
                    <!-- 모달헤더 종료 -->
                </div>
                <div class="modal-body my-h100 px-0 pt-0" id="scroll-to-top">
                  
                    <hr class="my-hr" />
                    <div class="mt-3">
                        <!-- 업소정보 -->
                
                        <div v-if="modalType==0"> 
                            
                            <InfoCard :infoData="infoData" @saveinfo="saveinfo"/>
                        </div>
                        <!-- 지도 -->
                        <div v-else-if="modalType==1">
                            <Map :lat="infoData.data.attributes.lat" :lon="infoData.data.attributes.lon"  @setuplatlon="setuplatlon" />
                            <input type="text" id="input-custom" style="width:33%;" class="mx-2 mt-1" v-model="infoData.data.attributes.lat">
                            <input type="text" id="input-custom" style="width:33%;" class="mx-2 mt-1" v-model="infoData.data.attributes.lon">
                            <button class="btn btn-success btn-md mx-2 mt-3" @click="SaveMap()">위치저장</button>
                        </div>
                        <!-- 제휴 -->
                        <div v-else-if="modalType==2">
                           <InfoPay />
                        </div>
                        <!-- 계정정보 -->
                        <div v-else-if="modalType==3">
                           <InfoAdmin />
                        </div>
                        <!-- 타겟 -->
                        <div v-else-if="modalType==4">
                           <InfoTargets :infoData="infoData" @savetargetform="savetargetform" @edittarget="edittarget" @deletetarget="deletetarget" />
                        </div>
                        <!-- 통계 -->
                        <div v-else-if="modalType==5">
                           
                        </div>
                        <!-- 댓글 -->
                        <div v-else-if="modalType==6">
                           <InfoComment :infoData="infoData"/>
                        </div>
                        <!-- preview -->
                        <div v-else-if="modalType==7">
                           <InfoPreview :infoData="infoData" />
                        </div>
                        
                        <!-- <img src="/public/image/banner.webp" class="w-100" /> -->
                       
                    </div>
                    <!-- 모달본문 공통 종료-->
                    <!-- 모달본문 타입1 -->
                    
                    <!-- 모달본문 타입2 종료 -->
                </div>
                
                <div class="scroll-to-top d-flex justify-content-center">
                    <span v-on:click="scrollToTopFn()" class="my-cursor"><font-awesome-icon :icon="['far', 'arrow-alt-circle-up']" size="2x" /></span>
                </div>
            </div>
        </div>
        
    </div>

    
</template>

<script>
import Modal from "bootstrap/js/dist/modal.js";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons/faCommentDots";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons/faUserCheck";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons/faSquarePhone";
import { faCommentSms } from "@fortawesome/free-solid-svg-icons/faCommentSms";
import { faImage } from "@fortawesome/free-regular-svg-icons/faImage";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons/faLightbulb";

import { faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons/faArrowAltCircleUp";
import { faChartBar } from "@fortawesome/free-regular-svg-icons/faChartBar";
import { faMoneyBill1 } from "@fortawesome/free-regular-svg-icons/faMoneyBill1";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons/faAddressCard";
import { faCloudscale } from "@fortawesome/free-brands-svg-icons/faCloudscale";


import InfoCard from '../components/InfoCard'
import Map from '../components/Map'

import InfoTargets from '../components/InfoTargets'
import InfoPay from '../components/InfoPay'
import InfoAdmin from '../components/InfoAdmin'
import InfoComment from '../components/InfoComment'
import InfoPreview from '../components/InfoPreview'

library.add(faTimes, faCommentDots, faSquarePhone, faCommentSms,faUserCheck,faChartBar,faMoneyBill1,faAddressCard,faCloudscale);
library.add(faImage, faLightbulb, faArrowAltCircleUp);

export default {
    name: "ListModal",
    components: {
        FontAwesomeIcon,
   
        InfoCard,
        Map,

        InfoTargets,
        InfoPay,
        InfoAdmin,
        InfoComment,
        InfoPreview,
        
        
    },
    data() {
        return {
            // 모달 변수
            // id : null,
            modalType : 0,
            loader : true,
            openModal : null,
            infoData : null,
          


        };
    },
    methods: {
       
        async SaveMap(){ //SaveInfo 도 같이함
            // console.log(this.infoData)
            await axios.get('https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x='+this.infoData.data.attributes.lon+'&y='+this.infoData.data.attributes.lat,{headers:{Authorization:'KakaoAK '+this.$store.state.KAKAO_KEY}})
                .then(response=>{
                    if(response.status==200){
                    this.infoData.data.attributes.sido = response.data.documents[0].region_1depth_name
                    this.infoData.data.attributes.sigugun = response.data.documents[0].region_2depth_name
                    this.infoData.data.attributes.adress = response.data.documents[0].address_name
                    let data = {'data':
                        {
                            lat:this.infoData.data.attributes.lat,
                            lon:this.infoData.data.attributes.lon,
                            sido:this.infoData.data.attributes.sido,
                            sigugun:this.infoData.data.attributes.sigugun,
                            adress:this.infoData.data.attributes.adress,
                        }
                    }
                    this.saveinfo(this.infoData.data.id,data)
                    }
                })
            },
            async saveinfo(id,data){
            let param = '/api/infos/'+id
            await axios.put(this.$store.state.API_URL+param,data, {headers: {Authorization: "Bearer "+this.$store.state.token}} )
            .then(res=>{
                if(res.status==200){
                    alert('success')
                }

            })
            
        },
        async savetargetform(data){
            let param = '/api/info-targets'
            axios.post(this.$store.state.API_URL+param, data, {headers: {Authorization: "Bearer "+this.$store.state.token}} )
            .then(res=>{
                if(res.status==200){
                    this.infoData.data.attributes.info_targets.data.push(res.data.data)
                    alert('success')
                }
            })
        },
        async edittarget(datas){
            let param = '/api/info-targets/'+datas.id
            let data = {'data':
                datas.attributes
            }
            axios.put(this.$store.state.API_URL+param, data, {headers: {Authorization: "Bearer "+this.$store.state.token}} )
            .then(res=>{
                if(res.status==200){
                    console.log(datas.attributes)
                    alert('success')
                    // let index = this.infoData.data.attributes.info_targets.data.findIndex((x) => x.id == datas.id);
                    // this.infoData.data.attributes.info_targets.data[index] = res.attributes
                    // console.log(index)
                    // console.log(this.infoData.data.attributes.info_targets.data[index].attributes = res.attributes)
                }
             
            })

        },
        async deletetarget(id){
            let param = '/api/info-targets/'+id
            axios.delete(this.$store.state.API_URL+param,{headers: {Authorization: "Bearer "+this.$store.state.token}} )
            .then(res=>{
                let index = this.infoData.data.attributes.info_targets.data.findIndex((x) => x.id == id);
                if(res.status==200){
                    this.infoData.data.attributes.info_targets.data.splice(index,1)
                    alert('success')
                }
            })
        },
        setuplatlon(value){
            this.infoData.data.attributes.lat = value[0]
            this.infoData.data.attributes.lon = value[1]
        },
        createModal3Fn() {
            this.openModal = new Modal(document.getElementById("modal3"));
        },
        openModalFnSet(id) {

            this.openModal3Fn();
            this.getDetailDataFn(id);

        },
        openModal3Fn() {
            this.openModal.show();
            history.pushState(null, null, location.href);
            window.onpopstate = () => {
                this.openModal.hide();
            };
            document.getElementById("modal3").addEventListener("hidden.bs.modal", () => {
                this.modalType = 0
                this.infoData = null
                // this.$store.commit("modalTypeFn", 0);
                window.onpopstate = () => {
                    this.$router.push("/");
                };
            });
        },
        async getDetailDataFn(id) {           
          
            let case1 = '[fields][0]=name&[fields][1]=storetype&[fields][2]=phone&[fields][3]=open&[fields][4]=close&[fields][5]=tele&[fields][6]=kakao&[fields][7]=line&[fields][8]=level&[fields][9]=introduce&[fields][10]=simple_adress&[fields][11]=lat&[fields][12]=lon&[fields][13]=content_1&[fields][14]=country&[fields][15]=activate'
            let case2 = 'populate[info_targets][fields][0]=name&populate[info_targets][fields][1]=storetype&&populate[info_targets][fields][2]=url&populate[info_targets][fields][3]=activate&populate[info_targets][fields][4]=updatedAt&populate[info_targets][fields][5]=phone&populate[info_targets][fields][6]=idx&populate[info_targets][fields][7]=content'
            let case3 = 'populate[info_comments][fields][0]=content&populate[info_comments][fields][1]=ip&populate[info_comments][fields][2]=updatedAt&populate[info_comments][sort][0]=updatedAt%3Adesc&populate[info_comments][limit]=15&populate[info_comments][start]=0'

            let param = '/api/infos/'+id+'?'+case1+'&'+case2+'&'+case3
            await axios.get(this.$store.state.API_URL+param,{headers: {Authorization: "Bearer "+this.$store.state.token}})
                .then((response) => {
                    if(response.status==200){
                        response.data.data.attributes.info_targets.data.forEach(async (element,index) => {
                            let param = '/api/info-targets/'+element.id+'?populate=info_target_default'
                            await axios.get(this.$store.state.API_URL+param,{headers: {Authorization: "Bearer "+this.$store.state.token}})
                            .then(res=>{
                                response.data.data.attributes.info_targets.data[index].attributes['site'] = res.data.data.attributes.info_target_default.data.attributes.url
                                response.data.data.attributes.info_targets.data[index].attributes['sitename'] = res.data.data.attributes.info_target_default.data.attributes.name
                            })
                        });
                    }
                    this.infoData = response.data;
                    this.loader = false
                   
                })
                .catch(() => {});
        },
      
    
        eventCallFn(argv) {
            axios
                .get(this.$store.state.APISever + "/api/frontend/phone-hit/" + argv)
                .then(() => {})
                .catch(() => {});
        },
        scrollToTopFn() {
            document.getElementById("scroll-to-top").scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        },
    },
    mounted() {
        this.createModal3Fn();
    },
};
</script>

<style scoped>
/* A태그 */
.contact-store,
.contact-store:hover,
.contact-store:focus {
    color: #ff385c;
}
.modal-content{
    height:100%;
}

</style>
