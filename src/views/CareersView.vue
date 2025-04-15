<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-semibold mb-6 text-center">Careers at DCA</h1>
    <p class="mb-4 text-gray-700 text-center mt-3">
      Explore current job openings and register your interest in joining our mission to support a
      more inclusive Australia.
    </p>

    <div class="overflow-x-auto">
      <table class="min-w-full text-sm border border-gray-300">
        <thead class="bg-gray-100">
          <tr>
            <th class="border p-3 text-left">Position</th>
            <th class="border p-3 text-left">Job Ref</th>
            <th class="border p-3 text-left">Details</th>
            <th class="border p-3 text-left">Location</th>
            <th class="border p-3 text-left">Closes</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="job in jobs" :key="job.ref" class="hover:bg-gray-50">
            <td class="border p-3 font-medium">{{ job.title }}</td>
            <td class="border p-3">{{ job.ref }}</td>
            <td class="border p-3">
              <div v-html="job.details" />
            </td>
            <td class="border p-3">{{ job.location }}</td>
            <td class="border p-3">{{ job.closes }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const jobs = [
  {
    title: 'DCA Temporary Employment Register (2024 - 2025)',
    ref: '2024ERS',
    details: `APS Level 2-6, Executive Level 1-2, SES Band 1-3<br/>
              Register interest for non-ongoing vacancies up to 12 months`,
    location: 'Various locations - Australia wide',
    closes: 'Never closes',
  },
  {
    title: 'APS5 Contact Centre Administrator',
    ref: '0634_02/25_EXT',
    details: `Utilise IT skills to enhance outcomes for participants<br/>
              Safe, inclusive workplace<br/>
              $86,624 - $93,253 (+15.4% super)`,
    location: 'Nationwide',
    closes: '13-Apr-2025, 11:30 PM (AEST)',
  },
  {
    title: 'APS5 Data Analyst',
    ref: '0771_03/25_EXT',
    details: `Ongoing & non-ongoing - Full Time<br/>
              Nationwide opportunities<br/>
              $86,624 - $93,253 (+15.4% super)`,
    location: 'Nationwide',
    closes: '13-Apr-2025, 11:30 PM (AEST)',
  },
]
</script>

<style scoped></style>
