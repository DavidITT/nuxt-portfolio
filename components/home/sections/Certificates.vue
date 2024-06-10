<template>
  <section id="about" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Certificates">
    <div
        class=" -mx-6 mb-4 w-screen  bg-slate-200 dark:bg-slate-900/75 dark:lg:bg-transparent lg:bg-transparent px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 ">
      <h2 class="text-sm lg:text-xl font-bold uppercase tracking-widest text-[#9B51E0]">{{
          $t('links.certificates.text')
        }}</h2>
    </div>
    <div
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-5">
      <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
           src="/certificates/azure-az-900.png"
           alt="">
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Microsoft Certified: Azure
          Fundamentals AZ-900</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Este certificado valida mi conocimiento de
          los conceptos fundamentales de la computación en la nube y los servicios de Microsoft Azure.
        </p>
        <a href="https://www.credly.com/badges/934423b6-867e-43d4-bf06-2332fecf2181" target="_blank"
           class="inline-flex font-medium items-center text-blue-600 hover:underline">
          Certificate
          <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
               fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
          </svg>
        </a>
      </div>
    </div>
    <div
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
           src="/certificates/mercatitlan.png"
           alt="">
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Curso en línea de Google
          Ads</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          El curso en línea de Google Ads de Juan Lombana enseña desde los conceptos básicos hasta estrategias avanzadas
          de publicidad en Google. Cubre la creación y optimización de campañas, uso efectivo de palabras clave y
          estructuración de anuncios para maximizar el retorno de inversión.
        </p>
        <div class="flex flex-row justify-between">
          <a href="/certificates/2-0-certificado-del-curso-en-linea-de-google-ads.pdf" target="_blank"
             class="inline-flex font-medium items-center text-blue-600 hover:underline">
            Certificate
            <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
            </svg>
          </a>
          <a href="https://www.mercatitlan.com/cursos/google-ads" target="_blank"
             class="inline-flex font-medium items-center text-blue-600 hover:underline">
            Course
            <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "Certificates"
}
</script>

<style scoped>

</style>