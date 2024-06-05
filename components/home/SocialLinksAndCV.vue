<template>
  <div class="flex flex-row justify-start">
    <div class="flex w-1/2 justify-start mr-5">
      <font-awesome-icon :icon="['fab', 'github']"
                         id="github-icon"
                         class="custom-icon"
                         :size="iconSize" role="button"
                         @click="goTo('github')"/>
      <font-awesome-icon :icon="['fab', 'linkedin']"
                         id="linkedin-icon"
                         class="custom-icon"
                         :size="iconSize" role="button"
                         @click="goTo('linkedin')"/>
      <font-awesome-icon :icon="['fab', 'instagram']"
                         id="instagram-icon"
                         class="custom-icon"
                         :size="iconSize" role="button"
                         @click="goTo('instagram')"/>
      <font-awesome-icon :icon="['fas', 'envelope']"
                         id="email-icon"
                         class="custom-icon"
                         :size="iconSize" role="button"
                         @click="goTo('email')"/>
    </div>
  </div>
</template>

<script setup>
import {onMounted} from "vue";
import {animateElements} from "../../utils/home/gsapAnimations.js";

const {locale} = useI18n()

const windowWidth = ref(0);

const goTo = (social) => {
  switch (social) {
    case 'github':
      window.open('https://github.com/DavidITT', '_blank')
      break

    case 'linkedin':
      window.open('https://www.linkedin.com/in/david-antonio-ortega-villeda-5b2436245/', '_blank')
      break

    case 'email':
      window.location.href = 'mailto:dortegavilleda@gmail.com'
      break

    case 'instagram':
      window.open('https://www.instagram.com/isvilledavid?igsh=cW9vMXB3NjUzYnM2', '_blank')
      break
  }
}

const iconSize = computed(() => {
  if (windowWidth.value >= 1024) return '2x';
  if (windowWidth.value >= 768) return '2x';
  if (windowWidth.value <= 640) return '2x';
  return 'xs';
});

const updateSize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  updateSize();
  window.addEventListener('resize', updateSize);
  animateElements()
});

</script>

<style scoped lang="scss">
.custom-icon {
  flex-shrink: 0;
  margin-right: .9rem;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    color: #01B47C;
    transform: scale(1.1);
  }

  @apply text-[#2D465C] dark:text-white dark:hover:text-[#01B47C] hover:text-[#01B47C] transition duration-300 ease-in-out transform hover:scale-110 mr-2

}
</style>