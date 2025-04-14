<template>
  <section class="py-5">
    <div class="container">
      <div class="row align-items-center gx-4">
        <div class="col-md-5">
          <div class="ms-md-2 ms-lg-5">
            <img
              class="img-fluid rounded-3"
              src="@/assets/my-account.png"
              alt="Cartoon showing user's profile"
            />
          </div>
        </div>
        <div class="col-md-6 offset-md-1">
          <div class="ms-md-2 ms-lg-5">
            <!-- <span class="text-muted">Welcome back,</span> -->
            <h2 class="display-5 fw-bold">Hello, {{ displayName }}</h2>
            <p class="lead mt-5">Account Details:</p>
            <p class="lead">Email: {{ userEmail }}</p>
            <p class="lead mb-5">
              User type: <span class="lead" v-if="isAdmin">Admin</span>
              <span class="lead" v-else>Standard User</span>
            </p>
            <p class="lead">
              Whether you're just getting started or have been with us for a while, we're glad
              you're here.
            </p>
            <p class="lead">
              Keep an eye out for updates, stories, and resources that matter to you.
            </p>
            <!-- Subscribe and Unsubscribe Buttons -->
            <button
              v-if="!isSubscribed"
              @click="subscribeToNewsletter"
              class="btn btn-primary w-100 mt-4"
            >
              Subscribe to Newsletter
            </button>

            <button
              v-else
              @click="unsubscribeFromNewsletter"
              class="btn btn-outline-danger w-100 mt-4"
            >
              Unsubscribe from Newsletter
            </button>

            <!-- <a href="#!" class="btn btn-primary w-100">Download Newsletter</a>
            <h5 class="fw-semibold">Welcome back, {{ displayName }}!</h5>
            <p class="text-muted mb-1">{{ userEmail }}</p> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore'

const auth = getAuth()
const db = getFirestore()

const userEmail = ref('')
const displayName = ref('')
const isAdmin = ref(false)
const isSubscribed = ref(false) // Track subscription status

onMounted(() => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      userEmail.value = user.email || ''
      displayName.value = user.email?.split('@')[0] || 'User'

      // Get user document from Firestore
      const userDocRef = doc(db, 'users', user.uid)
      const userDocSnap = await getDoc(userDocRef)

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data()
        isAdmin.value = !!userData.isAdmin
        isSubscribed.value = !!userData.isSubscribed // Check if the user is already subscribed
      } else {
        console.warn('User document not found in Firestore.')
      }
    }
  })
})

// Method to subscribe to the newsletter
const subscribeToNewsletter = async () => {
  const user = auth.currentUser
  if (user) {
    try {
      const userDocRef = doc(db, 'users', user.uid)
      await updateDoc(userDocRef, {
        isSubscribed: true,
      })
      isSubscribed.value = true
      alert('You have successfully subscribed to the newsletter!')
    } catch (error) {
      console.error('Error subscribing to newsletter:', error)
      alert('There was an error subscribing to the newsletter. Please try again later.')
    }
  }
}

const unsubscribeFromNewsletter = async () => {
  const user = auth.currentUser
  if (user) {
    try {
      const userDocRef = doc(db, 'users', user.uid)
      await updateDoc(userDocRef, {
        isSubscribed: false,
      })
      isSubscribed.value = false
      alert('You have unsubscribed from the newsletter.')
    } catch (error) {
      console.error('Error unsubscribing:', error)
      alert('There was an error unsubscribing. Please try again later.')
    }
  }
}
</script>

<!-- <script setup>
import { ref, onMounted } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const auth = getAuth()
const db = getFirestore()

const userEmail = ref('')
const displayName = ref('')
const isAdmin = ref(false)

onMounted(() => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      userEmail.value = user.email || ''
      displayName.value = user.email?.split('@')[0] || 'User'

      // Get user document from Firestore
      const userDocRef = doc(db, 'users', user.uid)
      const userDocSnap = await getDoc(userDocRef)

      if (userDocSnap.exists()) {
        isAdmin.value = !!userDocSnap.data().isAdmin
      } else {
        console.warn('User document not found in Firestore.')
      }
    }
  })
})
</script>

<style></style> -->
