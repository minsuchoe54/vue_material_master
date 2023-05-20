<template>
  <!-- <navbar btnBackground="bg-gradient-success" /> -->
  <div
    class="page-header align-items-start min-vh-100"
    style="
      background-image: url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80');
    "
  >
    <span class="mask bg-gradient-dark opacity-6"></span>
    <div class="container my-auto">
      <div class="row">
        <div class="col-lg-4 col-md-8 col-12 mx-auto">
          <div class="card z-index-0 fadeIn3 fadeInBottom">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div
                class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1"
              >
                <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">
                  Sign In
                </h4>
                <!-- <div class="row mt-3">
                  <div class="col-12 text-center ms-auto">
                    <a class="btn btn-link px-3" href="javascript:;">
                      <i class="fab fa-telegram text-white text-lg">T e l e g r a m</i>
                    </a>
                  </div>
                
                </div> -->
              </div>
            </div>
      
            <div class="card-body">
              <form role="form" class="text-start mt-3" @submit.prevent="onSubmit" v-on:submit="login">
                <div class="mb-3">

                  <input id="input-custom" type="text" label="id" placeholder="username" v-model="username">
                </div>
                <div class="mb-3">
                  <input id="input-custom" type="password" label="id" placeholder="password" v-model="password">
                </div>
                <!-- <material-switch id="rememberMe" name="rememberMe"
                  >Remember me</material-switch
                > -->
                <div class="text-center">
                  <material-button
                    class="my-4 mb-2"
                    variant="gradient"
                    color="success"
                    fullWidth
                    >Sign in</material-button
                  >
                </div>
                <p class="mt-4 text-sm text-center">
                  아직 계정이 없으신가요? 
                  <router-link
                    :to="{ name: 'SignUp' }"
                    class="text-success text-gradient font-weight-bold"
                    >회원가입</router-link
                  >
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Navbar from "@/examples/PageLayout/Navbar.vue";
// import MaterialInput from "@/components/MaterialInput.vue";
// import MaterialSwitch from "@/components/MaterialSwitch.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import { mapMutations } from "vuex";
import axios from 'axios';
export default {
  name: "sign-in",
  data(){
    return{
      username : null,
      password : null,
    }
  },
  components: {
    // Navbar,
    // MaterialInput,
    // MaterialSwitch,
    MaterialButton,
  },
  beforeMount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
  },
  beforeUnmount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
  },
  methods: {
    ...mapMutations(["toggleEveryDisplay", "toggleHideConfig"]),
    login() {
            axios.post('https://op.cc-oo.club/api/auth/local',{identifier: this.username,password: this.password })
            .then(response => {
                this.$store.state.userData = response.data.user

                var timeToAdd = 1000 * 60 * 60 * 12 * 4; //12 시간
                var date = new Date();
                var expiryTime = parseInt(date.getTime()) + timeToAdd;
                date.setTime(expiryTime);
                var utcTime = date.toUTCString();
                document.cookie = `accessToken=${response.data.jwt};expires=${utcTime}`;
                this.$router.push('/')
            })
            .catch(error => {
                alert('실패')
                console.log('An error occurred:', error.response);
            });
        }
  },
};
</script>
<style scoped>

</style>