import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Smartphones from '../views/Smartphones.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Smartphones',
    name: 'Smartphones',
    component: Smartphones
  }
]

const router = new VueRouter({
  routes
})

export default router
