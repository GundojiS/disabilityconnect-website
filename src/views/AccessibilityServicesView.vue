<template>
  <div class="flex justify-center mt-10">
    <div class="w-full max-w-6xl">
      <h2 class="text-xl font-semibold mb-4 text-center">Accessibility Service Providers</h2>
      <div class="overflow-x-auto">
        <table
          class="mx-auto table-auto border-collapse border border-gray-300 w-full text-left text-sm"
        >
          <thead>
            <tr class="bg-gray-200">
              <th class="border border-gray-300 p-2 cursor-pointer" @click="sortBy('providerName')">
                Provider Name
                <span v-if="sortField === 'providerName'">
                  <span v-if="sortDirection === 'asc'">🔼</span>
                  <span v-if="sortDirection === 'desc'">🔽</span>
                </span>
              </th>
              <th class="border border-gray-300 p-2 cursor-pointer" @click="sortBy('serviceType')">
                Service Type
                <span v-if="sortField === 'serviceType'">
                  <span v-if="sortDirection === 'asc'">🔼</span>
                  <span v-if="sortDirection === 'desc'">🔽</span>
                </span>
              </th>
              <th class="border border-gray-300 p-2 cursor-pointer" @click="sortBy('contactEmail')">
                Email
                <span v-if="sortField === 'contactEmail'">
                  <span v-if="sortDirection === 'asc'">🔼</span>
                  <span v-if="sortDirection === 'desc'">🔽</span>
                </span>
              </th>
              <th class="border border-gray-300 p-2 cursor-pointer" @click="sortBy('phoneNumber')">
                Phone
                <span v-if="sortField === 'phoneNumber'">
                  <span v-if="sortDirection === 'asc'">🔼</span>
                  <span v-if="sortDirection === 'desc'">🔽</span>
                </span>
              </th>
              <th class="border border-gray-300 p-2 cursor-pointer" @click="sortBy('region')">
                Region
                <span v-if="sortField === 'region'">
                  <span v-if="sortDirection === 'asc'">🔼</span>
                  <span v-if="sortDirection === 'desc'">🔽</span>
                </span>
              </th>
            </tr>
            <tr class="bg-gray-100">
              <td class="border border-gray-300 p-2">
                <input
                  type="text"
                  v-model="search.providerName"
                  class="rounded border p-2 text-sm bg-white text-black"
                  placeholder="Search provider"
                />
              </td>
              <td class="border border-gray-300 p-2">
                <input
                  type="text"
                  v-model="search.serviceType"
                  class="rounded border p-2 text-sm bg-white text-black"
                  placeholder="Search service"
                />
              </td>
              <td class="border border-gray-300 p-2">
                <input
                  type="text"
                  v-model="search.contactEmail"
                  class="rounded border p-2 text-sm bg-white text-black"
                  placeholder="Search email"
                />
              </td>
              <td class="border border-gray-300 p-2">
                <input
                  type="text"
                  v-model="search.phoneNumber"
                  class="rounded border p-2 text-sm bg-white text-black"
                  placeholder="Search phone"
                />
              </td>
              <td class="border border-gray-300 p-2">
                <input
                  type="text"
                  v-model="search.region"
                  class="rounded border p-2 text-sm bg-white text-black"
                  placeholder="Search region"
                />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(provider, index) in paginatedProviders"
              :key="index"
              class="hover:bg-gray-100"
            >
              <td class="border border-gray-300 p-2">{{ provider.providerName }}</td>
              <td class="border border-gray-300 p-2">{{ provider.serviceType }}</td>
              <td class="border border-gray-300 p-2">{{ provider.contactEmail }}</td>
              <td class="border border-gray-300 p-2">{{ provider.phoneNumber }}</td>
              <td class="border border-gray-300 p-2">{{ provider.region }}</td>
            </tr>

            <tr
              v-for="n in rowsPerPage - paginatedProviders.length"
              :key="'empty-' + n"
              class="h-[52px] border border-gray-300"
            >
              <td class="border border-gray-300 p-2">&nbsp;</td>
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
      <div class="text-center">
        <router-link
          to="/accessibility-services/get-all-accessibility-providersAPI"
          class="btn btn-primary mt-3"
          >Get Accessibility Services API</router-link
        >
        <span class="text-sm px-1"></span>
        <router-link to="/accessibility-services/providers-by-region" class="btn btn-primary mt-3"
          >View Providers by Region Graph</router-link
        >
      </div>

      <div class="text-center mt-4">
        <button @click="exportToCSV" class="px-4 py-2 bg-white text-black border-2 rounded">
          Export as CSV
        </button>
        <span class="px-1"></span>
        <button @click="exportToPDF" class="px-4 py-2 bg-white text-black border-2 rounded">
          Export as PDF
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { db } from '@/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

const providers = ref([])
const currentPage = ref(1)
const rowsPerPage = 10

const search = ref({
  providerName: '',
  serviceType: '',
  contactEmail: '',
  phoneNumber: '',
  region: '',
})

const sortProviders = () => {
  providers.value.sort((a, b) => {
    const aVal = a[sortField.value]?.toLowerCase?.() || ''
    const bVal = b[sortField.value]?.toLowerCase?.() || ''
    if (aVal < bVal) return sortDirection.value === 'asc' ? -1 : 1
    if (aVal > bVal) return sortDirection.value === 'asc' ? 1 : -1
    return 0
  })
}

const fetchProviders = async () => {
  const snapshot = await getDocs(collection(db, 'accessibilityProviders'))
  providers.value = snapshot.docs.map((doc) => doc.data())
  sortProviders()
}

onMounted(fetchProviders)

// Default sorting state
const sortField = ref('providerName')
const sortDirection = ref('asc')

const filteredProviders = computed(() => {
  return providers.value.filter(
    (provider) =>
      (!search.value.providerName ||
        provider.providerName?.toLowerCase().includes(search.value.providerName.toLowerCase())) &&
      (!search.value.serviceType ||
        provider.serviceType?.toLowerCase().includes(search.value.serviceType.toLowerCase())) &&
      (!search.value.contactEmail ||
        provider.contactEmail?.toLowerCase().includes(search.value.contactEmail.toLowerCase())) &&
      (!search.value.phoneNumber ||
        provider.phoneNumber?.toLowerCase().includes(search.value.phoneNumber.toLowerCase())) &&
      (!search.value.region ||
        provider.region?.toLowerCase().includes(search.value.region.toLowerCase())),
  )
})

const totalPages = computed(() => Math.ceil(filteredProviders.value.length / rowsPerPage))

const paginatedProviders = computed(() => {
  const start = (currentPage.value - 1) * rowsPerPage
  return filteredProviders.value.slice(start, start + rowsPerPage)
})

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}

// Sort function
const sortBy = (field) => {
  const direction = sortField.value === field && sortDirection.value === 'asc' ? 'desc' : 'asc'
  sortField.value = field
  sortDirection.value = direction

  providers.value.sort((a, b) => {
    if (a[field] < b[field]) return direction === 'asc' ? -1 : 1
    if (a[field] > b[field]) return direction === 'asc' ? 1 : -1
    return 0
  })
}

// Export to csv function
const exportToCSV = () => {
  const headers = ['Provider Name', 'Service Type', 'Email', 'Phone', 'Region']
  const rows = providers.value.map((p) => [
    p.providerName,
    p.serviceType,
    p.contactEmail,
    p.phoneNumber,
    p.region,
  ])

  const csvContent = [
    headers.join(','),
    ...rows.map((row) => row.map((cell) => `"${cell || ''}"`).join(',')),
  ].join('\n')

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.setAttribute('href', url)
  link.setAttribute('download', 'accessibility_providers.csv')
  link.click()
}

// Export to pdf function
const exportToPDF = () => {
  const doc = new jsPDF()

  doc.text('Accessibility Providers', 14, 10)

  autoTable(doc, {
    startY: 20,
    head: [['Provider Name', 'Service Type', 'Email', 'Phone', 'Region']],
    body: providers.value.map((p) => [
      p.providerName,
      p.serviceType,
      p.contactEmail,
      p.phoneNumber,
      p.region,
    ]),
  })

  doc.save('accessibility_providers.pdf')
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
