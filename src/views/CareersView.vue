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
            <!-- <th class="border p-3 text-left">Actions</th> -->
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
            <!-- <td class="border p-3 space-y-1">
              <a
                v-for="(action, index) in job.actions"
                :key="index"
                :href="action.link"
                class="text-blue-600 hover:underline block"
              >
                {{ action.label }}
              </a>
            </td> -->
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

<style scoped>
/* Optional custom styles */
</style>
