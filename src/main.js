import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import Paginate from 'vuejs-paginate'
import router from './router'
import './axios'
import store from './vuex'

window.Vue = Vue;
Vue.component('paginate', Paginate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
