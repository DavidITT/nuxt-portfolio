<template>
  <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-10 lg:py-0">
    <div class="lg:flex lg:justify-between lg:gap-4">
      <HeaderProfile  @update:activeSection="updateActiveSection"/>
      <main id="content" class="pt-24 lg:w-1/2 lg:py-24">
        <div class="hidden lg:block">
          <About v-if="activeSection === 'about'"/>
          <Experience v-if="activeSection === 'experience'"/>
          <Projects v-if="activeSection === 'projects'"/>
          <Technologies v-if="activeSection === 'technologies'"/>
          <Certificates v-if="activeSection === 'certificates'"/>
        </div>
        <div class="block lg:hidden">
          <About/>
          <Experience/>
          <Projects/>
          <Technologies/>
          <Certificates/>
        </div>
        <footer class="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
        </footer>
      </main>
    </div>
  </div>
</template>
<script setup>
import About from "../components/home/sections/About.vue";
import HeaderProfile from "../components/home/sections/HeaderProfile.vue";
import Experience from "../components/home/sections/Experience.vue";
import Projects from "../components/home/sections/Projects.vue";
import Technologies from "../components/home/sections/Technologies.vue";
import Certificates from "../components/home/sections/Certificates.vue";

definePageMeta({
  layout: 'main'
})

const {locale} = useI18n()

const activeSection = ref('about');

const updateActiveSection = (section) => {
  activeSection.value = section;
}

</script>
