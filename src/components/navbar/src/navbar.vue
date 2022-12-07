<template>
  <div class="navbar">{{ message }}</div>
</template>

<script setup>
import { ref } from 'vue'
const message = ref('hello navbar')
</script>

<style scoped>
/* prettier-ignore */
.navbar {
  }
</style>
