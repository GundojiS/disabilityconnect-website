import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OurMissionView from '../views/OurMissionView.vue'
import OurVisionView from '@/views/OurVisionView.vue'
import OurValuesView from '@/views/OurValuesView.vue'
import VolunteeringOpportunitiesView from '@/views/VolunteeringOpportunities.vue'
import CareersView from '@/views/CareersView.vue'
import ContactUsView from '@/views/ContactUsView.vue'
import FeedbackAndSuggestionsView from '@/views/FeedbackAndSuggestionsView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import WebinarView from '@/views/WebinarView.vue'
import ResourcesAndInformationView from '@/views/ResourcesAndInformationView.vue'
import CommunityHubView from '@/views/CommunityHubView.vue'
import MyAccountView from '@/views/MyAccountView.vue'
import AdminDashboardView from '@/views/AdminDashboardView.vue'
import AccessibilityServicesView from '@/views/AccessibilityServicesView.vue'
import getAllAccessibilityProvidersAPI from '@/views/getAllAccessibilityProvidersAPI.vue'
import ProvidersByRegionView from '@/views/ProvidersByRegionView.vue'
import DiscoverNearbyCommunitiesView from '@/views/DiscoverNearbyCommunitiesView.vue'
import getUsersAPI from '@/views/getUsersAPI.vue'
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
    path: '/about-us/our-vision',
    name: 'Our Vision',
    component: OurVisionView,
  },
  {
    path: '/about-us/our-values',
    name: 'Our Values',
    component: OurValuesView,
  },
  {
    path: '/get-involved/volunteering-opportunities',
    name: 'Volunteering Opportunities',
    component: VolunteeringOpportunitiesView,
  },
  {
    path: '/get-involved/careers',
    name: 'Careers',
    component: CareersView,
  },
  {
    path: '/get-in-touch/contact-us',
    name: 'Contact Us',
    component: ContactUsView,
  },
  {
    path: '/get-in-touch/feedback-and-suggestions',
    name: 'Feedback and Suggestions',
    component: FeedbackAndSuggestionsView,
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
    path: '/community-hub',
    name: 'CommunityHub',
    component: CommunityHubView,
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
  {
    path: '/accessibility-services/get-all-accessibility-providersAPI',
    name: 'getAllAccessibilityProvidersAPI',
    component: getAllAccessibilityProvidersAPI,
    meta: { hideHeaderFooter: true },
  },
  {
    path: '/admin-dashboard/get-usersAPI',
    name: 'getUsersAPI',
    component: getUsersAPI,
    meta: { hideHeaderFooter: true },
  },
  {
    path: '/accessibility-services/providers-by-region',
    name: 'ProvidersByRegion',
    component: ProvidersByRegionView,
  },
  {
    path: '/discover-nearby-communities',
    name: 'DiscoverNearbyCommunities',
    component: DiscoverNearbyCommunitiesView,
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

// Navigation guard to check authentication and admin status
router.beforeEach(async (to, from) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const user = await getCurrentUser()

    if (!user) {
      alert('You need to be logged in to access this page.')
      return '/'
    }

    if (to.path === '/admin-dashboard') {
      try {
        const userDocRef = doc(db, 'users', user.uid)
        const userSnap = await getDoc(userDocRef)

        if (userSnap.exists() && userSnap.data().isAdmin) {
          return true
        } else {
          alert('You do not have permission to access the admin dashboard.')
          return '/'
        }
      } catch (error) {
        console.error('Error checking admin status:', error)
        return '/'
      }
    }

    return true
  }

  return true
})

export default router
