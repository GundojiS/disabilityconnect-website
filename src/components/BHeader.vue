<template>
  <div class="container">
    <header
      class="position-sticky top-0 d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
    >
      <router-link
        to="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-xxl-auto link-body-emphasis text-decoration-none"
        :active-class="''"
        :exact-active-class="''"
      >
        <span class="fs-4 logo-text">Disability Connect Australia </span>
      </router-link>

      <ul class="nav nav-pills gap-2 align-items-center justify-content-center">
        <li class="nav-item">
          <router-link to="/" class="nav-link" aria-current="page">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/resources-and-information"
            class="nav-link text-wrap text-center"
            style="max-width: 150px"
            >Resources and Information</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/community-hub" class="nav-link text-wrap text-center" style="max-width: 110px"
            >Community Hub</router-link to="/"
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/discover-nearby-communities"
            class="nav-link text-wrap text-center"
            style="max-width: 160px"
            >Discover Nearby Communities</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/accessibility-services"
            class="nav-link text-wrap text-center"
            style="max-width: 110px"
            >Accessibility Services</router-link
          >
        </li>

        <template v-if="!isLoggedIn">
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
        </template>

        <li class="nav-item" v-if="isLoggedIn && isAdmin">
          <router-link
            to="/admin-dashboard"
            class="nav-link text-wrap text-center"
            style="max-width: 120px"
            >Admin Dashboard</router-link
          >
        </li>

        <li class="nav-item" v-if="isLoggedIn">
          <router-link to="/my-account" class="nav-link">My Account</router-link>
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <a href="#" class="nav-link" @click.prevent="handleSignOut">Sign Out</a>
        </li>
      </ul>
    </header>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getAuth, onAuthStateChanged, signOut, getIdTokenResult } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const isLoggedIn = ref(false)
const isAdmin = ref(false)
const router = useRouter()
const auth = getAuth()
const db = getFirestore()

onMounted(() => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      isLoggedIn.value = true
      const userDocRef = doc(db, 'users', user.uid)
      const userDocSnap = await getDoc(userDocRef)

      if (userDocSnap.exists()) {
        isAdmin.value = userDocSnap.data().isAdmin || false
      }
    } else {
      isLoggedIn.value = false
      isAdmin.value = false
    }
  })
})

const handleSignOut = async () => {
  try {
    await signOut(auth)
    isLoggedIn.value = false
    isAdmin.value = false
    router.push('/')
  } catch (error) {
    console.error('Sign-out error:', error)
  }
}
</script>

<style scoped>
.nav-link {
  min-height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  white-space: normal;
}

header {
  position: relative;
  top: 0;
  width: 100%;
}

.router-link-active {
  background-color: #057996;
  color: white;
}
</style>
