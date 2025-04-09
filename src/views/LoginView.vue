<template>
  <div class="login d-flex justify-content-center mt-5">
    <form @submit.prevent="submitForm" style="max-width: 400px; width: 100%">
      <div class="text-center mb-4">
        <h1>Log in</h1>
      </div>

      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input type="text" class="form-control" id="username" v-model="formData.username" />
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" v-model="formData.password" />
        <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
      </div>

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
import { authState } from './authenticationState'

const formData = ref({
  username: '',
  password: '',
})

const submitForm = () => {
  if (validateCredentials()) {
    authState.login()
    router.push('/')
    clearForm()
  }
}

const clearForm = () => {
  formData.value = {
    username: '',
    password: '',
  }
}

const errors = ref({
  username: null,
  password: null,
})

const validateCredentials = () => {
  const password = formData.value.password
  const username = formData.value.username
  if (username == '12345678' && password == '12345678') {
    return true
  } else {
    errors.value.password = `Incorrect email or password.`
    return false
  }
}
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
