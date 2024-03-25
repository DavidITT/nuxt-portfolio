<template>
  <div class="bg-black h-screen px-6 py-12">
    <h2 class="text-white font-exo text-5xl mb-7 opacity-0" ref="title" id="title">My work</h2>
    <div class="flex space-x-4">
      <div v-for="project in projects" class="w-full opacity-0" ref="projects" id="projects">
        <nuxt-link to="/">
          <img :src="project.image.url" class="object-cover transition duration-300 ease-in-out transform hover:translate-y-[-20px] mb-5" alt="">
          <p class="text-white text-center font-space-mon text-sm">{{ project.title }}</p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import img1 from '~/assets/img/img-1.jpg'
import img2 from '~/assets/img/img-2.jpg'
import img3 from '~/assets/img/img-3.jpg'
import img4 from '~/assets/img/img-4.jpg'
import img5 from '~/assets/img/img-5.jpg'
import img6 from '~/assets/img/img-6.jpg'

export default {
  data() {
    return {
      projects: [
        {
          image: {
            url: img1
          },
          title: 'IPHONE'
        },
        {
          image: {
            url: img2
          },
          title: 'WEB'
        },
        {
          image: {
            url: img3
          },
          title: ' ANDROID'
        },
        {
          image: {
            url: img4
          },
          title: ' ECOMMERCE'
        },
        {
          image: {
            url: img5
          },
          title: ' DESKTOP'
        },
        {
          image: {
            url: img6
          },
          title: ' SPA'
        }
      ]
    }
  },
  mounted() {
    gsap.to(this.$refs.title, {
      opacity: 1,
      duration: 1.5,
      y: 0,
      ease: 'expo'
    })

    gsap.to(this.$refs.projects, {
      opacity: 1,
      duration: 1.5,
      stagger: 0.1,
      x: 0,
      ease: 'expo',
      delay: 0.3
    })
  }
}
</script>

<style scoped>
img {
  height: 50vh;
}

#title {
  transform: translateY(30px);
}

#projects {
  transform: translateX(30px);
}
</style>