<template>
  <div class="container px-5">
    <div class="row gx-5 align-items-center">
      <div class="col-lg-6">
        <div class="mb-5 mb-lg-0 text-center text-lg-start">
          <h1 class="display-1 lh-1 mb-3">
            We're helping to connect Australians living with disabilities.
          </h1>
          <p class="lead fw-normal text-muted mb-5">
            Founded in 2025, we're been providing valuable resources, support, and opportunities to
            create a more inclusive Australia.
          </p>
          <div class="row">
            <div class="col-6 mb-3">
              <router-link to="/about-us/our-mission" class="btn btn-primary w-100"
                >Learn More</router-link
              >
            </div>
            <div class="col-6 mb-3">
              <router-link
                to="/community-hub/virtual-events/the-future-of-assistive-technology"
                class="btn btn-secondary w-100"
                >Latest News</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="masthead-device-mockup">
          <div class="device-wrapper">
            <div
              class="device"
              data-device="iPhoneX"
              data-orientation="portrait"
              data-color="black"
            >
              <div class="screen">
                <img
                  src="@/assets/homepagecartoon.png"
                  alt="Cartoon representing people with various disabilities"
                  style="max-width: 100%; max-height: 100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
