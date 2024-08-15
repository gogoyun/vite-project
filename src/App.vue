<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/week01">Week 01</RouterLink>
        <RouterLink to="/week02">Week 02</RouterLink>
        <RouterLink to="/week03">Week 03</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  padding: 1em;
}
</style>
