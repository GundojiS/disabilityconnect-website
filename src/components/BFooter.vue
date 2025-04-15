<template>
  <div class="container">
    <footer class="py-5 mt-5">
      <div class="row">
        <div class="col-6 col-md-2 mb-3">
          <h5>About Us</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <router-link to="/about-us/our-mission" class="nav-link p-0 text-body-secondary"
                >Our Mission</router-link
              >
            </li>
            <li class="nav-item mb-2">
              <router-link to="/about-us/our-vision" class="nav-link p-0 text-body-secondary"
                >Our Vision</router-link
              >
            </li>
            <li class="nav-item mb-2">
              <router-link to="/about-us/our-values" class="nav-link p-0 text-body-secondary"
                >Our Values</router-link
              >
            </li>
          </ul>
        </div>

        <div class="col-6 col-md-2 mb-3">
          <h5>Get Involved</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <router-link
                to="/get-involved/volunteering-opportunities"
                class="nav-link p-0 text-body-secondary text-wrap"
                style="max-width: 110px"
                >Volunteering Opportunities</router-link
              >
            </li>
            <li class="nav-item mb-2">
              <router-link to="/get-involved/careers" class="nav-link p-0 text-body-secondary"
                >Careers</router-link
              >
            </li>
          </ul>
        </div>

        <div class="col-6 col-md-2 mb-3">
          <h5>Get In Touch</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <router-link to="/get-in-touch/contact-us" class="nav-link p-0 text-body-secondary"
                >Contact Us</router-link
              >
            </li>
            <li class="nav-item mb-2">
              <router-link
                to="/get-in-touch/feedback-and-suggestions"
                class="nav-link p-0 text-body-secondary"
                >Feedback and Suggestions</router-link
              >
            </li>
          </ul>
        </div>

        <div class="col-md-5 offset-md-1 mb-3">
          <form @submit.prevent="subscribe">
            <h5>Get an email of our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" class="visually-hidden">Email address</label>
              <input
                id="newsletter1"
                v-model="email"
                type="email"
                class="form-control"
                placeholder="Email address"
                required
              />
              <button class="btn btn-primary" type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
      <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2025 Disability Connect Australia. All rights reserved.</p>
        <ul class="list-unstyled d-flex"></ul>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const subscribe = async () => {
  if (!email.value) return

  try {
    await fetch(
      `https://email-2k7ll73aka-uc.a.run.app/?to=${encodeURIComponent(email.value)}&subject=Newsletter&text=Here%20is%20your%20newsletter!`,
    )
  } catch (err) {
    console.error('Error sending email:', err)
  } finally {
    alert(`Email sent to ${email.value}`)
    email.value = ''
  }
}
</script>
