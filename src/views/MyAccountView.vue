<template>
  <section class="py-5">
    <div class="container">
      <div class="row align-items-center gx-4">
        <div class="col-md-5">
          <div class="ms-md-2 ms-lg-5">
            <img class="img-fluid rounded-3" src="@/assets/my-account.png" />
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

const auth = getAuth()
const userEmail = ref('')
const displayName = ref('')
const isAdmin = ref(false)

onMounted(() => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      userEmail.value = user.email || ''
      displayName.value = user.email?.split('@')[0] || 'User'

      // Check for custom admin claim
      const idTokenResult = await user.getIdTokenResult()
      isAdmin.value = !!idTokenResult.claims.admin
    }
  })
})
</script>

<style></style>
