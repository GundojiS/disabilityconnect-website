import './assets/main.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/custom-bootstrap.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'leaflet/dist/leaflet.css'

import { firebaseApp } from './firebaseConfig' // Just for init

const app = createApp(App)

// Use PrimeVue and Router
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
app.use(router)

// Register PrimeVue components
import Button from 'primevue/button'
import Rating from 'primevue/rating'
app.component('AppButton', Button)
app.component('AppRating', Rating)

// // Call Firebase Function
// const addAdmin = httpsCallable(functions, 'addAdminRole')
// addAdmin({ email: 'user@example.com' })
//   .then((result) => {
//     console.log(result.data.message) // Success!
//   })
//   .catch((error) => {
//     console.error('Error adding admin: ', error)
//   })

// Mount the app
app.mount('#app')

// // //import './assets/main.css'

// // import { createApp } from 'vue'
// // import App from './App.vue'

// // //import style css
// // //import './style.css'

// // //import bootstrap css
// // import 'bootstrap/dist/css/bootstrap.min.css'
// // import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// // //import router from './router'

// // // const app = createApp(App)

// // // app.use(router)
// // // app.mount('#app')

// // createApp(App).mount('#app')

// // main.js

// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import PrimeVue from 'primevue/config'
// import Aura from '@primevue/themes/aura'

// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'

// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app'
// import { getFunctions, httpsCallable } from 'firebase/functions'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Initialize Firebase
// initializeApp(firebaseConfig)
// const functions = getFunctions(app)

// // import PrimeVue from 'primevue/config'
// // import Aura from '@primevue/themes/aura'

// const app = createApp(App)
// // app.use(PrimeVue, { theme: { preset: Aura } })
// app.use(router)

// app.mount('#app')

// app.use(PrimeVue, {
//   theme: {
//     preset: Aura,
//   },
// })

// import Button from 'primevue/button'
// import Rating from 'primevue/rating'
// app.component('AppButton', Button)
// app.component('AppRating', Rating)

// const addAdmin = httpsCallable(functions, 'addAdminRole')
// addAdmin({ email: 'user@example.com' })
//   .then((result) => {
//     console.log(result.data.message) // Success!
//   })
//   .catch((error) => {
//     console.error('Error adding admin: ', error)
//   })

// // import { getAuth, onAuthStateChanged } from 'firebase/auth'

// // const auth = getAuth()

// // onAuthStateChanged(auth, () => {
// //   if (!app) {
// //     app = createApp(App)
// //     app.use(router)
// //     app.mount('#app')
// //   }
// // })
