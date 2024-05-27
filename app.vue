<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup>
import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite();

  if (typeof window !== 'undefined') {
    document.documentElement.classList.add('dark')
  }

})

</script>
