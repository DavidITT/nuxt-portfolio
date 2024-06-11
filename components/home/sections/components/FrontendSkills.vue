<template>
  <h4 class="font-bold uppercase text-xs md:text-sm lg:text-lg mt-10 text-gray-400 dark:text-stone-300 mb-10">
    Frontend</h4>
  <div
      class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-5 text-neutral-600 dark:text-slate-300">
    <div
        class="flex flex-col items-center justify-center space-y-2 hover:text-[#01B47C] cursor-pointer hover:translate-y-[-5px] transition-all duration-500">
      <font-awesome-icon :icon="['fab', 'html5']" size="2xl"/>
      <h3 class="text-sm font-semibold">HTML</h3>
    </div>
    <div
        class="flex flex-col items-center justify-center space-y-2 hover:text-[#01B47C] cursor-pointer hover:translate-y-[-5px] transition-all duration-500">
      <font-awesome-icon :icon="['fab', 'css3']" size="2xl"/>
      <h3 class="text-sm font-semibold">CSS</h3>
    </div>
    <div
        class="flex flex-col items-center justify-center space-y-2 hover:text-[#01B47C] cursor-pointer hover:translate-y-[-5px] transition-all duration-500">
      <font-awesome-icon :icon="['fab', 'js']" size="2xl"/>
      <h3 class="text-sm font-semibold">JS</h3>
    </div>
    <div class="flex flex-col items-center justify-center space-y-2 hover:text-[#01B47C] cursor-pointer hover:translate-y-[-5px] transition-all duration-500">
      <svg width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve">
              <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"/>
           </svg>
      <h3 class="text-sm font-semibold">Tailwind CSS</h3>
    </div>
    <div
        class="flex flex-col items-center justify-center space-y-2 hover:text-[#01B47C] cursor-pointer hover:translate-y-[-5px] transition-all duration-500">
      <font-awesome-icon :icon="['fab', 'bootstrap']" size="2xl"/>
      <h3 class="text-sm font-semibold">Bootstrap</h3>
    </div>
    <div
        class="flex flex-col items-center justify-center space-y-2 hover:text-[#01B47C] cursor-pointer hover:translate-y-[-5px] transition-all duration-500">
      <font-awesome-icon :icon="['fab', 'less']" size="2xl"/>
      <h3 class="text-sm font-semibold">Less</h3>
    </div>
    <div
        class="flex flex-col items-center justify-center space-y-2 hover:text-[#01B47C] cursor-pointer hover:translate-y-[-5px] transition-all duration-500">
      <font-awesome-icon :icon="['fab', 'sass']" size="2xl"/>
      <h3 class="text-sm font-semibold">Sass</h3>
    </div>
    <div
        class="flex flex-col items-center justify-center space-y-2 hover:text-[#01B47C] cursor-pointer hover:translate-y-[-5px] transition-all duration-500">
      <font-awesome-icon :icon="['fab', 'vuejs']" size="2xl"/>
      <h3 class="text-sm font-semibold">Vue JS 2, 3</h3>
    </div>
    <div
        class="flex flex-col items-center justify-center space-y-2 hover:text-[#01B47C] cursor-pointer hover:translate-y-[-5px] transition-all duration-500">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 1 2000 2000" width="32px" height="32px">
        <path fill="none"
              d="M1112 2001H1V1h2000v2000h-889m38.237-1447.99c-.77 1.18-1.664 2.297-2.291 3.549-47.945 95.745-95.869 191.501-143.798 287.255-1.01 2.02-2.064 4.017-3.31 6.438-1.173-2.489-2.015-4.373-2.938-6.218-47.63-95.214-95.26-190.428-142.941-285.616-1.003-2.002-2.587-3.713-3.915-6.327-.823-2.322-1.412-4.762-2.505-6.95-48.156-96.41-96.376-192.788-144.48-289.224-1.774-3.554-3.707-5.019-7.853-5.016-146.473.119-292.945.099-439.418.11-1.747 0-3.495.165-5.95.288 1.239 2.598 2.116 4.52 3.06 6.41C369.14 488.218 484.395 718.722 599.62 949.24c8.607 17.219 17.02 34.535 25.386 52.532-.2.446-.386.9-.604 1.337-118.775 237.509-237.554 475.015-356.322 712.526-5.763 11.525-11.43 23.098-17.494 35.364h5.519c146.984 0 293.967-.015 440.951.093 3.53.003 5.117-1.215 6.608-4.211a373750.621 373750.621 0 0 1 170.568-342.434c12.85-25.765 25.993-51.385 38.913-77.116 14.678-29.233 29.246-58.521 43.882-87.775 13.615-27.213 27.254-54.413 40.892-81.614.854-1.703 1.792-3.364 3.03-5.678 1.14 2.012 1.98 3.347 2.68 4.752 49.488 99.11 98.926 198.246 148.454 297.336 48.778 97.592 97.657 195.134 146.42 292.733 1.395 2.791 2.79 4.019 6.203 4.016 147.15-.118 294.3-.101 441.45-.114 1.556 0 3.112-.182 5.074-.305-1.013-2.157-1.734-3.78-2.527-5.365-115.395-230.771-230.8-461.537-346.183-692.314-8.637-17.276-17.112-34.633-25.502-52.67.844-1.806 1.646-3.63 2.537-5.412 122.949-245.925 245.904-491.847 368.85-737.773.863-1.724 1.606-3.508 2.807-6.149h-141.096c-101.302 0-202.605.028-303.907-.096-4.231-.005-6.393 1.218-8.319 5.08-48.363 97.034-96.88 193.99-145.316 290.988-.887 1.777-1.107 3.886-2.337 6.038z"/>
        <path fill="currentColor"
              d="M1376.859 1001.051c8.55 17.32 17.024 34.677 25.661 51.953 115.383 230.777 230.788 461.543 346.183 692.314.793 1.586 1.514 3.208 2.527 5.365-1.962.123-3.518.305-5.073.305-147.15.013-294.301-.004-441.451.114-3.414.003-4.808-1.225-6.203-4.016-48.763-97.6-97.642-195.14-146.42-292.733-49.528-99.09-98.966-198.226-148.453-297.336-.702-1.405-1.541-2.74-2.681-4.752-1.238 2.314-2.176 3.975-3.03 5.678-13.638 27.2-27.277 54.401-40.892 81.614-14.636 29.254-29.204 58.542-43.882 87.775-12.92 25.731-26.062 51.35-38.913 77.116a373750.621 373750.621 0 0 0-170.568 342.434c-1.491 2.996-3.079 4.214-6.608 4.211-146.984-.108-293.967-.093-440.951-.093h-5.52c6.066-12.266 11.732-23.84 17.495-35.364 118.768-237.511 237.547-475.017 356.322-712.526.218-.437.403-.89.962-1.873 1.434-2.402 2.609-4.219 3.57-6.142 72.7-145.364 145.38-290.738 218.1-436.092 1.089-2.175 2.673-4.102 4.026-6.144 1.312 1.846 2.896 3.557 3.899 5.559 47.68 95.188 95.311 190.402 142.941 285.616.923 1.845 1.765 3.73 2.938 6.218 1.246-2.42 2.3-4.419 3.31-6.438 47.929-95.754 95.853-191.51 143.798-287.255.627-1.252 1.521-2.37 2.955-3.486 1.833 2.064 3.117 4.007 4.151 6.074 72.635 145.215 145.246 290.442 217.893 435.65 1.095 2.19 2.6 4.174 3.914 6.254z"/>
        <path fill="currentColor"
              d="M1376.938 1000.692c-1.393-1.72-2.898-3.705-3.993-5.894-72.647-145.21-145.258-290.436-217.893-435.65-1.034-2.068-2.318-4.01-3.801-6.174.216-2.116.436-4.225 1.323-6.002 48.436-96.997 96.953-193.954 145.316-290.987 1.926-3.863 4.088-5.086 8.319-5.08 101.302.123 202.605.095 303.907.095h141.096c-1.201 2.641-1.944 4.425-2.806 6.15-122.947 245.925-245.902 491.847-368.85 737.772-.892 1.781-1.694 3.606-2.618 5.77zM851.052 552.475c-1.345 2.426-2.93 4.353-4.017 6.528-72.721 145.354-145.4 290.728-218.1 436.092-.962 1.923-2.137 3.74-3.502 5.78-8.793-17.099-17.206-34.415-25.813-51.634-115.226-230.518-230.48-461.023-345.721-691.533-.945-1.889-1.822-3.81-3.061-6.41 2.455-.122 4.203-.287 5.95-.287 146.473-.011 292.945.009 439.418-.11 4.146-.003 6.08 1.462 7.852 5.016 48.105 96.436 96.325 192.814 144.481 289.224 1.093 2.188 1.682 4.628 2.513 7.334z"/>
      </svg>
      <h3 class="text-sm font-semibold">Vuex</h3>
    </div>
    <div
        class="flex flex-col items-center justify-center space-y-2 hover:text-[#01B47C] cursor-pointer hover:translate-y-[-5px] transition-all duration-500">
      <svg height="32px" viewBox="-.65894164 8.03694707 65.54579331 48.12892285" width="32px"
           xmlns="http://www.w3.org/2000/svg">
        <g stroke-width=".5">
          <path d="m19.455 54.151a2.378 2.378 0 0 1 -.127-.26 3.334 3.334 0 0 1 -.226-1.88h-15.13l22.485-39.57 7.382 12.977 2.14-3.787-6.435-11.336a3.933 3.933 0 0 0 -3.14-2.074 3.496 3.496 0 0 0 -3.048 2.1l-22.779 40.05a4.028 4.028 0 0 0 -.2 3.78 3.505 3.505 0 0 0 3.334 1.608h19.079a3.496 3.496 0 0 1 -3.334-1.608z"
                fill="currentColor"/>
          <path d="m63.319 50.37-18.719-32.973a3.943 3.943 0 0 0 -3.154-2.1 3.486 3.486 0 0 0 -3.046 2.093l-2.421 4.24 2.154 3.788 3.333-5.901 18.519 32.493h-7.042a3.153 3.153 0 0 1 -.147 1.6 2.029 2.029 0 0 1 -.147.327l-.06.12a4.03 4.03 0 0 1 -3.394 1.7h11.016a4.024 4.024 0 0 0 3.394-1.7 3.497 3.497 0 0 0 -.286-3.687z"
                fill="currentColor"/>
          <path d="m52.59 54.058.06-.12a2.029 2.029 0 0 0 .146-.327 3.153 3.153 0 0 0 .147-1.6 4.873 4.873 0 0 0 -.614-1.64l-14.182-24.953-2.167-3.787-2.154 3.787-14.177 24.953a5.052 5.052 0 0 0 -.547 1.64 3.334 3.334 0 0 0 .207 1.881 2.354 2.354 0 0 0 .127.26 3.505 3.505 0 0 0 3.334 1.607h26.405a4.04 4.04 0 0 0 3.414-1.7zm-16.611-24.852 12.963 22.804h-25.92z"
                fill="currentColor"/>
        </g>
      </svg>
      <h3 class="text-sm font-semibold">Nuxt</h3>
    </div>
    <div
        class="flex flex-col items-center justify-center space-y-2 hover:text-[#01B47C] cursor-pointer hover:translate-y-[-5px] transition-all duration-500">
      <svg fill="none" height="32px" width="32px" xmlns="http://www.w3.org/2000/svg" viewBox="27 26 173.23 174.94">
        <g fill-rule="evenodd" clip-rule="evenodd" stroke="currentColor" stroke-width="6" stroke-miterlimit="10"
           stroke-linejoin="round">
          <path d="M70.213 200.94L27 26l173.23 49.874z"/>
          <path d="M113.583 50.942l21.591 87.496-86.567-24.945z"/>
          <path d="M92.103 125.36L81.379 81.895l43.008 12.346zM70.651 38.483l10.724 43.465-43.008-12.346zM156.663 63.26l10.724 43.465-43.008-12.346zM92.108 125.39l10.724 43.465-43.008-12.346z"/>
        </g>
      </svg>
      <h3 class="text-sm font-semibold">Three.js</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "FrontendSkills"
}
</script>

<style scoped>

</style>