<template>
  <div class="container mx-auto">
    <section class="overflow-hidden p-2 md:p-5 2xl:pt-16 my-12">
      <div class=" mx-auto p-4 lg:py-18  lg:px-7 max-w-7xl rounded-lg">
        <div class="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h2 class="mb-2">
              <span class="text-[#9B51E0] font-bold text-xl mb-5">{{ $t("rol") }}</span>
            </h2>
            <h2 class="text-2xl font-bold leading-tight sm:text-4xl lg:text-3xl mt-5 mb-5 md:mb-0 md:mt-0 text-[#2D465C] dark:text-white"
                id="title"> {{ $t("greeting") }}
              <span class="hover:border-b-4 hover:border-[#01B47C] transition duration-500 ease-in-out text-[#01B47C]">David Villeda</span>
            </h2>
            <p class="max-w-lg mt-3 text-base sm:text-lg md:text-lg lg:text-xl leading-relaxed text-gray-600 md:mt-8 mb-6 dark:text-slate-300 text-justify"
               id="description">
              {{ $t('description') }}
            </p>
            <SocialLinksAndCV/>
          </div>
          <div class="relative px-6 md:px-10">
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

import SocialLinksAndCV from "../components/home/SocialLinksAndCV.vue";



definePageMeta({
  layout: 'main'
})


</script>

<style lang="scss" scoped>

img {
  height: 50vh;
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