<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <NuxtLink to="/home">
        <div class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="~/assets/logo/logo.png" class="h-8" alt="David Logo"/>
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-[#2D465C] dark:text-white">David Villeda</span>
        </div>
      </NuxtLink>
      <div class="flex justify-end items-center space-x-2">
        <!--Small devices-->
        <Language class="block md:hidden"/>
        <ToggleMode class="block md:hidden"/>
        <!-- /Small devices-->
        <button data-collapse-toggle="navbar-default" type="button"
                class="inline-flex items-center p-2 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-row md:space-x-3 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 items-center	">
          <li class="hidden md:block">
            <Language/>
          </li>
          <li class="hidden md:block">
            <ToggleMode/>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import Language from "./Language.vue";

export default {
  components: {Language}
}
</script>