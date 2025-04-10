<template>
  <section class="py-5">
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
              <li>Latest advancements in assistive technology</li>
              <li>Real-world applications and success stories</li>
              <li>How to choose the right assistive devices for your needs</li>
              <li>Future trends in the field of assistive technology</li>
              <li>Q&A session with industry experts</li>
            </ul>
            <div class="mt-4">
              <AppRating v-model="value" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed for now
</script>

<style></style>
