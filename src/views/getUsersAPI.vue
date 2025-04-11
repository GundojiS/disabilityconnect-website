<template>
  <pre>{{ allusersdata }}</pre>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      allusersdata: null,
      error: null,
    }
  },
  mounted() {
    this.getUsersAPI()
  },
  methods: {
    async getUsersAPI() {
      try {
        const response = await axios.get('https://getusers-2k7ll73aka-uc.a.run.app')
        this.allusersdata = response.data // Store the list of books
        this.error = null
      } catch (error) {
        console.error('Error fetching users:', error)
        this.error = 'Failed to fetch users'
        this.allusersdata = null
      }
    },
  },
}
</script>
