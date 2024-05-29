<template>
  <button @click="changeLanguage"
          class="px-2 py-2 text-sm text-gray-700 dark:text-gray-400 flex justify-between items-center hover:text-[#01B47C] dark:hover:text-[#01B47C]">
    <span>{{ locale === 'en' ? 'es' : 'en' }}</span>
  </button>
</template>

<script setup>

const {locale, setLocale} = useI18n()

const changeLanguage = () => {
  const newLocale = locale.value === 'en' ? 'es' : 'en';
  setLocale(newLocale);
  localStorage.setItem('preferred-locale', newLocale);
}

onMounted(() => {
  const storedLocale = localStorage.getItem('preferred-locale');
  if (storedLocale) {
    setLocale(storedLocale);
  }
});

</script>
