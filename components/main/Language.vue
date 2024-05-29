<template>
  <button @click="changeLanguage"
          class="px-2 py-2 text-sm text-gray-700 dark:text-gray-400 flex justify-between items-center hover:text-[#01B47C] dark:hover:text-[#01B47C]">
    <span>{{ locale === 'en' ? 'es' : 'en' }}</span>
  </button>
</template>

<script setup>

const {locale, setLocale} = useI18n()

const changeLanguage = () => {
  setLocale(locale.value === 'en' ? 'es' : 'en');
}

</script>
