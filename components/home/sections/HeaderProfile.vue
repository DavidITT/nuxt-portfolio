<template>
  <header class="text-center lg:text-left lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 ">
    <div>
      <h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl text-[#2D465C] dark:text-white"
          id="title">
            <span class="hover:border-b-4 hover:border-[#01B47C] transition duration-500 ease-in-out text-[#01B47C]"><a
                href="/">David Villeda</a></span>
      </h1>
      <h2 class="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl mb-10" id="rol">
        <span class="text-[#9B51E0] font-bold text-xl">{{ $t("rol") }}</span>
      </h2>

      <p class="mt-4 lg:max-w-xs leading-normal dark:text-slate-300 text-center lg:text-left mb-8" id="phrase">
        {{ $t('phrase') }}
      </p>
      <ProfilePhoto class="block lg:hidden mb-10"/>
      <nav class="nav hidden lg:block" aria-label="In-page jump links">
        <ul class="mt-16 w-max">
<!--          <li v-for="link in navLinks" :key="link.id">-->
<!--            <a :class="['group flex items-center py-3', { 'active': link.id === activeLink }]" :href="link.href" :target="link.target || '_self'" @click="setActiveLink(link.id)">-->
<!--              <span :class="['nav-indicator mr-4 h-1 w-5 transition-transform duration-300 transform', { 'rotate-90 bg-emerald-500': link.id === activeLink, 'group-hover:rotate-90 group-hover:bg-emerald-500 group-focus-visible:rotate-45 group-focus-visible:bg-teal-400': true }]"></span>-->
<!--              <span :class="['nav-text text-xs font-bold uppercase tracking-widest', { 'text-emerald-500': link.id === activeLink, 'text-[#9B51E0] group-hover:text-[#01B47C] group-focus-visible:text-[#01B47C]': true }]">-->
<!--                {{ link.text }}-->
<!--              </span>-->
<!--            </a>-->
<!--          </li>-->
          <li v-for="link in navLinks" :key="link.id">
            <a
                :class="['group flex items-center py-3', { 'active': link.id === activeLink }]"
                :href="link.href"
                :target="link.target || '_self'"
                @click="handleClick(link.id, $event, link.target)"
            >
          <span
              :class="[
              'nav-indicator mr-4 h-1 w-5 transition-transform duration-300 transform',
              { 'rotate-90 bg-emerald-500': link.id === activeLink, 'group-hover:rotate-90 group-hover:bg-emerald-500 group-focus-visible:rotate-45 group-focus-visible:bg-teal-400': true }
            ]"
          ></span>
              <span
                  :class="[
              'nav-text text-xs font-bold uppercase tracking-widest',
              { 'text-emerald-500': link.id === activeLink && link.id !== 'cv', 'text-[#9B51E0] group-hover:text-[#01B47C] group-focus-visible:text-[#01B47C]': true }
            ]"
              >
            {{ link.text }}
          </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <ul class="ml-1 mt-8 flex items-center justify-center lg:justify-start" aria-label="Social media">
      <SocialLinksAndCV/>
    </ul>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { computed } from 'vue';
import { defineEmits } from 'vue';
import { useI18n } from 'vue-i18n';
import SocialLinksAndCV from "../SocialLinksAndCV.vue";
import ProfilePhoto from "../ProfilePhoto.vue";

const { locale, messages } = useI18n();
const activeLink = ref('about');
const emit = defineEmits(['update:activeSection']);

const navLinks = computed(() => {
  const currentLocale = locale.value;
  const links = messages.value[currentLocale].links;

  return Object.keys(links).map(key => ({
    id: key,
    text: extractStaticValue(links[key].text),
    href: extractStaticValue(links[key].href),
    target: links[key].target ? extractStaticValue(links[key].target) : '_self'
  }));
});

const extractStaticValue = (obj) => {
  return obj?.body?.static || obj;
}

const setActiveLink = (linkId) => {
  activeLink.value = linkId;
}

function handleClick(linkId, event, target) {

  if (target === '_blank') {
    activeLink.value = 'about';
    return;
  }
  event.preventDefault();
  activeLink.value = linkId;
  emit('update:activeSection', linkId);
}

</script>

<style scoped>

</style>