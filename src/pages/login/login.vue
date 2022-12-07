<template>
  <div class="login">{{ message }}</div>
</template>

<script setup>
import { ref } from 'vue'
const message = ref('hello login')
</script>

<style scoped>
/* prettier-ignore */
.login {
  }
</style>
