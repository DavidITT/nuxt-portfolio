<template>
  <main>
    <slot/>
  </main>
</template>

<script>
export default {
  name: "default.vue"
}
</script>

<style>

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
}

.font-space-mono {
  font-family: 'Space Mono', sans-serif;
}

.font-exo {
  font-family: 'Exo 2', sans-serif;
}
</style>