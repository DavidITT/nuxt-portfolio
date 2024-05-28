<template>
  <div class="container mx-auto">
    <section class="overflow-hidden p-2 md:p-5 2xl:pt-16 my-12">
      <div class=" mx-auto p-4 lg:py-18  lg:px-7 max-w-7xl rounded-lg">
        <div class="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h2 class="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl mt-5 mb-5 md:mb-0 md:mt-0 text-[#2D465C] dark:text-white"
                id="title"> {{ $t("greeting") }}
              <span class="hover:border-b-4 hover:border-[#01B47C] transition duration-500 ease-in-out text-[#01B47C]">David Villeda</span>
            </h2>
            <p class="max-w-lg mt-3 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-600 md:mt-8 mb-6 dark:text-slate-300"
               id="description">
              {{ $t('description')}}
            </p>
            <div class="mt-5 flex w-full justify-center md:justify-start">
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
              <font-awesome-icon :icon="['fas', 'envelope']"
                                 id="email-icon"
                                 class="custom-icon"
                                 :size="iconSize" role="button"
                                 @click="goTo('email')"/>
            </div>
          </div>
          <div class="relative">
            <div class="absolute inset-x-0 bottom-0 pt-10 -translate-x-1/2 left-1/2 w-100 blob-shape" id="shape"/>
            <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom"
                 src="../assets/img/profile.png" id="photo" alt=""/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {onMounted} from 'vue'
import {animateElements} from "../utils/home/gsapAnimations.js";

definePageMeta({
  layout: 'main'
})

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
  }
}

const iconSize = computed(() => {
  if (windowWidth.value >= 1280) return '3x';
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

<style lang="scss" scoped>

img {
  height: 50vh;
}

.custom-icon {
  margin-right: .9rem;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    color: #01B47C;
    transform: scale(1.1);
  }

  @apply text-[#2D465C] dark:text-white dark:hover:text-[#01B47C] hover:text-[#01B47C] transition duration-300 ease-in-out transform hover:scale-110 mr-2


}

.blob-shape {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3ClinearGradient id=%22b%22 gradientTransform=%22rotate(105 .5 .5)%22%3E%3Cstop offset=%220%25%22 stop-color=%22%2320ff9a%22%2F%3E%3Cstop offset=%22100%25%22 stop-color=%22%23276e4e%22%2F%3E%3C%2FlinearGradient%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M821.5 684.5Q794 869 604 872t-350.5-86.5Q93 696 111.5 509T269 209.5Q408 97 604.5 110T825 311.5q24 188.5-3.5 373Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22url(%23b)%22 d=%22M821.5 684.5Q794 869 604 872t-350.5-86.5Q93 696 111.5 509T269 209.5Q408 97 604.5 110T825 311.5q24 188.5-3.5 373Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");

}


</style>