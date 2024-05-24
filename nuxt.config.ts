// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ["@nuxtjs/tailwindcss", ["@nuxtjs/google-fonts", {
        families: {
            Roboto: true,
            'Exo+2': {
                ital: [700]
            },
            'Space+Mono': true
        }
    }
    ], "@nuxtjs/i18n"],
    i18n: {
        locales: [
            { code: 'es', name: 'Español', iso: 'es-ES', file: 'es-ES.json' },
            { code: 'en', name: 'English', iso: 'en-US', file: 'en-US.json' }
        ],
        defaultLocale: "es",
        langDir: 'lang/',
        lazy: true,
        detectBrowserLanguage: false,
    },
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