import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Smartphones from '../views/Smartphones.vue'
import TV from '../views/TV.vue'

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
  },
  {
    path: '/TV',
    name: 'TV',
    component: TV
  }
]

const router = new VueRouter({
  routes
})

export default router
