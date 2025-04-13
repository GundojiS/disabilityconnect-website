<template>
  <section class="py-3">
    <div class="container">
      <div class="row align-items-center gx-4">
        <div class="col-md-5">
          <div class="ms-md-2 ms-lg-5">
            <img class="img-fluid rounded-3" src="@/assets/resources-and-information.png" />
          </div>
        </div>
        <div class="col-md-6 offset-md-1 mt-2">
          <div class="ms-md-2 ms-lg-5">
            <!-- <span class="text-muted">Guides, Help and Useful Links</span> -->
            <h2 class="display-5 fw-bold">Resources and Information</h2>
            <p class="lead">
              Explore practical guides, accessible tools, and helpful services to support people
              with disabilities, carers, families, and service providers.
            </p>
            <ul class="lead fs-6">
              <li>
                <strong>Getting Started with the NDIS: </strong>
                <a href="https://www.ndis.gov.au/participants" target="_blank"
                  >Learn about how to apply, what's covered, and your plan</a
                >.
              </li>
              <li>
                <strong>Accessible Services: </strong>
                <a
                  href="https://www.ndis.gov.au/community/connecting-accessible-communities"
                  target="_blank"
                  >Find services that meet accessibility standards</a
                >.
              </li>
              <li>
                <strong>Support for Carers: </strong>
                <a href="https://www.carergateway.gov.au/" target="_blank"
                  >Access Carer Gateway resources and counselling</a
                >.
              </li>
              <li>
                <strong>Rights & Advocacy: </strong>
                <a href="https://www.daru.org.au/" target="_blank"
                  >Know your rights and connect with disability advocacy services</a
                >.
              </li>
              <li>
                <strong>Employment Support: </strong>
                <a href="https://www.jobaccess.gov.au/" target="_blank"
                  >Find inclusive workplaces and employment support</a
                >.
              </li>
              <li>
                <strong>Mental Health & Wellbeing: </strong>
                <a href="https://headtohealth.gov.au/" target="_blank"
                  >Explore inclusive mental health support</a
                >.
              </li>
            </ul>
            <p class="lead mb-0">
              Can't find what you're looking for? Visit our
              <router-link to="/get-in-touch/feedback-and-suggestions"
                >Feedback and Suggestions</router-link
              >
              page or reach out via our contact options.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div>
      <MapWithFeatures />
    </div> -->
  </section>
</template>

<script setup>
// No script needed for now
import MapWithFeatures from '@/components/MapWithFeatures.vue'
</script>

<style></style>
