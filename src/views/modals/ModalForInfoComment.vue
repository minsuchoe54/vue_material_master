<template>
    <div class="modal fade" id="modal4" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg modal-fullscreen-lg-down">
            <div v-if="detailData" class="modal-content">
                <div class="modal-header p-2">
                    <!-- 모달헤더 -->
                    <div class="my-font-b7">
                        <a v-bind:href="`tel:${detailData.phone}`" v-on:click="eventCallFn(detailData.id)" class="contact-store me-1"
                            ><font-awesome-icon :icon="['fas', 'square-phone']" size="lg"
                        /></a>
                        <a v-bind:href="`tel:${detailData.phone}`" v-on:click="eventCallFn(detailData.id)" class="my-font-gray me-2">{{ detailData.phone }}</a>
                        <a v-bind:href="`sms:${detailData.phone}${this.contactSMS}`" class="contact-store me-1"><font-awesome-icon :icon="['fas', 'comment-sms']" size="lg" /></a>
                        <a v-bind:href="`sms:${detailData.phone}${this.contactSMS}`" class="my-font-gray">문자보내기</a>
                    </div>
                    <a href="#" onclick="return false;" class="my-font-gray" data-bs-dismiss="modal"><font-awesome-icon :icon="['fas', 'times']" size="lg" /></a>
                    <!-- 모달헤더 종료 -->
                </div>
                <div class="modal-body my-h100 px-0 pt-0" id="scroll-to-top">
                    <!-- 모달본문 공통 -->
                    <div class="text-center my-font-09 my-font-b5">
                        <span class="me-1 my-font-10 my-font-theme"><font-awesome-icon :icon="['far', 'lightbulb']" /></span>
                        <span class="me-1 my-font-theme">지도로 검색</span>
                        <span>사용해보셨나요?</span>
                        <br />
                        <span>지도를 움직여서 주변의 업소를 찾으세요</span>
                        <br />
                        <span>내 위치와 업종필터로 빠르게 검색하세요</span>
        
                    </div>
                    <div class="text-center my-3 my-font-b7">
                        <span v-on:click="modalType=0" v-bind:class="modalType == 0 ? 'my-font-theme' : 'my-font-gray'" class="my-cursor"
                            ><font-awesome-icon :icon="['far', 'image']" size="lg" class="me-1" /><span v-bind:class="modalType == 0 ? '' : 'my-font-gray'">업소정보</span></span
                        >
                        <span class="mx-2"></span>
                        <span v-on:click="modalType=1" v-bind:class="modalType == 1 ? 'my-font-theme' : 'my-font-gray'" class="my-cursor"
                            ><font-awesome-icon :icon="['fas', 'comment-dots']" size="lg" class="me-1" /><span v-bind:class="modalType == 1 ? '' : 'my-font-gray'">후기보기</span></span
                        >
                    </div>
                    <hr class="my-hr" />
                    <div class="mt-3">
                        <!-- <img src="/public/image/banner.webp" class="w-100" /> -->
                       
                    </div>
                    <!-- 모달본문 공통 종료-->
                    <!-- 모달본문 타입1 -->
                    <div v-html="detailData.content_1"></div>
                    <div v-if="$store.state.modalType == 0 && detailData2" class="px-0 pb-3 mb-5">
                        <div v-html="detailData2.content.replace(/<img/gi, `${styleImg}`).replace(/<p/gi, `${styleText}`).replace(/<h1/gi, `${styleText}`)"></div>
                        <div class="mt-4">
                           
                        </div>
                    </div>
                    <!-- 모달본문 타입1 종료 -->
                    <!-- 모달본문 타입2 -->
                    <div v-if="$store.state.modalType == 1" class="px-3 pb-3 mb-5">
                        <ListComment v-if="commentData" v-bind:detailDataP="detailData" v-bind:commentDataP="commentData"></ListComment>
                    </div>
                    <!-- 모달본문 타입2 종료 -->
                </div>
                
                <div class="scroll-to-top">
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
    },
    data() {
        return {
            // 모달 변수
            modalType : 0,
            openModal2: null,
            // 데이터 변수
            detailData: null,
            detailData2: null,
            // 모달내용 변수
            commentData: null,
            styleImg: "<img width='800' height='1000' style='width: 100%; height: auto'",
            styleText: "<p style='text-align:center;'",
            contactSMS: (this.$store.state.checkMobile == "ios" ? "&" : "?") + "body=" + "안녕하세요~%0a오피맵 보고 연락드립니다%0a",
        };
    },
    methods: {
        createModal5Fn() {
            this.openModal2 = new Modal(document.getElementById("modal4"));
        },
        openModalFnSet(argv) {
            this.openModal2();
            this.getDetailDataFn(argv);
            // this.getCommentDataFn(argv);
            // this.visitDetailFn(argv);
        },
        openModal2() {
            this.openModal2.show();
            history.pushState(null, null, location.href);
            window.onpopstate = () => {
                this.openModal2.hide();
            };
            document.getElementById("modal4").addEventListener("hidden.bs.modal", () => {
                this.$store.commit("modalTypeFn", 0);
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
        scrollToTopFn() {
            document.getElementById("scroll-to-top").scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        },
    },
    mounted() {
        this.createModal5Fn();
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

</style>