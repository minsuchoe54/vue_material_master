import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import MaterialDashboard from "./material-dashboard";
import VueGoodTablePlugin from 'vue-good-table-next';
import 'vue-good-table-next/dist/vue-good-table-next.css'
import VueGoogleMaps from "@fawmi/vue-google-maps";

const appInstance = createApp(App);
appInstance.use(store);
appInstance.use(router);
appInstance.use(MaterialDashboard);
appInstance.use(VueGoodTablePlugin);

appInstance.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAulvu_rbYShYhVwIvCaUOLMgD_PXBss3g',
    },
  })
appInstance.mount("#app");
