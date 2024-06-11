<template>
  <h4 class="font-bold uppercase text-xs md:text-sm lg:text-lg mt-10 text-gray-400 dark:text-stone-300 mb-10">
    {{ $t('skills.version-control') }}</h4>
  <div
      class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-5 text-neutral-600 dark:text-slate-300">
    <div
        class="flex flex-col items-center justify-center space-y-2 hover:text-[#01B47C] cursor-pointer hover:translate-y-[-5px] transition-all duration-500">
      <font-awesome-icon :icon="['fab', 'github']" size="2xl" />
      <h3 class="text-sm font-semibold">GitHub</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "VersionControlSkills"
}
</script>

<style scoped>

</style>