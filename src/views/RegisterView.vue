<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center mb-5">Register</h1>
        <form @submit.prevent="submitForm">
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="formData.email"
                @input="validateEmail"
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
                @input="validatePassword"
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
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary me-2" @click="register">Submit</button>
            <button type="button" class="btn btn-secondary" @click="clearForm">Clear</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '@/firebaseConfig'
import { useRouter } from 'vue-router'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import useLocalStorage from '@/composables/useLocalStorage'
const formData = useLocalStorage(
  {
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    isAdmin: 'false',
    isSubscribed: 'false',
  },
  'formData',
)

const router = useRouter()
const auth = getAuth()
const register = () => {
  createUserWithEmailAndPassword(auth, formData.value.email, formData.value.password)
    .then(async (userCredential) => {
      const user = userCredential.user
      console.log('User registered:', user)
      console.log(auth.currentUser)
      try {
        await setDoc(doc(db, 'users', user.uid), {
          email: user.email,
          uid: user.uid,
          isAdmin: false,
          isSubscribed: false,
        })
        console.log('User data added to Firestore')
      } catch (err) {
        console.error('Error writing user to Firestore:', err)
      }

      router.push('/')
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.error('Error registering user:', errorCode, errorMessage)
    })
}

const submittedCards = ref([])

const submitForm = () => {
  validatePassword(true)
  validateEmail(true)

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

const errors = ref({
  password: null,
  confirmPassword: null,
  email: null,
})

const validateConfirmPassword = (blur) => {
  if (formData.value.password !== formData.value.confirmPassword) {
    if (blur) errors.value.confirmPassword = 'Passwords do not match.'
  } else {
    errors.value.confirmPassword = null
  }
}

const validateEmail = () => {
  const email = formData.value.email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (email === '') {
    errors.value.email = 'Email is required'
  } else if (!emailRegex.test(email)) {
    errors.value.email = 'Please enter a valid email address'
  } else {
    errors.value.email = null
  }
}

// Real-time validation function
const validatePassword = () => {
  const password = formData.value.password
  const minLength = 8
  const hasUppercase = /[A-Z]/.test(password)
  const hasLowercase = /[a-z]/.test(password)
  const hasNumber = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>"]/.test(password)

  // Check the password criteria and update the error message
  if (password.length < minLength) {
    errors.value.password = `Password must be at least ${minLength} characters long.`
  } else if (!hasUppercase) {
    errors.value.password = 'Password must contain at least one uppercase letter.'
  } else if (!hasLowercase) {
    errors.value.password = 'Password must contain at least one lowercase letter.'
  } else if (!hasNumber) {
    errors.value.password = 'Password must contain at least one number.'
  } else if (!hasSpecialChar) {
    errors.value.password = 'Password must contain at least one special character.'
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
