import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - museé up',
    title: 'museé up',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // 'nuxt-vite',
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],
  // vite: {
  //   build: true,
  //   /* options for vite */
  //   // ssr: true // enable unstable server-side rendering for development (false by default)
  //   // experimentWarning: false // hide experimental warning message (disabled by default for tests)
  //   vue: {
  //     /* options for vite-plugin-vue2 */
  //   },
  // },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/i18n',
      {
        locales: ['en', 'es'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: {
              greeting: 'Hello world!'
            },
            es: {
              greeting: '�Hola mundo!'
            }
          }
        }
      }
    ]
  ],
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    optionsPath: "./vuetify.options.js"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
