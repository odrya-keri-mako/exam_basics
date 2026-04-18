<template>
  <div class="app-container position-relative 
              d-flex flex-column vh-100 
              overflow-x-hidden overflow-y-auto">
    <AppHeader />
    <main class="position-relative flex-fill">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>