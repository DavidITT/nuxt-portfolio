<template>
  <Navbar/>
  <div class="container mx-auto content">
    <div class="flex items-center justify-center px-4 min-h-custom">
      <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div>
          <h1 class="text-7xl font-bold text-gray-800 dark:text-white mb-10">Oops!</h1>
          <p class="md:text-lg leading-relaxed text-gray-700 dark:text-slate-300 mb-7">
            {{ $t('404.description') }}
          </p>
          <ul class="ml-6 md:text-lg leading-relaxed text-gray-700 dark:text-slate-300 mb-5">
            <li>🧨 {{ $t('404.list.one') }}</li>
            <li>👻 {{ $t('404.list.two') }}</li>
            <li>🚧 {{ $t('404.list.three') }}</li>
          </ul>
          <p class="md:text-lg leading-relaxed text-gray-700 dark:text-slate-300">
            {{ $t('404.farewell.description') }}
            <nuxt-link to="/home"
                       class="inline-block hover:border-b-2 hover:border-[#01B47C] transition duration-200 ease-in-out text-[#01B47C]">
              {{ $t('404.farewell.link') }}
            </nuxt-link>
          </p>
        </div>
        <div class="flex justify-center">
          <img src="./assets/img/404-robot.png" alt="" class="max-w-[250px] lg:max-w-[400px] drop">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import Navbar from "~/components/main/Navbar.vue";

defineProps(['error'])

useHead({
  titleTemplate: `David Villeda - 404`,
  link: [
    {rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico'},
    {rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png'},
    {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png'},
    {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png'}
  ]
})

const isDarkMode = localStorage.getItem('theme') === 'dark'

if (isDarkMode) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

</script>

<style scoped>

body {
  @apply bg-white dark:bg-[#081f33];
}

.content {
  padding-top: 68px;
}

@media (min-width: 768px) {
  .content {
    padding-top: 68px;
  }
}

.min-h-custom {
  height: calc(100vh - 68px)
}

.drop:hover {
  filter: drop-shadow(25px 0px 0px rgba(0, 0, 0, 0.2));
  transition: filter 0.5s ease-in-out;
}

.dark .drop:hover {
  filter: drop-shadow(25px 0px 0px rgba(1, 180, 124, 1));
  transition: filter 0.5s ease-in-out;
}

</style>