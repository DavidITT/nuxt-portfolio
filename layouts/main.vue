<template>
  <Navbar/>
  <main class="content">
    <slot/>
  </main>
</template>

<script setup>

import Navbar from "../components/main/Navbar.vue";

</script>

<style>

body {
  margin-top: 0;
  -webkit-font-smoothing: antialiased;
  @apply  bg-white dark:bg-[#081f33];
}

.content {
  padding-top: 68px;
}

@media (min-width: 768px) {
  .content {
    padding-top: 68px;
  }
}



</style>