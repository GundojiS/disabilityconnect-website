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
import Rating from 'primevue/rating'

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

app.use(Rating, {})
