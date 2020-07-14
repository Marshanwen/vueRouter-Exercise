import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import axios from "axios";
// import VueAxios from "vue-axios";
import router from "./router";

// Vue.use(VueAxios);
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
