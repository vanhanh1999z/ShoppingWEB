import Vue from 'vue'
import VueRouter from 'vue-router'
import shoppingCart from '../components/shoppingCart.vue'
import Main from '../components/Main.vue'
import Checkout from '../components/Checkout.vue'

import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Forgot from '../components/Forgot.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/cart', component: shoppingCart},
  {path: '/main', component: Main},
  {path:'/check-out', component: Checkout},
  {path:'/', component: Main},
  {path:'/login', component: Login},
  {path:'/register', component: Register},
  {path:'/forgot', component: Forgot}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
