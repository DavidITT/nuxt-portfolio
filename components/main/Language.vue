<template>
  <label class="inline-flex items-center cursor-pointer">
    <input
        type="checkbox"
        class="sr-only peer"
        :checked="locale === 'es'"
        @click="changeLanguage"
    />
    <div
        class="relative w-9 h-5 bg-[#01B47C] peer-focus:outline-none rounded-full peer peer-checked:bg-[#01B47C] transition duration-300"
    >
      <span
          class="absolute top-[2px] bg-white border border-gray-300 dark:border-gray-600 rounded-full h-4 w-4 flex items-center justify-center transition-transform"
          :class="locale === 'es' ? 'translate-x-[18px]' : 'translate-x-0'"
      >
        <img
            :src="locale === 'es' ? '/flags/mx-flag.svg' : '/flags/usa-flag.svg'"
            alt="flag"
            class="h-3 w-3"
        />
      </span>
    </div>
  </label>
</template>


<script setup>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale, setLocale } = useI18n();

const changeLanguage = () => {
  const newLocale = locale.value === 'en' ? 'es' : 'en';
  setLocale(newLocale);
  localStorage.setItem('preferred-locale', newLocale);
};

onMounted(() => {
  const storedLocale = localStorage.getItem('preferred-locale');
  if (storedLocale) {
    setLocale(storedLocale);
  }
});
</script>

<style>

img {
  object-fit: cover;
  border-radius: 50%;
}
</style>
