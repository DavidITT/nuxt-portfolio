<template>
  <div id="about"  class="flex w-full justify-center text-center">
    <div class="relative">
      <div class="absolute blob-shape" id="shape"/>
      <img class="relative w-full sm:w-[10vw] md:w-[50vw] lg:w-[17vw] xl:w-[15vw] max-w-[50vw]"
           src="../../assets/img/profile.png" id="photo" alt=""/>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilePhoto"
}
</script>

<style lang="scss" scoped>


.blob-shape {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: left;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3ClinearGradient id=%22b%22 gradientTransform=%22rotate(105 .5 .5)%22%3E%3Cstop offset=%220%25%22 stop-color=%22%2320ff9a%22%2F%3E%3Cstop offset=%22100%25%22 stop-color=%22%23276e4e%22%2F%3E%3C%2FlinearGradient%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M821.5 684.5Q794 869 604 872t-350.5-86.5Q93 696 111.5 509T269 209.5Q408 97 604.5 110T825 311.5q24 188.5-3.5 373Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22url(%23b)%22 d=%22M821.5 684.5Q794 869 604 872t-350.5-86.5Q93 696 111.5 509T269 209.5Q408 97 604.5 110T825 311.5q24 188.5-3.5 373Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}

</style>