<template>
  <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
    <div class="lg:flex lg:justify-between lg:gap-4">
      <HeaderProfile  @update:activeSection="updateActiveSection"/>
      <main id="content" class="pt-24 lg:w-1/2 lg:py-24">
        <template class="hidden lg:block">
          <About v-show="activeSection === 'about'"/>
          <Experience v-show="activeSection === 'experience'"/>
          <Projects v-show="activeSection === 'projects'"/>
          <Technologies v-show="activeSection === 'technologies'"/>
          <Certificates v-show="activeSection === 'certificates'"/>
        </template>
        <template class="block lg:hidden">
          <About/>
          <Experience/>
          <Projects/>
          <Technologies/>
          <Certificates/>
        </template>
        <!--        <section id="experience" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"-->
        <!--                 aria-label="Work experience">-->
        <!--          <div-->
        <!--              class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">-->
        <!--            <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2></div>-->
        <!--          <div>-->
        <!--            <ol class="group/list">-->
        <!--              <li class="mb-12">-->
        <!--                <div-->
        <!--                    class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">-->
        <!--                  <div-->
        <!--                      class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>-->
        <!--                  <header-->
        <!--                      class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"-->
        <!--                      aria-label="2024 to Present">2024 — Present-->
        <!--                  </header>-->
        <!--                  <div class="z-10 sm:col-span-6">-->
        <!--                    <h3 class="font-medium leading-snug text-slate-200">-->
        <!--                      <div><a-->
        <!--                          class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"-->
        <!--                          href="https://www.klaviyo.com" target="_blank" rel="noreferrer noopener"-->
        <!--                          aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)"><span-->
        <!--                          class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Senior Frontend Engineer, Accessibility ·-->
        <!--                        &lt;!&ndash; &ndash;&gt; <span class="inline-block">Klaviyo<svg xmlns="http://www.w3.org/2000/svg"-->
        <!--                                                                        viewBox="0 0 20 20" fill="currentColor"-->
        <!--                                                                        class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"-->
        <!--                                                                        aria-hidden="true"><path fill-rule="evenodd"-->
        <!--                                                                                                 d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"-->
        <!--                                                                                                 clip-rule="evenodd"></path></svg></span></span></a>-->
        <!--                      </div>-->
        <!--                    </h3>-->
        <!--                    <p class="mt-2 text-sm leading-normal">Build and maintain critical components used to construct-->
        <!--                      Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams,-->
        <!--                      including developers, designers, and product managers, to implement and advocate for best-->
        <!--                      practices in web accessibility.</p>-->
        <!--                    <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          JavaScript-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          TypeScript-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          React-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          Storybook-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                    </ul>-->
        <!--                  </div>-->
        <!--                </div>-->
        <!--              </li>-->
        <!--              <li class="mb-12">-->
        <!--                <div-->
        <!--                    class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">-->
        <!--                  <div-->
        <!--                      class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>-->
        <!--                  <header-->
        <!--                      class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"-->
        <!--                      aria-label="2018 to 2024">2018 — 2024-->
        <!--                  </header>-->
        <!--                  <div class="z-10 sm:col-span-6">-->
        <!--                    <h3 class="font-medium leading-snug text-slate-200">-->
        <!--                      <div><a-->
        <!--                          class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"-->
        <!--                          href="https://upstatement.com" target="_blank" rel="noreferrer noopener"-->
        <!--                          aria-label="Lead Engineer at Upstatement (opens in a new tab)"><span-->
        <!--                          class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Lead Engineer ·-->
        <!--                        &lt;!&ndash; &ndash;&gt; <span class="inline-block">Upstatement<svg xmlns="http://www.w3.org/2000/svg"-->
        <!--                                                                            viewBox="0 0 20 20" fill="currentColor"-->
        <!--                                                                            class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"-->
        <!--                                                                            aria-hidden="true"><path-->
        <!--                            fill-rule="evenodd"-->
        <!--                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"-->
        <!--                            clip-rule="evenodd"></path></svg></span></span></a></div>-->
        <!--                      <div>-->
        <!--                        <div class="text-slate-500" aria-hidden="true">Senior Engineer</div>-->
        <!--                      </div>-->
        <!--                      <div>-->
        <!--                        <div class="text-slate-500" aria-hidden="true">Engineer</div>-->
        <!--                      </div>-->
        <!--                    </h3>-->
        <!--                    <p class="mt-2 text-sm leading-normal">Build, style, and ship high-quality websites, design-->
        <!--                      systems, mobile apps, and digital experiences for a diverse array of projects for clients-->
        <!--                      including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health,-->
        <!--                      Vanderbilt University, The 19th News, and more. Provide leadership within engineering department-->
        <!--                      through close collaboration, knowledge shares, and spearheading the development of internal-->
        <!--                      tools.</p>-->
        <!--                    <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          JavaScript-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          TypeScript-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          HTML &amp; SCSS-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          React-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          Next.js-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          React Native-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          WordPress-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          Contentful-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          Node.js-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          PHP-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                    </ul>-->
        <!--                  </div>-->
        <!--                </div>-->
        <!--              </li>-->
        <!--              <li class="mb-12">-->
        <!--                <div-->
        <!--                    class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">-->
        <!--                  <div-->
        <!--                      class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>-->
        <!--                  <header-->
        <!--                      class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"-->
        <!--                      aria-label="July to December 2017">July — Dec 2017-->
        <!--                  </header>-->
        <!--                  <div class="z-10 sm:col-span-6">-->
        <!--                    <h3 class="font-medium leading-snug text-slate-200">-->
        <!--                      <div><a-->
        <!--                          class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"-->
        <!--                          href="https://www.apple.com/apple-music/" target="_blank" rel="noreferrer noopener"-->
        <!--                          aria-label="UI Engineer Co-op at Apple (opens in a new tab)"><span-->
        <!--                          class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>UI Engineer Co-op ·-->
        <!--                        &lt;!&ndash; &ndash;&gt; <span class="inline-block">Apple<svg xmlns="http://www.w3.org/2000/svg"-->
        <!--                                                                      viewBox="0 0 20 20" fill="currentColor"-->
        <!--                                                                      class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"-->
        <!--                                                                      aria-hidden="true"><path fill-rule="evenodd"-->
        <!--                                                                                               d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"-->
        <!--                                                                                               clip-rule="evenodd"></path></svg></span></span></a>-->
        <!--                      </div>-->
        <!--                    </h3>-->
        <!--                    <p class="mt-2 text-sm leading-normal">Developed and styled interactive web apps for Apple Music,-->
        <!--                      including the user interface of Apple Music’s embeddable web player widget for in-browser user-->
        <!--                      authorization and full song playback.</p>-->
        <!--                    <ul class="mt-2 flex flex-wrap" aria-label="Related links">-->
        <!--                      <li class="mr-4"><a-->
        <!--                          class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"-->
        <!--                          href="https://developer.apple.com/documentation/musickitjs" target="_blank"-->
        <!--                          rel="noreferrer noopener" aria-label="MusicKit.js (opens in a new tab)">-->
        <!--                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"-->
        <!--                             class="mr-1 h-3 w-3" aria-hidden="true">-->
        <!--                          <path-->
        <!--                              d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>-->
        <!--                          <path-->
        <!--                              d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>-->
        <!--                        </svg>-->
        <!--                        <span>MusicKit.js</span></a></li>-->
        <!--                      <li class="mr-4"><a-->
        <!--                          class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"-->
        <!--                          href="https://9to5mac.com/2018/06/03/apple-music-embeddable-web-player-listen-browser/"-->
        <!--                          target="_blank" rel="noreferrer noopener" aria-label="9to5Mac (opens in a new tab)">-->
        <!--                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"-->
        <!--                             class="mr-1 h-3 w-3" aria-hidden="true">-->
        <!--                          <path-->
        <!--                              d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>-->
        <!--                          <path-->
        <!--                              d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>-->
        <!--                        </svg>-->
        <!--                        <span>9to5Mac</span></a></li>-->
        <!--                      <li class="mr-4"><a-->
        <!--                          class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"-->
        <!--                          href="https://www.theverge.com/2017/10/5/16433770/facebook-messenger-apple-music-bot-song-streaming"-->
        <!--                          target="_blank" rel="noreferrer noopener" aria-label="The Verge (opens in a new tab)">-->
        <!--                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"-->
        <!--                             class="mr-1 h-3 w-3" aria-hidden="true">-->
        <!--                          <path-->
        <!--                              d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>-->
        <!--                          <path-->
        <!--                              d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>-->
        <!--                        </svg>-->
        <!--                        <span>The Verge</span></a></li>-->
        <!--                    </ul>-->
        <!--                    <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          Ember-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          SCSS-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          JavaScript-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          MusicKit.js-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                    </ul>-->
        <!--                  </div>-->
        <!--                </div>-->
        <!--              </li>-->
        <!--              <li class="mb-12">-->
        <!--                <div-->
        <!--                    class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">-->
        <!--                  <div-->
        <!--                      class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>-->
        <!--                  <header-->
        <!--                      class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"-->
        <!--                      aria-label="2016 to 2017">2016 — 2017-->
        <!--                  </header>-->
        <!--                  <div class="z-10 sm:col-span-6">-->
        <!--                    <h3 class="font-medium leading-snug text-slate-200">-->
        <!--                      <div><a-->
        <!--                          class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"-->
        <!--                          href="https://scout.camd.northeastern.edu/" target="_blank" rel="noreferrer noopener"-->
        <!--                          aria-label="Developer at Scout Studio (opens in a new tab)"><span-->
        <!--                          class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Developer · Scout-->
        <!--                        &lt;!&ndash; &ndash;&gt; <span class="inline-block">Studio<svg xmlns="http://www.w3.org/2000/svg"-->
        <!--                                                                       viewBox="0 0 20 20" fill="currentColor"-->
        <!--                                                                       class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"-->
        <!--                                                                       aria-hidden="true"><path fill-rule="evenodd"-->
        <!--                                                                                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"-->
        <!--                                                                                                clip-rule="evenodd"></path></svg></span></span></a>-->
        <!--                      </div>-->
        <!--                    </h3>-->
        <!--                    <p class="mt-2 text-sm leading-normal">Collaborated with other student designers and engineers on-->
        <!--                      pro-bono projects to create new brands, design systems, and websites for organizations in the-->
        <!--                      community.</p>-->
        <!--                    <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          Jekyll-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          SCSS-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          JavaScript-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          WordPress-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                    </ul>-->
        <!--                  </div>-->
        <!--                </div>-->
        <!--              </li>-->
        <!--              <li class="mb-12">-->
        <!--                <div-->
        <!--                    class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">-->
        <!--                  <div-->
        <!--                      class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>-->
        <!--                  <header-->
        <!--                      class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"-->
        <!--                      aria-label="July to December 2016">July — Dec 2016-->
        <!--                  </header>-->
        <!--                  <div class="z-10 sm:col-span-6">-->
        <!--                    <h3 class="font-medium leading-snug text-slate-200">-->
        <!--                      <div><a-->
        <!--                          class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"-->
        <!--                          href="https://starry.com/" target="_blank" rel="noreferrer noopener"-->
        <!--                          aria-label="Software Engineer Co-op at Starry (opens in a new tab)"><span-->
        <!--                          class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Software Engineer Co-op ·-->
        <!--                        &lt;!&ndash; &ndash;&gt; <span class="inline-block">Starry<svg xmlns="http://www.w3.org/2000/svg"-->
        <!--                                                                       viewBox="0 0 20 20" fill="currentColor"-->
        <!--                                                                       class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"-->
        <!--                                                                       aria-hidden="true"><path fill-rule="evenodd"-->
        <!--                                                                                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"-->
        <!--                                                                                                clip-rule="evenodd"></path></svg></span></span></a>-->
        <!--                      </div>-->
        <!--                    </h3>-->
        <!--                    <p class="mt-2 text-sm leading-normal">Worked with the UI team to engineer and improve major-->
        <!--                      features of Starry’s customer-facing Android app.</p>-->
        <!--                    <ul class="mt-2 flex flex-wrap" aria-label="Related links">-->
        <!--                      <li class="mr-4"><a-->
        <!--                          class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"-->
        <!--                          href="https://play.google.com/store/apps/details?id=com.starry.management&amp;hl=en_US&amp;gl=US"-->
        <!--                          target="_blank" rel="noreferrer noopener" aria-label="Android App (opens in a new tab)">-->
        <!--                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"-->
        <!--                             class="mr-1 h-3 w-3" aria-hidden="true">-->
        <!--                          <path-->
        <!--                              d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>-->
        <!--                          <path-->
        <!--                              d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>-->
        <!--                        </svg>-->
        <!--                        <span>Android App</span></a></li>-->
        <!--                      <li class="mr-4"><a-->
        <!--                          class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"-->
        <!--                          href="https://starry.com/blog/product/whats-new-screentime-just-got-better-for-parents"-->
        <!--                          target="_blank" rel="noreferrer noopener" aria-label="ScreenTime 2.0 (opens in a new tab)">-->
        <!--                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"-->
        <!--                             class="mr-1 h-3 w-3" aria-hidden="true">-->
        <!--                          <path-->
        <!--                              d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>-->
        <!--                          <path-->
        <!--                              d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>-->
        <!--                        </svg>-->
        <!--                        <span>ScreenTime 2.0</span></a></li>-->
        <!--                    </ul>-->
        <!--                    <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          Cordova-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          Backbone-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          JavaScript-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          CSS-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                    </ul>-->
        <!--                  </div>-->
        <!--                </div>-->
        <!--              </li>-->
        <!--              <li class="mb-12">-->
        <!--                <div-->
        <!--                    class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">-->
        <!--                  <div-->
        <!--                      class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>-->
        <!--                  <header-->
        <!--                      class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"-->
        <!--                      aria-label="July to December 2015">July — Dec 2015-->
        <!--                  </header>-->
        <!--                  <div class="z-10 sm:col-span-6">-->
        <!--                    <h3 class="font-medium leading-snug text-slate-200">-->
        <!--                      <div><a-->
        <!--                          class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"-->
        <!--                          href="https://us.mullenlowe.com/" target="_blank" rel="noreferrer noopener"-->
        <!--                          aria-label="Creative Technologist Co-op at MullenLowe U.S. (opens in a new tab)"><span-->
        <!--                          class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Creative Technologist Co-op · MullenLowe-->
        <!--                        &lt;!&ndash; &ndash;&gt; <span class="inline-block">U.S.<svg xmlns="http://www.w3.org/2000/svg"-->
        <!--                                                                     viewBox="0 0 20 20" fill="currentColor"-->
        <!--                                                                     class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"-->
        <!--                                                                     aria-hidden="true"><path fill-rule="evenodd"-->
        <!--                                                                                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"-->
        <!--                                                                                              clip-rule="evenodd"></path></svg></span></span></a>-->
        <!--                      </div>-->
        <!--                    </h3>-->
        <!--                    <p class="mt-2 text-sm leading-normal">Developed, maintained, and shipped production code for-->
        <!--                      client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense,-->
        <!--                      and more.</p>-->
        <!--                    <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          HTML-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          CSS-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          JavaScript-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          jQuery-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                    </ul>-->
        <!--                  </div>-->
        <!--                </div>-->
        <!--              </li>-->
        <!--            </ol>-->
        <!--            <div class="mt-12"><a-->
        <!--                class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"-->
        <!--                href="/resume.pdf" target="_blank" rel="noreferrer noopener"-->
        <!--                aria-label="View Full Résumé (opens in a new tab)"><span>View Full&lt;!&ndash; &ndash;&gt; <span class="inline-block">Résumé<svg-->
        <!--                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"-->
        <!--                class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"-->
        <!--                aria-hidden="true"><path fill-rule="evenodd"-->
        <!--                                         d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"-->
        <!--                                         clip-rule="evenodd"></path></svg></span></span></a></div>-->
        <!--          </div>-->
        <!--        </section>-->
        <!--        <section id="projects" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"-->
        <!--                 aria-label="Selected projects">-->
        <!--          <div-->
        <!--              class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">-->
        <!--            <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2></div>-->
        <!--          <div>-->
        <!--            <ul class="group/list">-->
        <!--              <li class="mb-12">-->
        <!--                <div-->
        <!--                    class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">-->
        <!--                  <div-->
        <!--                      class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>-->
        <!--                  <div class="z-10 sm:order-2 sm:col-span-6">-->
        <!--                    <h3><a-->
        <!--                        class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"-->
        <!--                        href="https://www.newline.co/courses/build-a-spotify-connected-app" target="_blank"-->
        <!--                        rel="noreferrer noopener"-->
        <!--                        aria-label="Build a Spotify Connected App (opens in a new tab)"><span-->
        <!--                        class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Build a Spotify Connected-->
        <!--                      &lt;!&ndash; &ndash;&gt; <span class="inline-block">App<svg xmlns="http://www.w3.org/2000/svg"-->
        <!--                                                                  viewBox="0 0 20 20" fill="currentColor"-->
        <!--                                                                  class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"-->
        <!--                                                                  aria-hidden="true"><path fill-rule="evenodd"-->
        <!--                                                                                           d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"-->
        <!--                                                                                           clip-rule="evenodd"></path></svg></span></span></a>-->
        <!--                    </h3>-->
        <!--                    <p class="mt-2 text-sm leading-normal">Video course that teaches how to build a web app with the-->
        <!--                      Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node,-->
        <!--                      Express, React, Styled Components, and more.</p></div>-->
        <!--                  <img alt="Build a Spotify Connected App Newline course marketing card" loading="lazy" width="200"-->
        <!--                       height="48" decoding="async" data-nimg="1"-->
        <!--                       class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"-->
        <!--                       style="color:transparent"-->
        <!--                  ></div>-->
        <!--              </li>-->
        <!--              <li class="mb-12">-->
        <!--                <div-->
        <!--                    class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">-->
        <!--                  <div-->
        <!--                      class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>-->
        <!--                  <div class="z-10 sm:order-2 sm:col-span-6">-->
        <!--                    <h3><a-->
        <!--                        class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"-->
        <!--                        href="https://spotify-profile.herokuapp.com/" target="_blank" rel="noreferrer noopener"-->
        <!--                        aria-label="Spotify Profile (opens in a new tab)"><span-->
        <!--                        class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Spotify-->
        <!--                      &lt;!&ndash; &ndash;&gt; <span class="inline-block">Profile<svg xmlns="http://www.w3.org/2000/svg"-->
        <!--                                                                      viewBox="0 0 20 20" fill="currentColor"-->
        <!--                                                                      class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"-->
        <!--                                                                      aria-hidden="true"><path fill-rule="evenodd"-->
        <!--                                                                                               d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"-->
        <!--                                                                                               clip-rule="evenodd"></path></svg></span></span></a>-->
        <!--                    </h3>-->
        <!--                    <p class="mt-2 text-sm leading-normal">Web app for visualizing personalized Spotify data. View-->
        <!--                      your top artists, top tracks, recently played tracks, and detailed audio information about each-->
        <!--                      track. Create and save new playlists of recommended tracks based on your existing playlists and-->
        <!--                      more.</p><a-->
        <!--                      class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"-->
        <!--                      href="https://github.com/bchiang7/spotify-profile" target="_blank" rel="noreferrer noopener"-->
        <!--                      aria-label="625 stars on GitHub (opens in a new tab)">-->
        <!--                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"-->
        <!--                         class="mr-1 h-3 w-3" aria-hidden="true">-->
        <!--                      <path fill-rule="evenodd"-->
        <!--                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"-->
        <!--                            clip-rule="evenodd"></path>-->
        <!--                    </svg>-->
        <!--                    <span>625</span></a>-->
        <!--                    <ul class="mt-2 flex flex-wrap" aria-label="Technologies used:">-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          React-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          Express-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          Spotify API-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          Heroku-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                    </ul>-->
        <!--                  </div>-->
        <!--                  <img alt="Spotify Profile app homepage" loading="lazy" width="200" height="48" decoding="async"-->
        <!--                       data-nimg="1"-->
        <!--                       class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"-->
        <!--                       style="color:transparent"-->
        <!--                  ></div>-->
        <!--              </li>-->
        <!--              <li class="mb-12">-->
        <!--                <div-->
        <!--                    class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">-->
        <!--                  <div-->
        <!--                      class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>-->
        <!--                  <div class="z-10 sm:order-2 sm:col-span-6">-->
        <!--                    <h3><a-->
        <!--                        class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"-->
        <!--                        href="https://halcyon-theme.netlify.app/" target="_blank" rel="noreferrer noopener"-->
        <!--                        aria-label="Halcyon Theme (opens in a new tab)"><span-->
        <!--                        class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Halcyon-->
        <!--                      &lt;!&ndash; &ndash;&gt; <span class="inline-block">Theme<svg xmlns="http://www.w3.org/2000/svg"-->
        <!--                                                                    viewBox="0 0 20 20" fill="currentColor"-->
        <!--                                                                    class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"-->
        <!--                                                                    aria-hidden="true"><path fill-rule="evenodd"-->
        <!--                                                                                             d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"-->
        <!--                                                                                             clip-rule="evenodd"></path></svg></span></span></a>-->
        <!--                    </h3>-->
        <!--                    <p class="mt-2 text-sm leading-normal">Minimal dark blue theme for VS Code, Sublime Text, Atom,-->
        <!--                      iTerm, and more.</p><a-->
        <!--                      class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"-->
        <!--                      href="https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode"-->
        <!--                      target="_blank" rel="noreferrer noopener"-->
        <!--                      aria-label="Over 100,000 installs on Visual Studio Code Marketplace (opens in a new tab)">-->
        <!--                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"-->
        <!--                         class="mr-1 h-4 w-4" aria-hidden="true">-->
        <!--                      <path-->
        <!--                          d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"></path>-->
        <!--                      <path-->
        <!--                          d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"></path>-->
        <!--                    </svg>-->
        <!--                    <span>100k+ Installs</span></a></div>-->
        <!--                  <img alt="Halcyon Theme homepage hero with screenshot of VS Code editor" loading="lazy" width="200"-->
        <!--                       height="48" decoding="async" data-nimg="1"-->
        <!--                       class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"-->
        <!--                       style="color:transparent"-->
        <!--                  ></div>-->
        <!--              </li>-->
        <!--              <li class="mb-12">-->
        <!--                <div-->
        <!--                    class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">-->
        <!--                  <div-->
        <!--                      class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>-->
        <!--                  <div class="z-10 sm:order-2 sm:col-span-6">-->
        <!--                    <h3><a-->
        <!--                        class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"-->
        <!--                        href="https://v4.brittanychiang.com/" target="_blank" rel="noreferrer noopener"-->
        <!--                        aria-label="brittanychiang.com (v4) (opens in a new tab)"><span-->
        <!--                        class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>brittanychiang.com-->
        <!--                      &lt;!&ndash; &ndash;&gt; <span class="inline-block">(v4)<svg xmlns="http://www.w3.org/2000/svg"-->
        <!--                                                                   viewBox="0 0 20 20" fill="currentColor"-->
        <!--                                                                   class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"-->
        <!--                                                                   aria-hidden="true"><path fill-rule="evenodd"-->
        <!--                                                                                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"-->
        <!--                                                                                            clip-rule="evenodd"></path></svg></span></span></a>-->
        <!--                    </h3>-->
        <!--                    <p class="mt-2 text-sm leading-normal">An old portfolio site built with Gatsby with 6k+ stars and-->
        <!--                      3k+ forks</p><a-->
        <!--                      class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"-->
        <!--                      href="https://github.com/bchiang7/v4" target="_blank" rel="noreferrer noopener"-->
        <!--                      aria-label="7269 stars on GitHub (opens in a new tab)">-->
        <!--                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"-->
        <!--                         class="mr-1 h-3 w-3" aria-hidden="true">-->
        <!--                      <path fill-rule="evenodd"-->
        <!--                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"-->
        <!--                            clip-rule="evenodd"></path>-->
        <!--                    </svg>-->
        <!--                    <span>7,269</span></a>-->
        <!--                    <ul class="mt-2 flex flex-wrap" aria-label="Technologies used:">-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          Gatsby-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          Styled Components-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                      <li class="mr-1.5 mt-2">-->
        <!--                        <div-->
        <!--                            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">-->
        <!--                          Netlify-->
        <!--                        </div>-->
        <!--                      </li>-->
        <!--                    </ul>-->
        <!--                  </div>-->
        <!--                  <img alt="brittanychiang.com version 4 hero section" loading="lazy" width="200" height="48"-->
        <!--                       decoding="async" data-nimg="1"-->
        <!--                       class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"-->
        <!--                       style="color:transparent"-->
        <!--                  ></div>-->
        <!--              </li>-->
        <!--            </ul>-->
        <!--            <div class="mt-12"><a-->
        <!--                class="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"-->
        <!--                aria-label="View Full Project Archive" href="/archive"><span><span-->
        <!--                class="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">View Full Project-->
        <!--              &lt;!&ndash; &ndash;&gt; </span><span class="whitespace-nowrap"><span-->
        <!--                class="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">Archive</span><svg-->
        <!--                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"-->
        <!--                class="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"-->
        <!--                aria-hidden="true"><path fill-rule="evenodd"-->
        <!--                                         d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"-->
        <!--                                         clip-rule="evenodd"></path></svg></span></span></a></div>-->
        <!--          </div>-->
        <!--        </section>-->
        <!--        <section id="writing" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Blog posts">-->
        <!--          <div-->
        <!--              class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">-->
        <!--            <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Writing</h2></div>-->
        <!--          <div>-->
        <!--            <ul class="group/list">-->
        <!--              <li class="mb-12">-->
        <!--                <div-->
        <!--                    class="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">-->
        <!--                  <div-->
        <!--                      class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>-->
        <!--                  <img alt="Telescope" loading="lazy" width="200" height="48" decoding="async" data-nimg="1"-->
        <!--                       class="z-10 col-span-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2"-->
        <!--                       style="color:transparent"-->
        <!--                  >-->
        <!--                  <div class="z-10 col-span-6"><p class="-mt-1 text-sm font-semibold leading-6">2020</p>-->
        <!--                    <h3 class="-mt-1"><a-->
        <!--                        class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"-->
        <!--                        href="https://upstatement.com/blog/integrating-algolia-search-with-wordpress-multisite/"-->
        <!--                        target="_blank" rel="noreferrer noopener"-->
        <!--                        aria-label="Integrating Algolia Search with WordPress Multisite (opens in a new tab)"><span-->
        <!--                        class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Integrating Algolia Search with WordPress-->
        <!--                      &lt;!&ndash; &ndash;&gt; <span class="inline-block">Multisite<svg xmlns="http://www.w3.org/2000/svg"-->
        <!--                                                                        viewBox="0 0 20 20" fill="currentColor"-->
        <!--                                                                        class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"-->
        <!--                                                                        aria-hidden="true"><path fill-rule="evenodd"-->
        <!--                                                                                                 d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"-->
        <!--                                                                                                 clip-rule="evenodd"></path></svg></span></span></a>-->
        <!--                    </h3>-->
        <!--                  </div>-->
        <!--                </div>-->
        <!--              </li>-->
        <!--              <li class="mb-12">-->
        <!--                <div-->
        <!--                    class="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">-->
        <!--                  <div-->
        <!--                      class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>-->
        <!--                  <img alt="Headless horseamn" loading="lazy" width="200" height="48" decoding="async" data-nimg="1"-->
        <!--                       class="z-10 col-span-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2"-->
        <!--                       style="color:transparent">-->
        <!--                  <div class="z-10 col-span-6"><p class="-mt-1 text-sm font-semibold leading-6">2019</p>-->
        <!--                    <h3 class="-mt-1"><a-->
        <!--                        class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"-->
        <!--                        href="https://upstatement.com/blog/building-a-headless-mobile-app-cms-from-scratch/"-->
        <!--                        target="_blank" rel="noreferrer noopener"-->
        <!--                        aria-label="Building a Headless Mobile App CMS From Scratch (opens in a new tab)"><span-->
        <!--                        class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Building a Headless Mobile App CMS From-->
        <!--                      &lt;!&ndash; &ndash;&gt; <span class="inline-block">Scratch<svg xmlns="http://www.w3.org/2000/svg"-->
        <!--                                                                      viewBox="0 0 20 20" fill="currentColor"-->
        <!--                                                                      class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"-->
        <!--                                                                      aria-hidden="true"><path fill-rule="evenodd"-->
        <!--                                                                                               d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"-->
        <!--                                                                                               clip-rule="evenodd"></path></svg></span></span></a>-->
        <!--                    </h3>-->
        <!--                  </div>-->
        <!--                </div>-->
        <!--              </li>-->
        <!--            </ul>-->
        <!--          </div>-->
        <!--        </section>-->
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
