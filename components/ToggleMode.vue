<template>
  <div :class="{ dark: isDarkMode }">
    <button @click="toggleMode">
                <span class="text-dark hover:text-[#01B47C] dark:text-white dark:hover:text-[#01B47C]"
                      v-if="isDarkMode">
                  <font-awesome-icon :icon="['fas', 'sun']" size="lg"/>
                </span>
      <span v-else class="text-[#2D465C] hover:text-[#01B47C] dark:text-white dark:hover:text-[#01B47C]">
                  <font-awesome-icon :icon="['far', 'moon']" size="lg"/>
                </span>
    </button>
  </div>
</template>

<script setup>
const {locale, setLocale} = useI18n()
const isDarkMode = ref(true)

const toggleMode = () => {
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

</script>

<style scoped>

</style>