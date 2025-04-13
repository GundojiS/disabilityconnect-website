<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-semibold mb-6 text-center">Volunteering Opportunities</h1>
    <p class="mb-4 text-gray-700 text-center mt-3">
      Make a difference in your community by volunteering with DCA. Explore current opportunities to
      support inclusion, accessibility, and empowerment across Australia.
    </p>

    <div class="overflow-x-auto">
      <table class="min-w-full text-sm border border-gray-300">
        <thead class="bg-gray-100">
          <tr>
            <th class="border p-3 text-left">Role</th>
            <th class="border p-3 text-left">Reference</th>
            <th class="border p-3 text-left">Details</th>
            <th class="border p-3 text-left">Location</th>
            <th class="border p-3 text-left">Closes</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="role in volunteerRoles" :key="role.ref" class="hover:bg-gray-50">
            <td class="border p-3 font-medium">{{ role.title }}</td>
            <td class="border p-3">{{ role.ref }}</td>
            <!-- <td class="border p-3">{{ role.details }}</td> -->
            <td class="border p-3">
              <div v-html="role.details" />
            </td>
            <td class="border p-3">{{ role.location }}</td>
            <td class="border p-3">{{ role.closes }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const volunteerRoles = [
  {
    title: 'Community Event Volunteer',
    ref: 'VOL001',
    details: `Support local accessibility events and outreach programs.<br/>
              Great opportunity for networking and giving back.`,
    location: 'Sydney, Melbourne, Brisbane',
    closes: '30-Apr-2025',
  },
  {
    title: 'Digital Accessibility Tester',
    ref: 'VOL002',
    details: `Help us test websites and apps for accessibility compliance.<br/>
              Training provided - work remotely.`,
    location: 'Remote (Australia-wide)',
    closes: 'Ongoing',
  },
  {
    title: 'Peer Support Facilitator',
    ref: 'VOL003',
    details: `Facilitate conversations and support sessions for people with disability.<br/>
              Must have lived experience or relevant background.`,
    location: 'Adelaide, Perth',
    closes: '10-May-2025',
  },
]
</script>

<style scoped>
/* Optional styles if you want hover or table tweaks */
</style>
