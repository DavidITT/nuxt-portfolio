// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ["@nuxtjs/tailwindcss",
        ["@nuxtjs/google-fonts", {
            families: {
                Roboto: true,
                'Exo+2':{
                    ital: [700]
                },
                'Space+Mono': true
            }
        }
        ]],
    tailwindcss: {
        exposeConfig: true,
        viewer: true,
    },
    build: {
        transpile: ['three']
    },
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css'
    ]
})