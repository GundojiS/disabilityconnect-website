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
            <!-- <li class="nav-item mb-2">
              <router-link
                to="/get-involved/partner-with-us"
                class="nav-link p-0 text-body-secondary"
                >Partner with us</router-link
              >
            </li> -->
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
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" class="visually-hidden">Email address</label>
              <input
                id="newsletter1"
                type="email"
                class="form-control"
                placeholder="Email address"
              />
              <button class="btn btn-primary" type="button">Subscribe</button>
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

<!-- <script setup>
// import { ref, onMounted } from 'vue';
// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// import { getFirestore, doc, getDoc } from "firebase/firestore";

// const auth = getAuth();
// const db = getFirestore();
// const role = ref(null); // Store the role
// const currentUser = ref(null); // Store the current authenticated user

// Function to fetch user role from Firestore
// const fetchUserRole = async (user) => {
//   const userDoc = await getDoc(doc(db, "users", user.uid));
//   if (userDoc.exists()) {
//     role.value = userDoc.data().role;
//   } else {
//     console.log("No such document!");
//     role.value = null;
//   }
// };

// Check if user is authenticated and fetch role
// onMounted(() => {
//   onAuthStateChanged(auth, (user) => {
//     currentUser.value = user;
//     if (user) {
//       fetchUserRole(user);
//     } else {
//       currentUser.value = null;
//       role.value = null;
//     }
//   });
// });

// Logout function to sign out the user
// const firebaseLogout = async () => {
//   try {
//     await signOut(auth);
//     console.log('User logged out:', auth.currentUser);
//     currentUser.value = null;
//     role.value = null;
//   } catch (error) {
//     console.error('Error logging out:', error);
//   }
// }
//
</script> -->

<!-- <style scoped>
.nav-link {
  min-height: 3.5rem; /* Adjust based on how tall the wrapped link is */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  white-space: normal; /* Allows wrapping */
}

header {
  position: relative;
  top: 0;
  width: 100%;
}

/* .b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow:
    inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}

.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
} */
</style> -->
