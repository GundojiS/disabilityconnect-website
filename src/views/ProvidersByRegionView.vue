<template>
  <div>
    <InteractiveChart />
  </div>
  <div class="text-center">
    <router-link to="/accessibility-services" class="btn btn-primary mt-5"
      >Back to Accessibility Service Providers</router-link
    >
  </div>
</template>

<script setup>
import InteractiveChart from '@/components/AccessibilityServicesInteractiveChart.vue'
</script>

<style scoped></style>
