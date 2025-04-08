<script setup>
//import Form from './components/LoginForm.vue'
import BHeader from './components/BHeader.vue'
import BFooter from './components/BFooter.vue'
</script>

<!-- <template>
  <Form />
  <BHeader v-if="showHeader" />
</template> -->

<template>
  <div class="main-container">
    <header>
      <BHeader />
    </header>

    <main class="main-box">
      <router-view></router-view>
    </main>

    <footer>
      <BFooter />
    </footer>
  </div>
</template>
