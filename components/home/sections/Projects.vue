<template>
  <section id="projects" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Projects">
    <div class=" -mx-6 mb-4 w-screen  bg-slate-200 dark:bg-slate-900/75 dark:lg:bg-transparent lg:bg-transparent px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 ">
      <h2 class="text-sm lg:text-xl font-bold uppercase tracking-widest text-[#9B51E0]">{{
          $t('links.works.text')
        }}</h2>
    </div>
    <div class="mt-10">
     <ProjectsList/>
    </div>
  </section>
</template>


<script>
import ProjectsList from "~/components/projects/ProjectsList.vue";

export default {
  name: "Projects",
  components: {ProjectsList}
}
</script>

<style scoped>

</style>