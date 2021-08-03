import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'

import './plugins/bootstrap-vue'
import App from './App.vue'
import Paginate from 'vuejs-paginate'
import router from './router'

import store from './vuex'
window.axios = require('axios');
window.Vue = Vue;
import ProductZoomer from 'vue-product-zoomer'
Vue.use(ProductZoomer)
Vue.component('paginate', Paginate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
