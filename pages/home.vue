<template>
  <div class="h-screen container mx-auto">
    <section class="overflow-hidden p-2 md:p-5  2xl:pt-16">
      <div class="p-4 mx-auto lg:py-18 lg:px-10 max-w-7xl rounded-lg border-4 border-[#42B883]">
        <div class="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h2 class="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl mt-5 mb-5 md:mb-0 md:mt-0 text-[#2D465C]"
                id="title">Hi! I am
              <span class="hover:border-b-4 hover:border-[#01B47C] transition duration-500 ease-in-out text-[#01B47C]">David Villeda</span>
            </h2>
            <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8 mb-6" id="description">
              Nice to meet you. I am a passionate technology enthusiast who strives daily to improve and contribute
              significantly to this fascinating world of web development. My commitment lies in constantly exploring new
              possibilities, learning from experiences, and making my contribution to drive innovation in this exciting
              technological field.
            </p>

            <div class="mt-5 flex">
              <font-awesome-icon icon="fab fa-github"
                                 id="github-icon"
                                 class="custom-icon"
                                 size="2x" role="button"></font-awesome-icon>
              <font-awesome-icon icon="fab fa-linkedin"
                                 id="linkedin-icon"
                                 class="custom-icon"
                                 size="2x" role="button"></font-awesome-icon>
              <font-awesome-icon icon="fas fa-envelope"
                                 id="email-icon"
                                 class="custom-icon"
                                 size="2x" role="button"></font-awesome-icon>
            </div>
          </div>

          <div class="relative">
            <div class="absolute inset-x-0 bottom-0 pt-10 -translate-x-1/2 left-1/2 w-100 blob-shape" id="shape"/>
            <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                 src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png" id="photo" alt=""/>
          </div>
        </div>
      </div>
    </section>

    <!--        <h2 class="text-white font-exo text-5xl mb-7 opacity-0" ref="title" id="title">My work</h2>-->
    <!--        <div class="flex space-x-4">-->
    <!--          <div v-for="project in projects" class="w-full opacity-0" ref="projects" id="projects">-->
    <!--            <nuxt-link to="/">-->
    <!--              <img :src="project.image.url" class="object-cover transition duration-300 ease-in-out transform hover:translate-y-[-20px] mb-5" alt="">-->
    <!--              <p class="text-white text-center font-space-mon text-sm">{{ project.title }}</p>-->
    <!--            </nuxt-link>-->
    <!--          </div>-->
    <!--        </div>-->
  </div>
</template>

<script setup>
import gsap from 'gsap'

onMounted(() => {


  gsap.fromTo("#title",
      {x: 50, opacity: 0},
      {x: 0, opacity: 1, duration: 1, ease: 'Power1.easeInOut'});

  gsap.fromTo("#description",
      {opacity: 0},
      {opacity: 1, ease: 'Power1.easeInOut', duration: 3});

  gsap.fromTo("#github-icon",
      { opacity: 0, scale: 1.2 },
      {
        opacity: 1,
        scale: 1,
        ease: 'Power1.easeOutIn',
        delay: 0.1,
        onComplete: () => {
          gsap.to("#github-icon", {
            scale: .6,
            duration: 0.4,
            yoyo: true,
            repeat: 1,
            ease: 'Power1.easeInOut'
          });
        }
      }
  );

  gsap.fromTo("#linkedin-icon",
      { opacity: 0, scale: 1.2 },
      {
        opacity: 1,
        scale: 1,
        ease: 'Power1.easeOutIn',
        delay: 0.5,
        onComplete: () => {
          gsap.to("#linkedin-icon", {
            scale: .6,
            duration: 0.4,
            yoyo: true,
            repeat: 1,
            ease: 'Power1.easeInOut'
          });
        }
      }
  );

  gsap.fromTo("#email-icon",
      { opacity: 0, scale: 1.2 },
      {
        opacity: 1,
        scale: 1,
        ease: 'Power1.easeOutIn',
        delay: 0.6,
        onComplete: () => {
          gsap.to("#email-icon", {
            scale: .5,
            duration: 0.4,
            yoyo: true,
            repeat: 1,
            ease: 'Power1.easeInOut'
          });
        }
      }
  );

  gsap.fromTo("#email-icon",
      {opacity: 0, x: 0},
      {opacity: 1, x: 0, ease: 'Power1.easeOutIn', delay: .9});

  gsap.fromTo("#shape",
      {opacity: 0,},
      {opacity: 1, ease: 'Power1.easeOutIn', delay: 1.2});

  gsap.fromTo("#photo",
      {opacity: 0,},
      {opacity: 1, ease: 'Power1.easeOutIn', delay: 1.4});

});

</script>

<style scoped>
img {
  height: 50vh;
}

.custom-icon {
  @apply text-[#2D465C] hover:text-[#01B47C] transition duration-300 ease-in-out transform hover:scale-110 mr-2
}

.blob-shape {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3ClinearGradient id=%22b%22 gradientTransform=%22rotate(105 .5 .5)%22%3E%3Cstop offset=%220%25%22 stop-color=%22%2320ff9a%22%2F%3E%3Cstop offset=%22100%25%22 stop-color=%22%23276e4e%22%2F%3E%3C%2FlinearGradient%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M821.5 684.5Q794 869 604 872t-350.5-86.5Q93 696 111.5 509T269 209.5Q408 97 604.5 110T825 311.5q24 188.5-3.5 373Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22url(%23b)%22 d=%22M821.5 684.5Q794 869 604 872t-350.5-86.5Q93 696 111.5 509T269 209.5Q408 97 604.5 110T825 311.5q24 188.5-3.5 373Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}


</style>