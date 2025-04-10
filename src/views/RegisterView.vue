<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center mb-5">Register</h1>
        <form @submit.prevent="submitForm">
          <div class="row mb-3">
            <!-- <div class="col-md-6">
              <label for="username" class="form-label">Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                v-model="formData.username"
                @blur="() => validateName(true)"
                @input="() => validateName(false)"
              />
              <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
            </div> -->

            <div class="col-md-6">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="formData.email"
                @blur="() => validateEmail(true)"
                @input="() => validateEmail(false)"
              />
              <div v-if="errors.email" class="text-danger">{{ errors.email }}</div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="formData.password"
                @blur="() => validatePassword(true)"
                @input="() => validatePassword(false)"
              />
              <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
            </div>

            <div class="col-md-6 col-sm-6">
              <label for="confirm-password" class="form-label">Confirm password</label>
              <input
                type="password"
                class="form-control"
                id="confirm-password"
                v-model="formData.confirmPassword"
                @blur="() => validateConfirmPassword(true)"
              />
              <div v-if="errors.confirmPassword" class="text-danger">
                {{ errors.confirmPassword }}
              </div>
            </div>
            <div class="col-md-6 mt-2">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="isAdmin"
                  v-model="formData.isAdmin"
                />
                <label class="form-check-label" for="isAdmin">Register as an Admin?</label>
              </div>
            </div>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary me-2" @click="register">Submit</button>
            <button type="button" class="btn btn-secondary" @click="clearForm">Clear</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- <div class="row mt-5" v-if="submittedCards.length">
   <div class="d-flex flex-wrap justify-content-start">
      <div v-for="(card, index) in submittedCards" :key="index" class="card m-2" style="width: 18rem;">
         <div class="card-header">
            User Information
         </div>
         <ul class="list-group list-group-flush">
            <li class="list-group-item">Username: {{ card.username }}</li>
            <li class="list-group-item">Password: {{ card.password }}</li>
            <li class="list-group-item">Australian Resident: {{ card.isAustralian ? 'Yes' : 'No' }}</li>
            <li class="list-group-item">Gender: {{ card.gender }}</li>
            <li class="list-group-item">Reason: {{ card.reason }}</li>
         </ul>
      </div>
   </div>
</div> -->
  <hr />
  <DataTable :value="submittedCards" tableStyle="min-width: 30rem">
    <!-- <Column field="username" header="Username"></Column> -->
    <Column field="email" header="Email"></Column>
    <Column field="password" header="Password"></Column>
    <Column field="isAdmin" header="Is Admin?"></Column>
  </DataTable>
</template>

<script setup>
// Our logic will go here
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
const formData = ref({
  username: '',
  password: '',
  confirmPassword: '',
  email: '',
  isAdmin: 'false',
})

const router = useRouter()
const auth = getAuth()
const register = () => {
  createUserWithEmailAndPassword(auth, formData.value.email, formData.value.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user
      console.log('User registered:', user)
      console.log(auth.currentUser)
      // You can change the next route from login to something more useful
      router.push('/login')
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.error('Error registering user:', errorCode, errorMessage)
    })
}

const submittedCards = ref([])

const submitForm = () => {
  // validateName(true)
  validatePassword(true)
  validateEmail(true)
  // validateUser(true)

  // if (!errors.value.username && !errors.value.password && !errors.value.email) {
  //   submittedCards.value.push({
  //     ...formData.value,
  //   })
  //   clearForm()
  // }

  if (!errors.value.password && !errors.value.email) {
    submittedCards.value.push({
      ...formData.value,
    })
    clearForm()
  }
}

const clearForm = () => {
  formData.value = {
    password: '',
    email: '',
    isAdmin: false,
  }
}

// const errors = ref({
//   username: null,
//   password: null,
//   confirmPassword: null,
//   email: null,
// })

const errors = ref({
  password: null,
  confirmPassword: null,
  email: null,
})

// const success = ref({
//   reason: null,
// })

const validateConfirmPassword = (blur) => {
  if (formData.value.password !== formData.value.confirmPassword) {
    if (blur) errors.value.confirmPassword = 'Passwords do not match.'
  } else {
    errors.value.confirmPassword = null
  }
}

// const validateName = (blur) => {
//   if (formData.value.username.length < 3) {
//     if (blur) errors.value.username = 'Name must be at least 3 characters'
//   } else {
//     errors.value.username = null
//   }
// }

// const validateUser = (blur) => {
//   if (submittedCards.value.length === 0) {
//     errors.value.username = null
//     return
//   }
//   const userExists = submittedCards.value.some((e) => e.username === formData.value.username)
//   if (userExists) {
//     if (blur) errors.value.username = 'User already exists, please choose a different username.'
//   } else {
//     errors.value.username = null
//   }
// }

const validateEmail = (blur) => {
  const email = formData.value.email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (email === '') {
    if (blur) errors.value.email = 'Email is required'
  } else if (!emailRegex.test(email)) {
    errors.value.email = 'Please enter a valid email address'
  } else {
    errors.value.email = null
  }
}

const validatePassword = (blur) => {
  const password = formData.value.password
  const minLength = 8
  const hasUppercase = /[A-Z]/.test(password)
  const hasLowercase = /[a-z]/.test(password)
  const hasNumber = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>"]/.test(password)
  if (password.length < minLength) {
    if (blur) errors.value.password = `Password must be at least ${minLength} characters long.`
  } else if (!hasUppercase) {
    if (blur) errors.value.password = 'Password must contain at least one uppercase letter.'
  } else if (!hasLowercase) {
    if (blur) errors.value.password = 'Password must contain at least one lowercase letter.'
  } else if (!hasNumber) {
    if (blur) errors.value.password = 'Password must contain at least one number.'
  } else if (!hasSpecialChar) {
    if (blur) errors.value.password = 'Password must contain at least one special character.'
  } else {
    errors.value.password = null
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
