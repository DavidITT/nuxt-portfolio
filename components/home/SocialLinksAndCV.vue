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

      <a :href="locale === 'en' ? '/David_Villeda_CV_EN.pdf' : '/David_Villeda_CV_ES.pdf'" target="_blank">
        <svg fill="currentColor" version="1.1"  xmlns="http://www.w3.org/2000/svg"
             width="32px" height="32px" class="custom-icon" id="cv-icon" viewBox="0 0 43.916 43.916"
             xml:space="preserve">
                <g>
                  <path d="M34.395,0H9.522c-2.762,0-5,2.239-5,5v33.916c0,2.761,2.238,5,5,5h24.871c2.762,0,5-2.239,5-5V5
                    C39.395,2.239,37.154,0,34.395,0z M9.208,16.855c0-1.172,0.951-2.121,2.121-2.121h0.742c-0.791-0.874-1.277-2.03-1.277-3.304
                    c0-2.723,2.209-4.931,4.932-4.931c2.725,0,4.932,2.207,4.932,4.932c0,1.272-0.486,2.429-1.279,3.303h0.709
                    c1.172,0,2.121,0.949,2.121,2.121v3.578c0,1.122-0.875,2.03-1.975,2.106h-9.051c-1.1-0.076-1.975-0.984-1.975-2.106V16.855
                    L9.208,16.855z M32.708,37.416h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,37.416,32.708,37.416z
                     M32.708,29.916h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,29.916,32.708,29.916z M32.708,22.416
                    h-6.5c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2h6.5c1.104,0,2,0.896,2,2C34.708,21.52,33.812,22.416,32.708,22.416z"/>
                </g>
        </svg>
      </a>


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