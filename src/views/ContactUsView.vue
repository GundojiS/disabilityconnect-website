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
  <section class="py-3">
    <div class="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-4">
        <div class="col-lg-6">
          <div
            class="info-item d-flex flex-column justify-content-center align-items-center aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <i class="bi bi-geo-alt"></i>
            <h3>Address</h3>
            <p>21 Castlereagh St, Sydney, NSW 2000</p>
          </div>
        </div>
        <!-- End Info Item -->

        <div class="col-lg-3 col-md-6">
          <div
            class="info-item d-flex flex-column justify-content-center align-items-center aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <i class="bi bi-telephone"></i>
            <h3>Call Us</h3>
            <p>+61 2 9762 4321</p>
          </div>
        </div>
        <!-- End Info Item -->

        <div class="col-lg-3 col-md-6">
          <div
            class="info-item d-flex flex-column justify-content-center align-items-center aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <i class="bi bi-envelope"></i>
            <h3>Email Us</h3>
            <p>support@disabilityconnect.org.au</p>
          </div>
        </div>
        <!-- End Info Item -->
      </div>

      <div class="row gy-4 mt-1">
        <div class="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.285309754879!2d151.21008991521164!3d-33.86758678065771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3f7de0e6a1%3A0x59bd3c655f6e22c!2sMartin%20Place%2C%20Sydney%20NSW%202000!5e0!3m2!1sen!2sau!4v1712893212345!5m2!1sen!2sau"
            frameborder="0"
            style="border: 0; width: 100%; height: 400px; border-radius: 12px"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <!-- End Google Maps -->

        <div class="col-lg-6">
          <h3 class="mb-2 text-center mb-3">Contact Form</h3>
          <form
            action="forms/contact.php"
            method="post"
            class="php-email-form aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="row gy-4">
              <div class="col-md-6">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="Your Name"
                  required=""
                />
              </div>

              <div class="col-md-6">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  placeholder="Your Email"
                  required=""
                />
              </div>

              <div class="col-md-12">
                <input
                  type="text"
                  class="form-control"
                  name="subject"
                  placeholder="Subject"
                  required=""
                />
              </div>

              <div class="col-md-12">
                <textarea
                  class="form-control"
                  name="message"
                  rows="6"
                  placeholder="Message"
                  required=""
                ></textarea>
              </div>

              <div class="col-md-12 text-center">
                <!-- <div class="loading">Loading</div> -->
                <div class="error-message"></div>
                <!-- <div class="sent-message">Your message has been sent. Thank you!</div> -->

                <!-- <button type="submit">Send Message</button> -->
                <div class="text-center">
                  <router-link to="" class="btn btn-primary mt-1">Send Message</router-link>
                </div>
              </div>
            </div>
          </form>
        </div>
        <!-- End Contact Form -->
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed for now
</script>
