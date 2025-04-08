import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OurMissionView from '../views/OurMissionView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/our-mission',
    name: 'Our Mission',
    component: OurMissionView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
