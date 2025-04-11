<script setup>
import { ref, onMounted } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getIdTokenResult } from 'firebase/auth'
import { useRoute } from 'vue-router'
import BHeader from './components/BHeader.vue'
import BFooter from './components/BFooter.vue'

// Define a reactive variable to store the admin status
const isAdmin = ref(false)

const route = useRoute()

// Initialize Firebase authentication and check for the admin role
onMounted(() => {
  const auth = getAuth()

  // Listen for changes in the authentication state
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // Get custom claims and check if the user is an admin
      user
        .getIdTokenResult()
        .then((idTokenResult) => {
          isAdmin.value = !!idTokenResult.claims.admin
        })
        .catch((error) => {
          console.error('Error getting custom claims: ', error)
        })
    } else {
      isAdmin.value = false // No user logged in, not an admin
    }
  })
})
</script>

<template>
  <div class="main-container">
    <header v-if="!route.meta?.hideHeaderFooter">
      <BHeader :isAdmin="isAdmin" />
    </header>

    <main class="main-box">
      <router-view></router-view>
    </main>

    <footer v-if="!route.meta?.hideHeaderFooter">
      <BFooter />
    </footer>
  </div>
</template>
