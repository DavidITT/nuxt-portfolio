<template>
  <nav v-if="!sidebarStatus" class="custom-bg-gradient fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    <div class="container flex flex-wrap items-center justify-between mx-auto p-4">
      <NuxtLink to="/home">
        <div class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="~/assets/logo/logo.png" class="h-8" alt="David Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">{{ title }}</span>
        </div>
      </NuxtLink>
      <div class="flex justify-end items-center space-x-3">
        <Language />
        <ToggleMode />
        <button type="button" class="lg:hidden inline-flex items-center p-2 justify-center text-sm text-white" @click="toggleSideBar">
          <span class="sr-only">Open sidemenu</span>
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
    </div>
  </nav>

  <SideMenu v-if="sidebarStatus" />
</template>

<script setup>
import { computed } from 'vue';
import { useNavbarStore } from "~/stores/useNavbarStore";
import { useSideBarStore } from "~/stores/useSideBarStore";
import Language from "./Language.vue";
import ToggleMode from "./ToggleMode.vue";
import SideMenu from "~/components/home/sections/components/SideMenu.vue";

const sideBarStore = useSideBarStore();
const navbarStore = useNavbarStore();

const toggleSideBar = sideBarStore.toggleSideBar;
const sidebarStatus = computed(() => sideBarStore.sidebarStatus);
const title = computed(() => navbarStore.title);
</script>

<style scoped>
.custom-bg-gradient {
  background-color: #081F33;
}
</style>