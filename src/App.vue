<script setup>
import { RouterView } from 'vue-router'
import NavbarComponent from '@/components/NavbarComponent.vue'
</script>

<template>
  <div class="wrapper">
    <NavbarComponent />
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  max-width: 600px;
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
}
</style>
