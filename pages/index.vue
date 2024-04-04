<template>
  <div>
    <canvas ref="canvas"></canvas>
    <div class="absolute text-white text-center w-full max-w-2xl px-6" id="container"
         style="top: 50%; transform:translate(-50%, -50%); left:50%">
      <blockquote>
        <h1 id="name_dev" class="font-space-mono text-sm uppercase tracking-wide mb-3 text-lg opacity-0"
            style="transform: translateY(30px)">David Villeda</h1>
        <p id="blockuote_favorite" class="font-exo text-4xl uppercase opacity-0" style="transform: translateY(30px)">"Is
          not an error, is an opportunity to improve my code"</p>
      </blockquote>
      <a href="https://github.com/DavidITT" class="opacity-0" id="work_button">
        <button class="border px-4 py-2 rounded-lg text-sm font-space-mono mt-5 hover:bg-white hover:text-gray-800"
                style="transform: translateY(30px)">View my work
        </button>
      </a>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import {
  PlaneGeometry,
  Points,
  Float32BufferAttribute,
  BufferAttribute,
  BufferGeometry,
  Raycaster,
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  MeshPhongMaterial,
  DoubleSide,
  Mesh,
  DirectionalLight,
  PointsMaterial
} from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';


export default {
  mounted() {

    const world = {
      plane: {
        width: 400,
        height: 400,
        widthSegments: 50,
        heightSegments: 50,
      }
    }

    function generatePlane() {
      planeMesh.geometry.dispose()
      planeMesh.geometry = new PlaneGeometry(
          world.plane.width,
          world.plane.height,
          world.plane.widthSegments,
          world.plane.heightSegments)

      const {array} = planeMesh.geometry.attributes.position;
      const randomValues = []

      for (let i = 0; i < array.length; i++) {

        if (i % 3 === 0) {
          const x = array[i]
          const y = array[i + 1]
          const z = array[i + 2]
          array[i] = x + (Math.random() - 0.5) * 3
          array[i + 1] = y + (Math.random() - 0.5) * 3
          array[i + 2] = z + (Math.random() - 0.5) * 3
        }
        randomValues.push(Math.random() * Math.PI * 2)
      }

      planeMesh.geometry.attributes.position.randomValues = randomValues
      planeMesh.geometry.attributes.position.originalPosition = planeMesh.geometry.attributes.position.array


      const colors = []

      const hexColor = "47BA87";

      const r = parseInt(hexColor.substring(0, 2), 16) / 255;
      const g = parseInt(hexColor.substring(2, 4), 16) / 255;
      const b = parseInt(hexColor.substring(4, 6), 16) / 255;

      console.log(r + ',' + g + ', ' + b)

      for (let i = 0; i < planeMesh.geometry.attributes.position.count; i++) {
        colors.push(r, g, b);
      }

      planeMesh.geometry.setAttribute('color', new BufferAttribute(new Float32Array(colors), 3))
    }

    const rayCaster = new Raycaster()
    const scene = new Scene();
    const camera = new PerspectiveCamera(100, innerWidth / innerHeight, 0.001, 1000);
    const renderer = new WebGLRenderer({
      canvas: this.$refs.canvas
    })

    renderer.setSize(innerWidth, innerHeight)
    renderer.setPixelRatio(devicePixelRatio)

    new OrbitControls(camera, renderer.domElement)
    camera.position.z = 50

    const planeGeometry = new PlaneGeometry(15, 15, 27, 17)
    const planeMaterial = new MeshPhongMaterial({
      side: DoubleSide,
      flatShading: true,
      vertexColors: true
    })
    const planeMesh = new Mesh(planeGeometry, planeMaterial)
    scene.add(planeMesh)

    generatePlane()


    const light = new DirectionalLight(0x47BA87, 2)
    light.position.set(0, -2, 1)
    scene.add(light)

    const backLight = new DirectionalLight(0x47BA87, 2)
    backLight.position.set(0, 2, -1)
    scene.add(backLight)

    // Stars
    const starGeometry = new BufferGeometry()
    const starMaterial = new PointsMaterial({color: 0xFFFFFF})
    const starVertices = []
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000
      const y = (Math.random() - 0.5) * 2000
      const z = (Math.random() - 0.5) * 2000
      starVertices.push(x, y, z)
    }

    starGeometry.setAttribute('position', new Float32BufferAttribute(starVertices, 3))

    const stars = new Points(starGeometry, starMaterial)

    scene.add(stars)

    const mouse = {
      x: undefined,
      y: undefined
    }

    let frame = 0;

    function animate() {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
      rayCaster.setFromCamera(mouse, camera)
      frame += 0.01

      const {array, originalPosition, randomValues} = planeMesh.geometry.attributes.position

      for (let i = 0; i < array.length; i += 3) {
        //X
        array[i] = originalPosition[i] + Math.cos(frame + randomValues[i]) * 0.003
        //Y
        array[i + 1] = originalPosition[i + 1] + Math.sin(frame + randomValues[i + 1]) * 0.003
      }

      planeMesh.geometry.attributes.position.needsUpdate = true

      const intersects = rayCaster.intersectObject(planeMesh)
      if (intersects.length > 0) {
        const {color} = intersects[0].object.geometry.attributes

        color.setX(intersects[0].face.a, 0.1)
        color.setY(intersects[0].face.a, 0.5)
        color.setZ(intersects[0].face.a, 1)

        color.setX(intersects[0].face.b, 0.1)
        color.setY(intersects[0].face.b, 0.5)
        color.setZ(intersects[0].face.b, 1)

        color.setX(intersects[0].face.c, 0.1)
        color.setY(intersects[0].face.c, 0.5)
        color.setZ(intersects[0].face.c, 1)

        intersects[0].object.geometry.attributes.color.needsUpdate = true

        let colorInit = "42B883"
        const rInit = parseInt(colorInit.substring(0, 2), 16) / 255;
        const gInit = parseInt(colorInit.substring(2, 4), 16) / 255;
        const bInit = parseInt(colorInit.substring(4, 6), 16) / 255;

        let colorHover = "3C3C3C"
        const rHover = parseInt(colorHover.substring(0, 2), 16) / 255;
        const gHover = parseInt(colorHover.substring(2, 4), 16) / 255;
        const bHover = parseInt(colorHover.substring(4, 6), 16) / 255;

        const initialColor = {
          r: rInit,
          g: gInit,
          b: bInit
        }

        const hoverColor = {
          r: rHover,
          g: gHover,
          b: bHover
        }

        gsap.to(hoverColor, {
          r: initialColor.r,
          g: initialColor.g,
          b: initialColor.b,
          onUpdate: () => {
            color.setX(intersects[0].face.a, hoverColor.r)
            color.setY(intersects[0].face.a, hoverColor.g)
            color.setZ(intersects[0].face.a, hoverColor.b)

            color.setX(intersects[0].face.b, hoverColor.r)
            color.setY(intersects[0].face.b, hoverColor.g)
            color.setZ(intersects[0].face.b, hoverColor.b)

            color.setX(intersects[0].face.c, hoverColor.r)
            color.setY(intersects[0].face.c, hoverColor.g)
            color.setZ(intersects[0].face.c, hoverColor.b)
          }
        })
      }

      stars.rotation.x += 0.001
    }

    animate()


    addEventListener('mousemove', (event) => {
      mouse.x = (event.clientX / innerWidth) * 2 - 1
      mouse.y = -(event.clientY / innerHeight) * 2 + 1
    })

    gsap.to('#name_dev', {
      opacity: 1,
      duration: 1.5,
      delay: 0.1,
      y: 0,
      ease: 'expo'
    })

    gsap.to('#blockuote_favorite', {
      opacity: 1,
      duration: 1.5,
      delay: 0.3,
      y: 0,
      ease: 'expo'
    })

    gsap.to('#work_button', {
      opacity: 1,
      duration: 1.5,
      delay: 0.6,
      y: 0,
      ease: 'expo'
    })

    document.querySelector('#work_button').addEventListener('click', (e) => {
      e.preventDefault()
      gsap.to('#container', {
        opacity: 0
      })

      gsap.to(camera.position, {
        z: 25,
        ease: 'power3.inOut',
        duration: 2,
      })

      gsap.to(camera.rotation, {
        x: 1.57,
        ease: 'power3.inOut',
        duration: 2,
      })

      gsap.to(camera.position, {
        y: 1000,
        ease: 'power3.in',
        duration: 1.5,
        delay: 1.5,
        onComplete: () => {
          this.$router.push('/home')
        }
      })
    })

    addEventListener('resize', () => {
      camera.aspect = innerWidth / innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(innerWidth, innerHeight)
    })
  }
}
</script>

<style>
.absolute {
  position: absolute;
}
</style>