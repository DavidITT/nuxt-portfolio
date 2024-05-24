<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup>
import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite();
})

</script>
