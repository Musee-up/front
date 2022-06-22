import { defineNuxtConfig } from '@nuxt/bridge'

const backendUrl = process.env.API_URL || 'http://localhost:1337'

export default defineNuxtConfig({
  ssr: true,
  alias: {
    tslib: 'tslib/tslib.es6.js',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - musée up',
    title: 'musée up',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      // {rel:'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato&display=swap'},
      // { rel: 'icon', type: 'image/x-icon', href: '/icon_blue.png' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/custom.scss', '@/assets/scss/colors.scss'],
  extractCSS: true,

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/moment',
    '@/plugins/i18n',
    {
      src: '@/plugins/socketio',
      mode: 'client',
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/image',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/strapi',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/apollo',
    '@nuxt/http',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/i18n',
  ],
  strapi: {
    url: `${backendUrl}/api`,
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: `${backendUrl}/graphql`,
      },
    },
  },
  styleResources: {
    scss: ['@/assets/scss/*.scss'],
  },
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.js',
      },
      {
        code: 'fr',
        file: 'fr.js',
      },
    ],
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'fr',
    vueI18n: {
      silentTranslationWarn: true,
      silentFallbackWarn: true,
    },
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    optionsPath: './vuetify.options.js',
    treeShake: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'graphql',
      '@nuxtjs/apollo',
      'subscriptions-transport-ws',
      'web-streams-polyfill',
      'cross-fetch',
    ],
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
  },
  http: {
    baseURL: `${backendUrl}/api`,
    browserBaseURL: `${backendUrl}/api`,
  },
  bridge: {
    // vite: true,
  },
})
