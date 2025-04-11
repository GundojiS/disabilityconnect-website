<!-- <template>
  <section class="py-5">
    <div class="container">
      <div class="row align-items-center gx-4">
        <div class="col-md-5">
          <div class="ms-md-2 ms-lg-5">
            <img class="img-fluid rounded-3" src="https://freefrontend.dev/assets/square.png" />
          </div>
        </div>
        <div class="col-md-6 offset-md-1">
          <div class="ms-md-2 ms-lg-5">
            <span class="text-muted">Hi There</span>
            <h2 class="display-5 fw-bold">Admin Dashboard</h2>
            <p class="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
            </p>
            <p class="lead mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
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

<!-- <template>
  <div class="table-container">
    <h2>Admin Dashboard</h2>
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search..."
      @input="filterData"
      class="search-bar"
    />
    <table class="centered-table">
      <thead>
        <tr>
          <th @click="sortTable('email')">Email</th>
          <th @click="sortTable('uid')">UID</th>
          <th @click="sortTable('isAdmin')">Admin</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in paginatedData" :key="index">
          <td>{{ user.email }}</td>
          <td>{{ user.uid }}</td>
          <td>{{ user.isAdmin ? 'Yes' : 'No' }}</td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">Prev</button>
      <span>Page {{ currentPage }}</span>
      <button @click="changePage(currentPage + 1)" :disabled="currentPage >= totalPages">
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { db } from '@/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

const users = ref([])
const searchQuery = ref('')
const currentPage = ref(1)
const rowsPerPage = 10

// Fetch users from Firestore
const fetchUsers = async () => {
  const querySnapshot = await getDocs(collection(db, 'users'))
  users.value = querySnapshot.docs.map((doc) => ({
    email: doc.data().email,
    uid: doc.id,
    isAdmin: doc.data().isAdmin,
  }))
}

// Sort the table by a column
const sortColumn = ref('email')
const sortTable = (column) => {
  if (sortColumn.value === column) {
    users.value.reverse()
  } else {
    users.value.sort((a, b) => {
      if (a[column] < b[column]) return -1
      if (a[column] > b[column]) return 1
      return 0
    })
    sortColumn.value = column
  }
}

// Search the data based on query
const filterData = () => {
  if (searchQuery.value) {
    users.value = users.value.filter(
      (user) =>
        user.email.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        user.uid.includes(searchQuery.value) ||
        (user.isAdmin ? 'Yes' : 'No').includes(searchQuery.value),
    )
  } else {
    fetchUsers()
  }
}

// Pagination
const totalPages = computed(() => Math.ceil(users.value.length / rowsPerPage))
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * rowsPerPage
  return users.value.slice(start, start + rowsPerPage)
})

const changePage = (page) => {
  if (page > 0 && page <= totalPages.value) {
    currentPage.value = page
  }
}

fetchUsers()
</script>

<style scoped>
.table-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

.search-bar {
  margin-bottom: 10px;
  padding: 5px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.centered-table {
  width: 80%;
  margin-top: 20px;
  border-collapse: collapse;
  text-align: left;
}

.centered-table th,
.centered-table td {
  padding: 10px;
  border: 1px solid #ddd;
}

.centered-table th {
  cursor: pointer;
  background-color: #f4f4f4;
}

.centered-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.pagination {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 20px;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style> -->

<template>
  <div class="flex justify-center mt-10">
    <div class="w-full max-w-6xl">
      <h2 class="text-2xl font-semibold mb-4 text-center">User Database</h2>
      <div class="overflow-x-auto">
        <table
          class="mx-auto table-auto border-collapse border border-gray-300 w-full text-left text-sm"
        >
          <!-- Table Headers with sorting functionality -->
          <thead>
            <tr class="bg-gray-200">
              <th class="border border-gray-300 p-2 cursor-pointer" @click="sort('email')">
                Email
                <span v-if="sortKey === 'email'">{{ sortOrder === 'asc' ? '🔼' : '🔽' }}</span>
              </th>
              <th class="border border-gray-300 p-2 cursor-pointer" @click="sort('uid')">
                UID
                <span v-if="sortKey === 'uid'">{{ sortOrder === 'asc' ? '🔼' : '🔽' }}</span>
              </th>
              <th class="border border-gray-300 p-2 cursor-pointer" @click="sort('isAdmin')">
                Admin
                <span v-if="sortKey === 'isAdmin'">{{ sortOrder === 'asc' ? '🔼' : '🔽' }}</span>
              </th>
            </tr>
          </thead>

          <!-- Search Row -->
          <tbody>
            <tr>
              <td class="border border-gray-300 p-2">
                <input
                  type="text"
                  v-model="search.email"
                  class="mt-1 block w-full rounded border border-gray-300 p-1 text-sm focus:ring focus:ring-blue-200 focus:outline-none"
                  placeholder="Search email"
                />
              </td>
              <td class="border border-gray-300 p-2">
                <input
                  type="text"
                  v-model="search.uid"
                  class="mt-1 block w-full rounded border border-gray-300 p-1 text-sm focus:ring focus:ring-blue-200 focus:outline-none"
                  placeholder="Search UID"
                />
              </td>
              <td class="border border-gray-300 p-2">
                <input
                  type="text"
                  v-model="search.isAdmin"
                  class="mt-1 block w-full rounded border border-gray-300 p-1 text-sm focus:ring focus:ring-blue-200 focus:outline-none"
                  placeholder="true / false"
                />
              </td>
            </tr>
          </tbody>

          <!-- Data Rows -->
          <tbody>
            <tr v-for="(user, index) in paginatedUsers" :key="index" class="hover:bg-gray-100">
              <td class="border border-gray-300 p-2">{{ user.email }}</td>
              <td class="border border-gray-300 p-2">{{ user.uid }}</td>
              <td class="border border-gray-300 p-2">{{ user.isAdmin }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination Controls -->
      <div class="w-full flex justify-center mt-4 text-center">
        <div class="inline-flex items-center space-x-4">
          <button
            @click="prevPage"
            :disabled="currentPage === 1"
            class="px-4 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
          >
            Prev
          </button>
          <span class="text-sm px-4">Page {{ currentPage }} of {{ totalPages }}</span>
          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="px-4 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
      <div class="text-center">
        <router-link to="/admin-dashboard/get-usersAPI" class="btn btn-primary mt-3"
          >Get Users API</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { db } from '@/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

const users = ref([])
const currentPage = ref(1)
const rowsPerPage = 10
const sortKey = ref('email') // Default sort key
const sortOrder = ref('asc') // Default sort order

const search = ref({
  email: '',
  uid: '',
  isAdmin: '',
})

const fetchUsers = async () => {
  const snapshot = await getDocs(collection(db, 'users'))
  users.value = snapshot.docs.map((doc) => doc.data())
}

onMounted(fetchUsers)

const filteredUsers = computed(() => {
  return users.value.filter(
    (user) =>
      (!search.value.email ||
        user.email?.toLowerCase().includes(search.value.email.toLowerCase())) &&
      (!search.value.uid || user.uid?.toLowerCase().includes(search.value.uid.toLowerCase())) &&
      (!search.value.isAdmin ||
        String(user.isAdmin).toLowerCase().includes(search.value.isAdmin.toLowerCase())),
  )
})

const totalPages = computed(() => Math.ceil(filteredUsers.value.length / rowsPerPage))

const paginatedUsers = computed(() => {
  const sortedUsers = [...filteredUsers.value].sort((a, b) => {
    let comparison = 0
    if (a[sortKey.value] < b[sortKey.value]) {
      comparison = -1
    } else if (a[sortKey.value] > b[sortKey.value]) {
      comparison = 1
    }
    return sortOrder.value === 'asc' ? comparison : -comparison
  })

  const start = (currentPage.value - 1) * rowsPerPage
  return sortedUsers.slice(start, start + rowsPerPage)
})

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}

const sort = (key) => {
  if (sortKey.value === key) {
    // Toggle sort order
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    // Set sort order to ascending for a new key
    sortKey.value = key
    sortOrder.value = 'asc'
  }
}
</script>

<style scoped>
table th,
table td {
  text-align: left;
  vertical-align: middle;
}

input {
  margin-top: 0.25rem; /* Adds a bit of space to make it look cleaner */
}

.cursor-pointer {
  cursor: pointer;
}
</style>
