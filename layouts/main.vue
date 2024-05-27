<template>
  <Navbar/>
  <main class="bg-white dark:bg-[#2D465C]">
    <slot/>
  </main>
</template>

<script setup>

useHead({
  titleTemplate: 'David Villeda',
  app: {
    head: {
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '~/assets/favicons/favicon.ico'},
        {rel: 'apple-touch-icon', sizes: '180x180', href: '~/assets/favicons/apple-touch-icon.png'},
        {rel: 'icon', type: 'image/png', sizes: '32x32', href: '~/assets/favicons/favicon-32x32.png'},
        {rel: 'icon', type: 'image/png', sizes: '16x16', href: '~/assets/favicons/favicon-16x16.png'}
      ]
    }
  }
})

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