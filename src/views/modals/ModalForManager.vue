<template>
    <div class="modal fade" id="modal2" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg modal-fullscreen-lg-down">
            <div v-if="detailData" class="modal-content">
                <div class="modal-header p-2">
                    <!-- 모달헤더 -->
                    <div class="my-font-b7">
                        <!-- <a v-bind:href="`tel:${detailData.phone}`" v-on:click="eventCallFn(detailData.id)" class="contact-store me-1"
                            ><font-awesome-icon :icon="['fas', 'square-phone']" size="lg"
                        /></a>
                        <a v-bind:href="`tel:${detailData.phone}`" v-on:click="eventCallFn(detailData.id)" class="my-font-gray me-2">{{ detailData.phone }}</a> -->
                        
                    </div>
                    <a href="#" onclick="return false;" class="my-font-gray" data-bs-dismiss="modal"><font-awesome-icon :icon="['fas', 'times']" size="lg" /></a>
                    <!-- 모달헤더 종료 -->
                </div>
                <div class="modal-body my-h100 px-0 pt-0" id="scroll-to-top">

                    

                    <div v-if="modalType == 0" class="px-0 pb-3 mb-5">
                        <div>
                            <div class="mx-4 mt-3">
                                <span class="mx-1 me-2 my-font-10">이름</span>
                                <input id="input-custom" type="text" label="id" v-model="detailData.name">
                            </div>
                            <div class="mx-4 mt-3">
                                <span class="mx-1 me-2 my-font-10">국적</span>
                         
                                <select id="input-custom" v-model="detailData.country">
                                    <option v-for="list,index in countryList" :key="index" :value="list.value">
                                        {{ list.text }}
                                    </option>
                                </select>
                            </div>
                            <div class="mx-4 mt-3">
                                <span class="mx-1 me-2 my-font-10">+플러스</span>
                                <select id="input-custom" v-model="detailData.premium">
                                    <option v-for="list in 100" :key="list" :value="list.toString()">{{list}}</option>
                                </select>
                                
                            </div>
                            <div class="mx-4 mt-3">
                                <span class="mx-1 me-2 my-font-10">나이</span>
                    
                                <select id="input-custom" v-model="detailData.age">
                                    <option v-for="list in 30" :key="list" :value="(list+19).toString()">{{list+19}}</option>
                                </select>
                            </div>
                            <div class="mx-4 mt-3">
                                <span class="mx-1 me-2 my-font-10">키</span>
                                <select id="input-custom" v-model="detailData.height">
                                    <option v-for="list in 40" :key="list" :value="(list+140).toString()">{{list+140}}</option>
                                </select>
                            </div>
                            <div class="mx-4 mt-3">
                                <span class="mx-1 me-2 my-font-10">몸무게</span>
                                <select id="input-custom" v-model="detailData.weight">
                                    <option v-for="list in 40" :key="list" :value="(list+35).toString()">{{list+35}}</option>
                                </select>
                            </div>
                            <div class="mx-4 mt-3">
                                <span class="mx-1 me-2 my-font-10">breast</span>
                                <select id="input-custom" v-model="detailData.breast">
                                    <option v-for="list,index in breastList" :key="index" :value="list">{{ list.toUpperCase() }}</option>
                                </select>
                            </div>
                            <div class="mx-4 mt-3">
                                <span class="mx-1 me-2 my-font-10">간단한소개</span>
                                <textarea id="input-custom" type="text" label="id" v-model="detailData.content" maxlength="100" rows="3"></textarea>
                            </div>
                            <div class="mx-4 mt-3" v-if="detailData.webp_img">
                                <sync-loader class="d-flex justify-content-center" :loading="loading" :color="color" :size="size" v-if="input_loding_status"></sync-loader>
                                
                                <!-- <div class="mb-3 d-flex justify-content-center" v-else> -->
                                <div class="" v-else>
                                    <input class="form-control mb-2 mt-1" type="file" id="input-custom" ref="file" @change="FileUpload">
                                    <span class="mb-3 d-flex justify-content-center">
                                        <img :src="detailData.webp_img" style="width:69%"/>
                                        
                                    </span>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" :value="detailData.webp_img" aria-describedby="basic-addon2" disabled>
                                    </div>
                             
                                    <ul class="list-group">
                                        
                                        <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                            <div class="d-flex align-items-center">
                                                <button class="btn mb-0 btn-outline-danger btn-sm null null btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-arrow-up" aria-hidden="true"></i>
                                                </button>
                                                <div class="d-flex flex-column">
                                                    <h6 class="mb-1 text-dark text-sm">원본</h6>
                                                    <span class="text-xs">{{ (detailData.origin_size/1.049e+6 * 10 / 10).toFixed(5) }} Mb </span>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center text-danger text-gradient text-sm font-weight-bold"> 100% </div>
                                        </li>
                                        <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                            <div class="d-flex align-items-center">
                                                <button class="btn mb-0 btn-outline-success btn-sm null null btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-arrow-down" aria-hidden="true"></i>
                                                </button>
                                                    <div class="d-flex flex-column">
                                                        <h6 class="mb-1 text-dark text-sm">webp 최적화</h6>
                                                    
                                                        <span class="text-xs">{{ (detailData.webp_size/1.049e+6 * 10 / 10).toFixed(5) }} Mb </span>
                                                    </div>
                                                 

                                            </div>
                                            <div class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold"> {{ (detailData.webp_size/detailData.origin_size*100).toFixed(0) }}%</div>
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>
                        
                            <div class="mt-3">
                                <div class="d-flex justify-content-center">
                                    <button class="btn btn-success text-center" @click="SavePhoto">저장하기</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div v-if="modalType == 1" class="px-3 pb-3 mb-5">
                        sdf
                    </div>
  
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import Modal from "bootstrap/js/dist/modal.js";
import axios from "axios";
import SyncLoader from 'vue-spinner/src/SyncLoader.vue';

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons/faCommentDots";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons/faSquarePhone";
import { faCommentSms } from "@fortawesome/free-solid-svg-icons/faCommentSms";
import { faImage } from "@fortawesome/free-regular-svg-icons/faImage";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons/faLightbulb";
import { faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons/faArrowAltCircleUp";

library.add(faTimes, faCommentDots, faSquarePhone, faCommentSms);
library.add(faImage, faLightbulb, faArrowAltCircleUp);

export default {
    name: "ListModal",
    components: {
        FontAwesomeIcon,
        SyncLoader

    },
    data() {
        return {
            modalType : 0,
            // 모달 변수
            openModal: null,
            // 데이터 변수
            detailData: null,
            detailData2: null,
            // 모달내용 변수

            breastList : ['a','b','c','d','e','f','g','h'],
            countryList : [
                {text:'한국',value:'kr'},
                {text:'태국',value:'th'},
                {text:'중국',value:'cn'},
                {text:'베트남',value:'vn'},
                {text:'러시아',value:'ru'},
                {text:'일본',value:'jp'},
                {text:'가나',value:'gh'},
                {text:'가봉',value:'ga'},
                {text:'가이아나',value:'gy'},
                {text:'감비아',value:'gm'},
                {text:'건지 섬',value:'gg'},
                {text:'과들루프',value:'gp'},
                {text:'과테말라',value:'gt'},
                {text:'괌',value:'gu'},
                {text:'그레나다',value:'gd'},
                {text:'그리스',value:'ge'},
                {text:'그린란드',value:'gr'},
                {text:'기니',value:'gl'},
                {text:'기니비사우',value:'gn'},
                {text:'나미비아',value:'gw'},
                {text:'나우루',value:'na'},
                {text:'나이지리아',value:'nr'},
                {text:'남극',value:'ng'},
                {text:'남아프리카 공화국',value:'aq'},
                {text:'네덜란드',value:'za'},
                {text:'네덜란드령 안틸레스',value:'nl'},
                {text:'네팔',value:'an'},
                {text:'노르웨이',value:'np'},
                {text:'노퍽 섬',value:'no'},
                {text:'누벨칼레도니',value:'nf'},
                {text:'뉴질랜드',value:'nc'},
                {text:'니우에',value:'nz'},
                {text:'니제르',value:'nu'},
                {text:'니카라과',value:'ne'},
                {text:'덴마크',value:'ni'},
                {text:'도미니카',value:'dk'},
                {text:'도미니카 공화국',value:'dm'},
                {text:'독일',value:'do'},
                {text:'동티모르',value:'de'},
                {text:'라오스',value:'tl'},
                {text:'라이베리아',value:'la'},
                {text:'라트비아',value:'lr'},
                {text:'레바논',value:'lv'},
                {text:'레소토',value:'lb'},
                {text:'레위니옹',value:'ls'},
                {text:'루마니아',value:'re'},
                {text:'룩셈부르크',value:'ro'},
                {text:'르완다',value:'lu'},
                {text:'리비아',value:'rw'},
                {text:'리투아니아',value:'ly'},
                {text:'리히텐슈타인',value:'lt'},
                {text:'마다가스카르',value:'li'},
                {text:'마르티니크',value:'mg'},
                {text:'마셜 제도',value:'mq'},
                {text:'마요트',value:'mh'},
                {text:'마카오',value:'yt'},
                {text:'마케도니아 공화국',value:'mo'},
                {text:'말라위',value:'mk'},
                {text:'말레이시아',value:'mw'},
                {text:'말리',value:'my'},
                {text:'맨 섬',value:'ml'},
                {text:'멕시코',value:'im'},
                {text:'모나코',value:'mx'},
                {text:'모로코',value:'mc'},
                {text:'모리셔스',value:'ma'},
                {text:'모리타니',value:'mu'},
                {text:'모잠비크',value:'mr'},
                {text:'몬테네그로',value:'mz'},
                {text:'몬트세랫',value:'me'},
                {text:'몰도바',value:'ms'},
                {text:'몰디브',value:'md'},
                {text:'몰타',value:'mv'},
                {text:'몽골',value:'mt'},
                {text:'미국',value:'mn'},
                {text:'미국령 군소 제도',value:'us'},
                {text:'미국령 버진아일랜드',value:'um'},
                {text:'미얀마',value:'vi'},
                {text:'미크로네시아 연방',value:'mm'},
                {text:'바누아투',value:'fm'},
                {text:'바레인',value:'vu'},
                {text:'바베이도스',value:'bh'},
                {text:'바티칸 시국',value:'bb'},
                {text:'바하마',value:'va'},
                {text:'방글라데시',value:'bs'},
                {text:'버뮤다',value:'bd'},
                {text:'베냉',value:'bm'},
                {text:'베네수엘라',value:'bj'},
                {text:'벨기에',value:'ve'},
                {text:'벨라루스',value:'be'},
                {text:'벨리즈',value:'by'},
                {text:'보스니아 헤르체고비나',value:'bz'},
                {text:'보츠와나',value:'ba'},
                {text:'볼리비아',value:'bw'},
                {text:'부룬디',value:'bo'},
                {text:'부르키나파소',value:'bi'},
                {text:'부베 섬',value:'bf'},
                {text:'부탄',value:'bv'},
                {text:'북마리아나 제도',value:'bt'},
                {text:'불가리아',value:'mp'},
                {text:'브라질',value:'bg'},
                {text:'브루나이',value:'br'},
                {text:'사모아',value:'bn'},
                {text:'사우디아라비아',value:'ws'},
                {text:'사우스조지아 사우스샌드위치 제도',value:'sa'},
                {text:'산마리노',value:'gs'},
                {text:'상투메 프린시페',value:'sm'},
                {text:'생피에르 미클롱',value:'st'},
                {text:'서사하라',value:'pm'},
                {text:'세네갈',value:'eh'},
                {text:'세르비아',value:'sn'},
                {text:'세이셸',value:'rs'},
                {text:'세인트루시아',value:'sc'},
                {text:'세인트빈센트 그레나딘',value:'lc'},
                {text:'세인트키츠 네비스',value:'vc'},
                {text:'세인트헬레나',value:'kn'},
                {text:'소말리아',value:'sh'},
                {text:'솔로몬 제도',value:'so'},
                {text:'수단',value:'sb'},
                {text:'수리남',value:'sd'},
                {text:'스리랑카',value:'sr'},
                {text:'스발바르 얀마옌',value:'lk'},
                {text:'스와질란드',value:'sj'},
                {text:'스웨덴',value:'sz'},
                {text:'스위스',value:'se'},
                {text:'스페인',value:'ch'},
                {text:'슬로바키아',value:'es'},
                {text:'슬로베니아',value:'sk'},
                {text:'시리아',value:'si'},
                {text:'시에라리온',value:'sy'},
                {text:'싱가포르',value:'sl'},
                {text:'아랍에미리트',value:'sg'},
                {text:'아루바',value:'ae'},
                {text:'아르메니아',value:'aw'},
                {text:'아르헨티나',value:'am'},
                {text:'아메리칸사모아',value:'ar'},
                {text:'아이슬란드',value:'as'},
                {text:'아이티',value:'is'},
                {text:'아일랜드',value:'ht'},
                {text:'아제르바이잔',value:'ie'},
                {text:'아프가니스탄',value:'az'},
                {text:'안도라',value:'af'},
                {text:'알바니아',value:'ad'},
                {text:'알제리',value:'al'},
                {text:'앙골라',value:'dz'},
                {text:'앤티가 바부다',value:'ao'},
                {text:'앵귈라',value:'ag'},
                {text:'에리트레아',value:'ai'},
                {text:'에스토니아',value:'er'},
                {text:'에콰도르',value:'ee'},
                {text:'에티오피아',value:'ec'},
                {text:'엘살바도르',value:'et'},
                {text:'영국',value:'sv'},
                {text:'영국령 버진아일랜드',value:'gb'},
                {text:'영국령 인도양 지역',value:'vg'},
                {text:'예멘',value:'io'},
                {text:'오만',value:'ye'},
                {text:'오스트레일리아',value:'om'},
                {text:'오스트리아',value:'au'},
                {text:'온두라스',value:'at'},
                {text:'올란드 제도',value:'hn'},
                {text:'왈리스 퓌튀나',value:'ax'},
                {text:'요르단',value:'jo'},
                {text:'우간다',value:'ug'},
                {text:'우루과이',value:'uy'},
                {text:'우즈베키스탄',value:'uz'},
                {text:'우크라이나',value:'ua'},
                {text:'이라크',value:'wf'},
                {text:'이란',value:'iq'},
                {text:'이스라엘',value:'ir'},
                {text:'이집트',value:'il'},
                {text:'이탈리아',value:'eg'},
                {text:'인도',value:'it'},
                {text:'인도네시아',value:'id'},
                {text:'자메이카',value:'in'},
                {text:'잠비아',value:'jm'},
                {text:'저지 섬',value:'zm'},
                {text:'적도 기니',value:'je'},
                {text:'조선민주주의인민공화국',value:'gq'},
                {text:'조지아',value:'kp'},
                {text:'중앙아프리카 공화국',value:'cf'},
                {text:'중화민국',value:'tw'},
                {text:'지부티',value:'dj'},
                {text:'지브롤터',value:'gi'},
                {text:'짐바브웨',value:'zw'},
                {text:'차드',value:'td'},
                {text:'체코',value:'cz'},
                {text:'칠레',value:'cl'},
                {text:'카메룬',value:'cm'},
                {text:'카보베르데',value:'cv'},
                {text:'카자흐스탄',value:'kz'},
                {text:'카타르',value:'qa'},
                {text:'캄보디아',value:'kh'},
                {text:'캐나다',value:'ca'},
                {text:'케냐',value:'ke'},
                {text:'케이맨 제도',value:'ky'},
                {text:'코모로',value:'km'},
                {text:'코스타리카',value:'cr'},
                {text:'코코스 제도',value:'cc'},
                {text:'코트디부아르',value:'ci'},
                {text:'콜롬비아',value:'co'},
                {text:'콩고 공화국',value:'cg'},
                {text:'콩고 민주 공화국',value:'cd'},
                {text:'쿠바',value:'cu'},
                {text:'쿠웨이트',value:'kw'},
                {text:'쿡 제도',value:'ck'},
                {text:'크로아티아',value:'hr'},
                {text:'크리스마스 섬',value:'cx'},
                {text:'키르기스스탄',value:'kg'},
                {text:'키리바시',value:'ki'},
                {text:'키프로스',value:'cy'},
                {text:'타지키스탄',value:'tj'},
                {text:'탄자니아',value:'tz'},
                {text:'터크스 케이커스 제도',value:'tc'},
                {text:'터키',value:'tr'},
                {text:'토고',value:'tg'},
                {text:'토켈라우',value:'tk'},
                {text:'통가',value:'to'},
                {text:'투르크메니스탄',value:'tm'},
                {text:'투발루',value:'tv'},
                {text:'튀니지',value:'tn'},
                {text:'트리니다드 토바고',value:'tt'},
                {text:'파나마',value:'pa'},
                {text:'파라과이',value:'py'},
                {text:'파키스탄',value:'pk'},
                {text:'파푸아 뉴기니',value:'pg'},
                {text:'팔라우',value:'pw'},
                {text:'팔레스타인',value:'ps'},
                {text:'페로 제도',value:'fo'},
                {text:'페루',value:'pe'},
                {text:'포르투갈',value:'pt'},
                {text:'포클랜드 제도',value:'fk'},
                {text:'폴란드',value:'pl'},
                {text:'푸에르토리코',value:'pr'},
                {text:'프랑스',value:'fr'},
                {text:'프랑스령 기아나',value:'gf'},
                {text:'프랑스령 남부와 남극 지역',value:'tf'},
                {text:'프랑스령 폴리네시아',value:'pf'},
                {text:'피지',value:'fj'},
                {text:'핀란드',value:'fi'},
                {text:'필리핀',value:'ph'},
                {text:'핏케언 제도',value:'pn'},
                {text:'허드 맥도널드 제도',value:'hm'},
                {text:'헝가리',value:'hu'},
                {text:'홍콩',value:'hk'},
            ],
            commentData: null,
            styleImg: "<img width='800' height='1000' style='width: 100%; height: auto'",
            styleText: "<p style='text-align:center;'",
            input_loding_status :false,
        };
    },
    methods: {
        async SavePhoto(){
            let param = '/api/info-photos/'+this.detailData.id
            let data = {'data':this.detailData}
            await axios.put(this.$store.state.API_URL+param, data, {headers: {Authorization: "Bearer "+this.$store.state.token}})
            .then(response=>{
                if(response.status==200){
                    this.openModal.hide();
                }
            })
        },
      
        FileUpload(){
            this.input_loding_status = true
            this.file = this.$refs.file.files[0];
            const formData = new FormData();
            formData.append("file", this.file);
            axios.post('http://54.238.27.3/api/program/webp-convert',formData)
            // axios.post('http://localhost:8000/api/program/webp-convert',formData)
            .then(response=>{
                if (response.status == 200){
                    
                    axios.get(this.$store.state.API_URL+'/api/info-photos?filters[origin_size][$eq]='+this.detailData.origin_size,{headers: {Authorization: "Bearer "+this.$store.state.token}})
                    .then(res=>{
                        let total = res.data.meta.pagination.total
                        if(total==0){
                            this.detailData.origin_img = response.data.origin_url
                            this.detailData.webp_img = response.data.webp_url
                            this.detailData.img_width = response.data.origin_width
                            this.detailData.img_height = response.data.origin_height
                            this.detailData.origin_size = response.data.origin_size
                            this.detailData.webp_size = response.data.webp_size
                            this.input_loding_status = false
                        }else{
                            
                            alert('이사진은 더이상 업로드 할수 없는사진입니다')
                            this.input_loding_status = false
                        }
                     
                    })
                }
                
            }).catch(error=>{
                console.log(error)
                alert('업로드 에러')
                this.input_loding_status = false
            })
           
        
        },
        createModal4Fn() {
            this.openModal = new Modal(document.getElementById("modal2"));
        },

        openModalFnSet(argv) {
            this.openModal4Fn();
            this.getDetailDataFn(argv);
            // this.getCommentDataFn(argv);
            // this.visitDetailFn(argv);
        },
        openModal4Fn() {
            this.openModal.show();
            history.pushState(null, null, location.href);
            window.onpopstate = () => {
                this.openModal.hide();
            };
            document.getElementById("modal2").addEventListener("hidden.bs.modal", () => {
                window.onpopstate = () => {
                    this.$router.push("/");
                };
            });
        },
        getDetailDataFn(argv) {
            this.detailData = argv;
          
            axios
                .get(this.$store.state.APISever + "/api/frontend/info-content/" + argv.id)
                .then((response) => {
                    this.detailData2 = response.data;
                })
                .catch(() => {});
        },
      
        eventCallFn(argv) {
            axios
                .get(this.$store.state.APISever + "/api/frontend/phone-hit/" + argv)
                .then(() => {})
                .catch(() => {});
        },
       
    },
    mounted() {
        this.createModal4Fn();
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
.my-cursor{
    cursor: pointer;
}


</style>
