<template>
  <Navbar/>
  <main class="content">
    <slot/>
  </main>
</template>

<script setup>

import Navbar from "../components/main/Navbar.vue";

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
  margin-top: 0;
  -webkit-font-smoothing: antialiased;
  @apply  bg-white dark:bg-[#2D465C];
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