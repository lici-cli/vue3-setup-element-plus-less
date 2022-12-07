<template>
  <div class="home">{{ message }}</div>
  <el-button>button</el-button>
  <navbar></navbar>
</template>

<script setup>
import { ref } from 'vue'
const message = ref('hello home')
</script>

<style scoped>
/* prettier-ignore */
.home {
  }
</style>
