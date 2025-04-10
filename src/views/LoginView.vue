<template>
  <div class="login d-flex justify-content-center mt-5">
    <!-- <form @submit.prevent="submitForm" style="max-width: 400px; width: 100%"> -->
    <form @submit.prevent="login" style="max-width: 400px; width: 100%">
      <div class="text-center mb-4">
        <h1>Log in</h1>
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="text" class="form-control" id="email" v-model="formData.email" />
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" v-model="formData.password" />
        <!-- <div v-if="errors.password" class="text-danger">{{ errors.password }}</div> -->
      </div>

      <div v-if="errorMessages" class="text-danger mb-3">{{ errorMessages }}</div>

      <div class="text-center">
        <button type="submit" class="btn btn-primary">Log In</button>
      </div>
    </form>
  </div>
</template>

<script setup>
// Our logic will go here
import { ref } from 'vue'
import router from '@/router'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
// import { authState } from './authenticationState'

const formData = ref({
  email: '',
  password: '',
})

const errorMessages = ref('')

const login = () => {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, formData.value.email, formData.value.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user
      console.log('User logged in:', user)
      router.push('/')
    })
    .catch((error) => {
      console.log(error.code)
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessages.value = 'Invalid email'
          break
        case 'auth/user-not-found':
          errorMessages.value = 'User not found'
          break
        case 'auth/wrong-password':
          errorMessages.value = 'Wrong password'
          break
        default:
          errorMessages.value = 'Email or passowrd was incorrect'
          break
      }
      // const errorCode = error.code
      // const errorMessage = error.message
      // console.error('Error logging in:', errorCode, errorMessage)
      // errors.value.password = 'Incorrect email or password.'
    })
}

// const submitForm = () => {
//   if (validateCredentials()) {
//     authState.login()
//     router.push('/')
//     clearForm()
//   }
// }

// const clearForm = () => {
//   formData.value = {
//     username: '',
//     password: '',
//   }
// }

// const errors = ref({
//   username: null,
//   password: null,
// })

// const validateCredentials = () => {
//   const password = formData.value.password
//   const username = formData.value.username
//   if (username == '12345678' && password == '12345678') {
//     return true
//   } else {
//     errors.value.password = `Incorrect email or password.`
//     return false
//   }
// }
</script>

<style scoped>
@media (min-width: 600px) {
  .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }
}
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.card-header {
  background-color: #275fda;
  color: white;
  padding: 10px;
  border-radius: 10px 10px 0 0;
}
.list-group-item {
  padding: 10px;
}
</style>
