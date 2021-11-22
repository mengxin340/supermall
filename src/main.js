import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from "./components/content/toast"
import VueLazyload from "vue-lazyload";
//挂载自定义组件实例在Vue原型上
Vue.use(toast, Vue);
Vue.use(VueLazyload, {
  loading: require("assets/img/common/placeholder.gif"),
})
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");

