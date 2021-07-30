import Vue from 'vue'
import VueRouter from 'vue-router'
import shoppingCart from '../components/shoppingCart.vue'
import Main from '../components/Main.vue'
import Checkout from '../components/Checkout.vue'
import Home from '../components/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/cart', component: shoppingCart},
  {path: '/', component: Main},
  {path:'/check-out', component: Checkout},
  {path:'/home', component: Home}
]

const router = new VueRouter({
  routes
})

export default router
