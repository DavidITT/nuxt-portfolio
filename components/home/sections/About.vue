<template>
  <section id="about" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
    <div class=" -mx-6 mb-4 w-screen bg-slate-200 dark:bg-slate-900/75 dark:lg:bg-transparent lg:bg-transparent px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 ">
      <h2 class="text-sm lg:text-xl font-bold uppercase tracking-widest text-[#9B51E0]">{{ $t('links.about.text') }}</h2>
    </div>
    <p class="text-sm md:text-lg leading-relaxed text-gray-600 md:mt-0 mb-6 dark:text-slate-300 text-justify"
       id="description">
      {{ $t('about1') }}
    </p>
    <p class="mt-3 text-sm sm:text-lg md:text-lg leading-relaxed text-gray-600 md:mt-0 mb-6 dark:text-slate-300 text-justify"
       id="description">
      {{ $t('about2') }}
    </p>
    <ProfilePhoto class="hidden lg:flex"/>
  </section>
</template>

<style scoped>


</style>

<script>
import {defineComponent} from "vue";
import ProfilePhoto from "~/components/home/ProfilePhoto.vue";

export default defineComponent({
  components: {ProfilePhoto}
})


</script>