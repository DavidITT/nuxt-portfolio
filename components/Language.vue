<template>
  <button @click="changeLanguage"
          class="px-2 py-2 text-sm text-gray-700 bg-white rounded-md dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-600 flex justify-between items-center">
    <span>{{ locale === 'en' ? 'es' : 'en' }}</span>
  </button>
</template>

<script setup>

const {locale, setLocale} = useI18n()

const changeLanguage = () => {
  setLocale(locale.value === 'en' ? 'es' : 'en');
}

</script>
