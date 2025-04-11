<template>
  <div class="container px-5">
    <div class="row gx-5 align-items-center">
      <div class="col-lg-6">
        <!-- Mashead text and app badges-->
        <div class="mb-5 mb-lg-0 text-center text-lg-start">
          <h1 class="display-1 lh-1 mb-3">
            We're helping to connect Australians living with disabilities.
          </h1>
          <p class="lead fw-normal text-muted mb-5">
            Founded in 2025, we're been providing valuable resources, support, and opportunities to
            create a more inclusive Australia.
          </p>
          <!-- <div class="d-flex flex-column flex-lg-row align-items-center">
                    <a class="me-lg-3 mb-4 mb-lg-0" href="#!"><img class="app-badge" src="assets/img/google-play-badge.svg" alt="..."></a>
                    <a href="#!"><img class="app-badge" src="assets/img/app-store-badge.svg" alt="..."></a>
                </div> -->
          <div class="row">
            <div class="col-6 mb-3">
              <a href="#!" class="btn btn-primary w-100">Learn More</a>
            </div>
            <div class="col-6 mb-3">
              <router-link
                to="/community-hub/virtual-events/the-future-of-assistive-technology"
                class="btn btn-secondary w-100"
                >Latest News</router-link
              >
            </div>
          </div>

          <!-- Conditionally Render the Admin Button -->
          <div v-if="isLoggedIn" class="mt-4">
            <button @click="makeAdmin" class="btn btn-success w-100">Make Me Admin</button>
          </div>
          <div v-else class="mt-4">
            <p>You must be logged in to become an admin.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <!-- Masthead device mockup feature-->
        <div class="masthead-device-mockup">
          <div class="device-wrapper">
            <div
              class="device"
              data-device="iPhoneX"
              data-orientation="portrait"
              data-color="black"
            >
              <div class="screen bg-black">
                <!-- PUT CONTENTS HERE:-->
                <!-- * * This can be a video, image, or just about anything else.-->
                <!-- * * Set the max width of your media to 100% and the height to-->
                <!-- * * 100% like the demo example below.-->
                <!-- <video muted="muted" autoplay="" loop="" style="max-width: 100%; height: 100%"><source src="assets/img/demo-screen.mp4" type="video/mp4"></video> -->
                <img
                  src="@/assets/homepagecartoon.png"
                  alt="Homepage Cartoon"
                  style="max-width: 100%; height: 100%"
                />
              </div>
              <!-- Text showing the user admin status -->
              <div v-if="isLoggedIn">
                <p v-if="isAdmin">You are an Admin!</p>
                <p v-else>You are not an Admin.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const isLoggedIn = ref(false)
const isAdmin = ref(false)
const auth = getAuth()
const db = getFirestore()

onMounted(() => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      isLoggedIn.value = true

      // Fetch the user document from Firestore using the UID
      const userDocRef = doc(db, 'users', user.uid)
      const userDocSnap = await getDoc(userDocRef)

      if (userDocSnap.exists()) {
        // Check if the user is an admin
        isAdmin.value = userDocSnap.data().isAdmin || false
      }
    } else {
      isLoggedIn.value = false
      isAdmin.value = false
    }
  })
})
</script>

<!-- <script setup>
import { ref, onMounted } from 'vue'
import { getAuth } from 'firebase/auth'
import { getFunctions, httpsCallable } from 'firebase/functions'
import { useRouter } from 'vue-router'

const isLoggedIn = ref(false)
const auth = getAuth()
const router = useRouter()

onMounted(() => {
  // Check if the user is logged in
  auth.onAuthStateChanged((user) => {
    isLoggedIn.value = !!user
  })
})

const makeAdmin = async () => {
  const currentUser = auth.currentUser

  if (currentUser) {
    const functions = getFunctions()

    const addAdminRole = httpsCallable(functions, 'addAdminRole')

    try {
      // Get the ID token of the current user to authenticate the request
      const idToken = await currentUser.getIdToken()

      // Call the Firebase function to make the user an admin, passing the ID token
      const result = await addAdminRole({
        email: currentUser.email,
        idToken,
      })

      console.log(result.data.message) // Success message
    } catch (error) {
      console.error('Error making user an admin:', error)
    }
  } else {
    console.log('User is not logged in.')
  }
}
</script> -->
