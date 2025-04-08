<template>
  <div class="container">
    <header
      class="position-sticky top-0 d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
    >
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-xxl-auto link-body-emphasis text-decoration-none"
      >
        <!-- <svg class="bi me-2" width="40" height="32" aria-hidden="true">
          <use xlink:href="#bootstrap"></use>
        </svg> -->
        <span class="fs-4 logo-text">Disability Connect Australia </span>
      </a>

      <ul class="nav nav-pills gap-2 ms-4">
        <li class="nav-item">
          <router-link to="/" class="nav-link" aria-current="page">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/resources-and-information"
            class="nav-link text-wrap text-center"
            style="max-width: 150px"
            >Resources and Information</router-link
          >
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-wrap text-center" style="max-width: 120px"
            >Community Hub</a
          >
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-wrap text-center" style="max-width: 150px"
            >Employment and Education</a
          >
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-wrap text-center" style="max-width: 150px"
            >Accessibility Services</a
          >
        </li>
        <li class="nav-item"><a href="#" class="nav-link">Register</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Login</a></li>
      </ul>
    </header>
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

<style scoped>
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

/* Customize the active link's style */
.router-link-active {
  background-color: #0d6efd; /* Blue background for active link */
  color: white; /* White text for active link */
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
</style>
