<template>
  <pre>{{ allaccessibilityprovidersdata }}</pre>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      allaccessibilityprovidersdata: null,
      error: null,
    }
  },
  mounted() {
    this.getAllAccessibilityProvidersAPI()
  },
  methods: {
    async getAllAccessibilityProvidersAPI() {
      try {
        const response = await axios.get(
          'https://getallaccessibilityproviders-2k7ll73aka-uc.a.run.app',
        )
        this.allaccessibilityprovidersdata = response.data // Store the list of books
        this.error = null
      } catch (error) {
        console.error('Error fetching providers:', error)
        this.error = 'Failed to fetch providers'
        this.allaccessibilityprovidersdata = null
      }
    },
  },
}
</script>
