<!-- <template>
  <section class="py-4">
    <div class="container">
      <div class="row align-items-center gx-4">
        <div class="col-md-5">
          <div class="ms-md-2 ms-lg-5">
            <img class="img-fluid rounded-3 mb-2" src="@/assets/our-mission.jpg" />
          </div>
        </div>
        <div class="col-md-6 offset-md-1">
          <div class="ms-md-2 ms-lg-5">
            <span class="text-muted">About Us</span>
            <h2 class="display-5 fw-bold">Our Mission</h2>
            <p class="lead">
              At Disability Connect Australia, our mission is to create a more inclusive world by
              making accessibility a priority—not an afterthought.
            </p>
            <p class="lead">
              We strive to remove barriers, promote equal opportunities, and empower individuals of
              all abilities through thoughtful solutions and community-driven support.
            </p>
            <p class="lead mb-0">Everyone deserves access. We’re here to make that happen.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed for now
</script>

<style></style> -->

<template>
  <div class="container my-3">
    <h1 class="text-3xl font-semibold mb-6 text-center">Feedback & Suggestions</h1>
    <p class="mb-4 text-gray-700 text-center mt-3">
      We want to hear from you—your ideas, experiences, concerns, and compliments help shape how we
      support our community.
    </p>

    <div class="row py-3">
      <!-- Left Column -->
      <div class="col-md-6 mb-4">
        <h3>How to Reach Us</h3>
        <ul>
          <li>
            <strong>Online:</strong> Use our
            <router-link to="/get-in-touch/contact-us">Feedback Form</router-link>
          </li>
          <li>
            <strong>Email:</strong>
            <a href="mailto:support@disabilityconnect.org.au">support@disabilityconnect.org.au</a>
          </li>
          <li><strong>Phone:</strong> 1800 123 456 (Mon-Fri, 8am-8pm)</li>
          <li><strong>In Person:</strong> Visit our local hubs or partner offices.</li>
          <li><strong>Mail:</strong> PO Box 123, Sydney NSW 2000</li>
          <li><strong>Interpreter:</strong> Call TIS National on <strong>131 450</strong></li>
          <li>
            <strong>Speech or hearing support:</strong> National Relay Service on
            <strong>1800 555 727</strong>
          </li>
        </ul>

        <p class="mt-3">
          If we're not the right people to help, we'll do our best to connect you with someone who
          can.
        </p>
      </div>

      <!-- Right Column -->
      <div class="col-md-6">
        <h3>What Happens Next?</h3>
        <p>
          When you get in touch, we'll listen carefully and respond with care. If you make a
          complaint, our team will work with you to understand and resolve the issue.
        </p>

        <h4 class="mt-4">Our Commitment</h4>
        <ul>
          <li><strong>Transparent:</strong> Simple and accessible ways to get in touch.</li>
          <li><strong>Responsive:</strong> We'll act quickly and keep you updated.</li>
          <li><strong>Respectful:</strong> You'll be treated with empathy and dignity.</li>
          <li><strong>Empowering:</strong> Your voice matters—your feedback drives real change.</li>
          <li><strong>Supportive:</strong> We're here to guide you every step of the way.</li>
        </ul>

        <p class="mt-3">
          Your feedback helps us learn, grow, and build a more inclusive community. Thank you for
          taking the time to share your thoughts with us.
        </p>
      </div>
    </div>
  </div>
</template>

<!-- <script>
export default {
  name: 'FeedbackAndSuggestions',
}
</script> -->

<style scoped>
ul {
  padding-left: 1rem;
}

ul li {
  margin-bottom: 0.75rem;
}

/* a {
  color: #0d6efd;
} */

/* a:hover {
  text-decoration: underline;
} */
</style>
