<template>
  <div class="fixed inset-0 bg-gray-900 bg-opacity-50 z-20"  @click="toggleSideBar"></div>
  <div class="sidebar fixed top-0 bottom-0 block lg:hidden w-[330px] md:w-1/2 overflow-y-auto text-center bg-white dark:bg-gray-800 z-50 items-center">
    <header>
      <div class="flex justify-between w-100 h-auto p-3 custom-bg-gradient border-b dark:border-b-0">
        <NuxtLink to="/home">
          <div class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="~/assets/logo/logo.png" class="h-8" alt="David Logo"/>
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">David Villeda</span>
          </div>
        </NuxtLink>

        <div class="flex justify-center space-x-3 items-center">
          <Language/>
          <ToggleMode/>
        </div>
      </div>
    </header>
    <div class="p-3 mt-8">
      <ul>
        <ul class="space-y-0.2 font-medium">
          <li>
            <NuxtLink
                to="#about"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                @click="toggleSideBar"
            >
              <font-awesome-icon :icon="['fas', 'user']" size="lg" class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span class="ms-3 text-xl">{{ $t('links.about.text') }}</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
                to="#experience"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                @click="toggleSideBar"
            >
              <font-awesome-icon :icon="['fas', 'briefcase']" size="lg" class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span class="ms-3 text-xl">{{ $t('links.experience.text') }}</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
                to="#projects"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                @click="toggleSideBar"
            >
              <font-awesome-icon :icon="['fas', 'diagram-project']" size="lg" class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span class="ms-3 text-xl">{{ $t('links.works.text') }}</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
                to="#technologies"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                @click="toggleSideBar"
            >
              <font-awesome-icon :icon="['fas', 'laptop-code']" size="lg" class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span class="ms-3 text-xl">{{ $t('links.technologies.text') }}</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
                to="#certificates"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                @click="toggleSideBar"
            >
              <font-awesome-icon size="lg" :icon="['fas', 'certificate']" class="text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span class="ms-3 text-xl">{{ $t('links.certificates.text') }}</span>
            </NuxtLink>
          </li>
          <li>
            <a :href="locale === 'en' ? '/David_Villeda_CV_EN.pdf' : '/David_Villeda_CV_ES.pdf'" target="_blank" title="CV"
               class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <svg class="w-5 h-5 text-gray-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                   width="25px" height="25px" viewBox="0 0 43.916 43.916"
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
              <span class="ms-3 text-xl"> {{ $t('links.cv.text') }} </span>
            </a>
          </li>
        </ul>
      </ul>
    </div>
    <div class="w-[330px] md:w-full p-3.5 bottom-0 absolute dark:border-0">
      <hr class="py-1.5">
        <div class="font-bold mb-3 text-gray-500">
          <span class="dark:text-white text-gray-500 text-lg">Contact me</span>
        </div>
        <SocialLinksAndCV class="justify-center"/>
    </div>
  </div>
</template>

<script setup>
import {useSideBarStore} from "~/stores/useSideBarStore.js";
import Language from "~/components/main/Language.vue";
import ToggleMode from "~/components/main/ToggleMode.vue";
import SocialLinksAndCV from "~/components/home/SocialLinksAndCV.vue";

const {locale} = useI18n()

const {toggleSideBar} = useSideBarStore()


</script>

<style scoped>

.custom-bg-gradient {
  background-color: #081F33;
}

</style>