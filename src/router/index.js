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
import { getDoc, doc } from 'firebase/firestore'
import { db } from '@/firebaseConfig'

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

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject,
    )
  })
}

// router.beforeEach(async (to, from) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     const user = await getCurrentUser()
//     if (user) {
//       return true // allow navigation
//     } else {
//       alert('You need to be logged in to access this page.')
//       return '/' // redirect to home
//     }
//   }

//   return true // allow navigation if no auth required
// })

router.beforeEach(async (to, from) => {
  // Only protect routes with meta.requiresAuth
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const user = await getCurrentUser()

    if (!user) {
      alert('You need to be logged in to access this page.')
      return '/'
    }

    // Check specifically for admin access
    if (to.path === '/admin-dashboard') {
      try {
        const userDocRef = doc(db, 'users', user.uid)
        const userSnap = await getDoc(userDocRef)

        if (userSnap.exists() && userSnap.data().isAdmin) {
          return true // admin allowed
        } else {
          alert('You do not have permission to access the admin dashboard.')
          return '/' // not an admin
        }
      } catch (error) {
        console.error('Error checking admin status:', error)
        return '/' // fail-safe
      }
    }

    // Authenticated and not admin route — allow
    return true
  }

  // No auth required — allow
  return true
})

export default router
