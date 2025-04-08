<template>
  <div class="container px-5">
    <div class="row gx-5 align-items-center">
      <div class="col-lg-6">
        <!-- Mashead text and app badges-->
        <div class="mb-5 mb-lg-0 text-center text-lg-start">
          <h1 class="display-1 lh-1 mb-3">
            We're helping to connect Australians living with disabilities.
          </h1>
          <p class="lead fw-normal text-muted mb-5">
            Founded in 2025, we're been providing valuable resources, support, and opportunities to
            create a more inclusive Australia.
          </p>
          <!-- <div class="d-flex flex-column flex-lg-row align-items-center">
                    <a class="me-lg-3 mb-4 mb-lg-0" href="#!"><img class="app-badge" src="assets/img/google-play-badge.svg" alt="..."></a>
                    <a href="#!"><img class="app-badge" src="assets/img/app-store-badge.svg" alt="..."></a>
                </div> -->
          <div class="row">
            <div class="col-6 mb-3">
              <a href="#!" class="btn btn-primary w-100">Learn More</a>
            </div>
            <div class="col-6 mb-3">
              <a href="#!" class="btn btn-secondary w-100">Latest News</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <!-- Masthead device mockup feature-->
        <div class="masthead-device-mockup">
          <div class="device-wrapper">
            <div
              class="device"
              data-device="iPhoneX"
              data-orientation="portrait"
              data-color="black"
            >
              <div class="screen bg-black">
                <!-- PUT CONTENTS HERE:-->
                <!-- * * This can be a video, image, or just about anything else.-->
                <!-- * * Set the max width of your media to 100% and the height to-->
                <!-- * * 100% like the demo example below.-->
                <!-- <video muted="muted" autoplay="" loop="" style="max-width: 100%; height: 100%"><source src="assets/img/demo-screen.mp4" type="video/mp4"></video> -->
                <img
                  src="@/assets/homepagecartoon.png"
                  alt="Homepage Cartoon"
                  style="max-width: 100%; height: 100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for now
</script>

<style></style>
