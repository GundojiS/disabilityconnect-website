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
              <th class="border border-gray-300 p-2 cursor-pointer" @click="sort('isSubscribed')">
                Subscriber
                <span v-if="sortKey === 'isSubscribed'">{{
                  sortOrder === 'asc' ? '🔼' : '🔽'
                }}</span>
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
                  class="rounded border p-2 text-sm bg-white text-black"
                  placeholder="Search email"
                />
              </td>
              <td class="border border-gray-300 p-2">
                <input
                  type="text"
                  v-model="search.uid"
                  class="rounded border p-2 text-sm bg-white text-black"
                  placeholder="Search UID"
                />
              </td>
              <td class="border border-gray-300 p-2">
                <input
                  type="text"
                  v-model="search.isAdmin"
                  class="rounded border p-2 text-sm bg-white text-black"
                  placeholder="true / false"
                />
              </td>
              <td class="border border-gray-300 p-2">
                <input
                  type="text"
                  v-model="search.isSubscribed"
                  class="rounded border p-2 text-sm bg-white text-black"
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
              <td class="border border-gray-300 p-2">{{ user.isSubscribed }}</td>
            </tr>

            <!-- Empty rows to fill the table to set consistent table height -->
            <tr
              v-for="n in rowsPerPage - paginatedUsers.length"
              :key="'empty-' + n"
              class="h-[52px] border border-gray-300"
            >
              <td class="border border-gray-300 p-2">&nbsp;</td>
              <td class="border border-gray-300 p-2">&nbsp;</td>
              <td class="border border-gray-300 p-2">&nbsp;</td>
              <td class="border border-gray-300 p-2">&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>

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
      <div class="text-center mb-1">
        <router-link to="/admin-dashboard/get-usersAPI" class="btn btn-primary mt-3"
          >Get Users API</router-link
        >
      </div>
      <div class="text-center">
        <button @click="sendNewsletter" class="btn btn-primary w-20 mt-2">
          Send Newsletter to Subscribers
        </button>
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
const sortKey = ref('email')
const sortOrder = ref('asc')

const search = ref({
  email: '',
  uid: '',
  isAdmin: '',
  isSubscribed: '',
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
        String(user.isAdmin).toLowerCase().includes(search.value.isAdmin.toLowerCase())) &&
      (!search.value.isSubscribed ||
        String(user.isSubscribed).toLowerCase().includes(search.value.isSubscribed.toLowerCase())),
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
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = key
    sortOrder.value = 'asc'
  }
}

// Function to send newsletter to subscribed users
const sendNewsletter = async () => {
  const subscribedUsers = users.value.filter((user) => user.isSubscribed)

  if (subscribedUsers.length === 0) {
    alert('No subscribers found.')
    return
  }

  for (const user of subscribedUsers) {
    const url = new URL('https://email-2k7ll73aka-uc.a.run.app')
    url.searchParams.append('to', user.email)
    url.searchParams.append('subject', 'Your Newsletter')
    url.searchParams.append('text', 'Hello from Disability Connect! Thanks for subscribing.')

    try {
      await fetch(url.toString())
    } catch (error) {
      console.error(`Failed to send to ${user.email}:`, error)
    }
  }

  alert(`Newsletter sent to ${subscribedUsers.length} subscribers.`)
}
</script>

<style scoped>
table th,
table td {
  text-align: left;
  vertical-align: middle;
}

input {
  margin-top: 0.25rem;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
