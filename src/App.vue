<!--
=========================================================
* Vue Material Dashboard 2 - v3.0.0
=========================================================

* Product Page: https://creative-tim.com/product/vue-material-dashboard-2
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
-->
<template>
  <sidenav
    :custom_class="color"
    :class="[isRTL ? 'fixed-end' : 'fixed-start']"
    v-if="showSidenav"
  />
  <main
    class="main-content position-relative max-height-vh-100 h-100 overflow-x-hidden"
  >
    <!-- nav -->
    <navbar
      :class="[isNavFixed ? navbarFixed : '', isAbsolute ? absolute : '']"
      :color="isAbsolute ? 'text-white opacity-8' : ''"
      :minNav="navbarMinimize"
      v-if="showNavbar"
    />
    <router-view />
    <app-footer v-show="showFooter" />
    <configurator
      :toggle="toggleConfigurator"
      :class="[showConfig ? 'show' : '', hideConfigButton ? 'd-none' : '']"
    />
  </main>
</template>
<script>
import Sidenav from "./examples/Sidenav";
import Configurator from "@/examples/Configurator.vue";
import Navbar from "@/examples/Navbars/Navbar.vue";
import AppFooter from "@/examples/Footer.vue";
import { mapMutations, mapState } from "vuex";
import  {useCookies}  from "vue3-cookies";
export default {
  name: "App",
  components: {
    Sidenav,
    Configurator,
    Navbar,
    AppFooter
  },
  methods: {
    ...mapMutations(["toggleConfigurator", "navbarMinimize"])
  },
  computed: {
    ...mapState([
      "isRTL",
      "color",
      "isAbsolute",
      "isNavFixed",
      "navbarFixed",
      "absolute",
      "showSidenav",
      "showNavbar",
      "showFooter",
      "showConfig",
      "hideConfigButton"
    ])
  },
  beforeMount() {
    const { cookies } = useCookies();
    let token = cookies.get('accessToken');
    if (token == null){
      this.$router.push('/sign-in')
    }else{
      this.$store.state.token = token
    }
    
    this.$store.state.isTransparent = "bg-transparent";

    const sidenav = document.getElementsByClassName("g-sidenav-show")[0];

    if (window.innerWidth > 1200) {
      sidenav.classList.add("g-sidenav-pinned");
    }
  }
};
</script>
<style>
@font-face {
    font-family: "a우주소년";
    font-style: normal;
    font-weight: 400;
    src: url("/public/font/a우주소년.woff");
    font-display: block;
}
@font-face {
    font-family: "JOKERMAN";
    font-style: normal;
    font-weight: 400;
    src: url("/public/font/JOKERMAN.woff");
    font-display: block;
}
.my-font-bold {
    font-family: "Black Han Sans", sans-serif;
}
.my-font-thumbnail-1 {
    font-family: "a우주소년", sans-serif;
}
.my-font-thumbnail-2 {
    font-family: "JOKERMAN", sans-serif;
}
.my-font-07 {
    font-size: 0.7rem;
}
.my-font-08 {
    font-size: 0.8rem;
}
.my-font-09 {
    font-size: 0.9rem;
}
.my-font-10 {
    font-size: 1rem;
}
.my-font-13 {
    font-size: 1.3rem;
}
.my-font-b5 {
    font-weight: 500;
}
.my-font-b7 {
    font-weight: 700;
}
.my-font-white {
    color: #ffffff;
}
.my-font-theme {
    color: #ff385c;
}
.my-font-gray {
    color: #6c757d;
}
.my-bg-white {
    background-color: #ffffff;
}
.my-hr {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    color: #dddddd;
    opacity: 1;
}
.my-border-bottom {
    border-bottom: 1px solid #dddddd;
}
.my-cursor {
    cursor: pointer;
}
.thumbnail-inner {
    width: 90%;
    height: 100%;
    margin: auto;
}
.thumbnail-inner-title-lg {
    height: 4rem;
    font-size: 2rem;
}
.thumbnail-inner-title-sm {
    height: 2rem;
    font-size: 1rem;
}
.thumbnail-inner-line-lg {
    height: 1rem;
    border-bottom: 6px solid !important;
}
.thumbnail-inner-line-sm {
    height: 0.5rem;
    border-bottom: 3px solid !important;
}
.thumbnail-inner-name-lg {
    height: 8rem;
    line-height: 3rem;
    font-size: 3rem;
}
.thumbnail-inner-name-sm {
    height: 4rem;
    line-height: 1.5rem;
    font-size: 1.5rem;
}
.thumbnail-inner-logo-lg {
    height: 4rem;
    font-size: 1.5rem;
    text-align: end;
}
.thumbnail-inner-logo-sm {
    height: 2rem;
    font-size: 0.75rem;
    text-align: end;
}
.thumbnail-unvisit-1 {
    background-color: rgba(245, 143, 189, 0.85);
}
.thumbnail-unvisit-2 {
    background-color: rgba(228, 111, 104, 0.85);
}
.thumbnail-unvisit-3 {
    background-color: rgba(224, 147, 97, 0.85);
}
.thumbnail-unvisit-4 {
    background-color: rgba(250, 183, 93, 0.85);
}
.thumbnail-unvisit-5 {
    background-color: rgba(110, 189, 119, 0.85);
}
.thumbnail-unvisit-6 {
    background-color: rgba(94, 157, 205, 0.85);
}
.thumbnail-unvisit-7 {
    background-color: rgba(46, 75, 128, 0.85);
}
.thumbnail-unvisit-8 {
    background-color: rgba(152, 123, 205, 0.85);
}
.thumbnail-unvisit-9 {
    background-color: rgba(140, 143, 145, 0.85);
}
.card-img-top2 {
    /* -o-object-fit: contain; */
    /* object-fit: contain; */
    width: 100%;
    height: 100%;
    border-radius: 1rem 0 0 1rem;
    background-color: #222;
}
</style>
