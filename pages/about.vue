<template>
  <section class="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div class="grid items-center grid-cols-1 md:grid-cols-2">

        <div>
          <h2 class="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl mb-0" style="color: #2D465C">Hi! I am
            <span class="hover:border-b-4 hover:border-[#01B47C] transition duration-500 ease-in-out" style="color: #01B47C">David Villeda</span>
          </h2>
          <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
            Nice to meet you. I am a passionate technology enthusiast who strives daily to improve and contribute
            significantly to this fascinating world of web development. My commitment lies in constantly exploring new
            possibilities, learning from experiences, and making my contribution to drive innovation in this exciting
            technological field.
          </p>

          <div class="mt-5 flex">
            <font-awesome-icon icon="fab fa-github"
                               class="custom-icon"
                               size="2x" role="button"></font-awesome-icon>
            <font-awesome-icon icon="fab fa-linkedin"
                               class="custom-icon"
                               size="2x" role="button"></font-awesome-icon>

            <font-awesome-icon icon="fas fa-envelope"
                               class="custom-icon"
                               size="2x" role="button"></font-awesome-icon>
          </div>
        </div>

        <div class="relative">
          <img class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
               src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt=""/>

          <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
               src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png" alt=""/>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.custom-icon {
  @apply text-[#2D465C] hover:text-[#01B47C] transition duration-300 ease-in-out transform hover:scale-110 mr-2
}
</style>