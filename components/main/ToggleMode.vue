<template>
  <div :class="{ dark: isDarkMode }">
    <button @click="toggleMode">
                <span class="text-white hover:text-[#01B47C]"
                      v-if="isDarkMode">
                  <font-awesome-icon :icon="['fas', 'sun']" size="lg"/>
                </span>
      <span v-else class="text-white hover:text-[#01B47C]">
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
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

</script>

<style scoped>

</style>