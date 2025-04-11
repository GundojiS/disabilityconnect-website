import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OurMissionView from '../views/OurMissionView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import WebinarView from '@/views/WebinarView.vue'
import ResourcesAndInformationView from '@/views/ResourcesAndInformationView.vue'
import MyAccountView from '@/views/MyAccountView.vue'
import AdminDashboardView from '@/views/AdminDashboardView.vue'
import AccessibilityServicesView from '@/views/AccessibilityServicesView.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about-us/our-mission',
    name: 'Our Mission',
    component: OurMissionView,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/community-hub/virtual-events/the-future-of-assistive-technology',
    name: 'Webinar',
    component: WebinarView,
  },
  {
    path: '/resources-and-information',
    name: 'ResourcesAndInformation',
    component: ResourcesAndInformationView,
  },
  {
    path: '/my-account',
    name: 'MyAccount',
    component: MyAccountView,
    meta: { requiresAuth: true },
  },
  {
    path: '/admin-dashboard',
    name: 'AdminDashboard',
    component: AdminDashboardView,
    meta: { requiresAuth: true },
  },
  {
    path: '/accessibility-services',
    name: 'AccessibilityServices',
    component: AccessibilityServicesView,
  },
]

// const getCurrentUser = () => {
//   return new Promise((resolve, reject) => {
//     const removeListener = onAuthStateChanged(
//       getAuth(),
//       (user) => {
//         removeListener()
//         resolve(user)
//       },
//       reject,
//     )
//   })
// }

// router.beforeEach(async (to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (await getCurrentUser()) {
//       next()
//     } else {
//       alert('You need to be logged in to access this page.')
//       next('/')
//     }
//   }
// })

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
