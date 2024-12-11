// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
    devtools: {enabled: true},

    app: {
        head: {
            link: [
                {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }
            ]
        }
    },

    modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss",
        ["@nuxtjs/google-fonts", {
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
            {code: 'es', name: 'Español', iso: 'es-ES', file: 'es-ES.json'},
            {code: 'en', name: 'English', iso: 'en-US', file: 'en-US.json'}
        ],
        defaultLocale: "en",
        langDir: 'lang/',
        lazy: true,
        strategy: 'no_prefix',
        detectBrowserLanguage: false,
    },

    tailwindcss: {
        exposeConfig: true,
        viewer: true,
    },

    build: {
        transpile: ['three', '@fortawesome/vue-fontawesome', 'animate.css/animate.min.css'],
    },

    css: [
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],

    plugins: ['~/plugins/fontawesome.js'],
    compatibilityDate: '2024-10-31',
})