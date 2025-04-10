// //import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// //import style css
// //import './style.css'

// //import bootstrap css
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// //import router from './router'

// // const app = createApp(App)

// // app.use(router)
// // app.mount('#app')

// createApp(App).mount('#app')

// main.js

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import PrimeVue from 'primevue/config'
// import Aura from '@primevue/themes/aura'

const app = createApp(App)
// app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

import Button from 'primevue/button'
import Rating from 'primevue/rating'
app.component('AppButton', Button)
app.component('AppRating', Rating)

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCRfSzTQNJIJzzTh0d_6ohOglfX4gkCArI',
  authDomain: 'disability-connect-australia.firebaseapp.com',
  projectId: 'disability-connect-australia',
  storageBucket: 'disability-connect-australia.firebasestorage.app',
  messagingSenderId: '1090916556007',
  appId: '1:1090916556007:web:33080dd499509c133d9642',
}

// Initialize Firebase
initializeApp(firebaseConfig)
