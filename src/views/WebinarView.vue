<template>
  <section class="py-3">
    <div class="container">
      <div class="row align-items-center gx-4">
        <div class="col-md-5">
          <div class="ms-md-2 ms-lg-5">
            <img class="img-fluid rounded-3" src="@/assets/assistive-technology-cartoon.jpeg" />
          </div>
        </div>
        <div class="col-md-6 offset-md-1">
          <div class="ms-md-2 ms-lg-5">
            <span class="text-muted">Virtual Events</span>
            <h2 class="display-5 fw-bold">Webinar: The future of assistive technology</h2>
            <p class="lead">Date and Time: Monday, 14th of August 2024, 6:00 PM - 7:30 PM AEST</p>
            <p class="lead mb-3">
              Join us for an exciting and informative session on the latest breakthroughs in
              assistive technology, helping individuals with disabilities live more independently.
              Our expert panel will discuss cutting-edge tools, smart devices, and digital
              innovations designed to improve mobility, communication, and everyday accessibility.
            </p>
            <p class="lead">What you'll learn:</p>
            <ul class="lead">
              <li class="lead">Latest advancements in assistive technology</li>
              <li class="lead">Real-world applications and success stories</li>
              <li class="lead">How to choose the right assistive devices for your needs</li>
              <li class="lead">Future trends in the field of assistive technology</li>
              <li class="lead">Q&A session with industry experts</li>
            </ul>
            <div class="mt-4">
              <AppRating v-model="value" />
            </div>

            <div class="mt-3">
              <button class="btn btn-primary" @click="submitRating">Submit Rating</button>
              <p class="mt-2">
                Average Rating: {{ averageRating }} / 5 ({{ totalRatings }} ratings)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { db, auth } from '@/firebaseConfig'
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'

const value = ref(0)
const averageRating = ref(null)
const totalRatings = ref(null)
const user = ref(null)

// Check auth state
onMounted(() => {
  onAuthStateChanged(auth, (u) => {
    user.value = u
    fetchRatings()
  })
})

const submitRating = async () => {
  if (!user.value) {
    alert('You must be logged in to rate.')
    return
  }

  await addDoc(collection(db, 'webinarRatings'), {
    userId: user.value.uid,
    rating: value.value,
  })

  fetchRatings()
}

// const totalRatings = ref(0)

const fetchRatings = async () => {
  const snapshot = await getDocs(collection(db, 'webinarRatings'))
  const ratings = snapshot.docs.map((doc) => doc.data().rating)
  const total = ratings.reduce((a, b) => a + b, 0)
  averageRating.value = ratings.length ? (total / ratings.length).toFixed(1) : 'No ratings yet'
  totalRatings.value = ratings.length
}
</script>
