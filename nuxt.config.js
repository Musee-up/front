import { defineNuxtConfig } from '@nuxt/bridge'
require('dotenv').config()

const backendUrl = process.env.API_URL || 'http://localhost:1337'

export default defineNuxtConfig({
  // Global page headers: https://go.nuxtjs.dev/config-head
  typescript: {
    strict: true,
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}',
      },
    },
  },
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

    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: 'https://js.stripe.com/v3/' },
      // { src: 'http://localhost:1337/plugins/strapi-stripe/static/stripe.js' }
    ],
  },
  env: {
    API_URL: backendUrl,
  },
  router: {
    middleware: ['userAgent'],
  },
  ssr: true,

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
    '@nuxtjs/dotenv',
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
  axios: {
    baseURL: `${backendUrl}/api`,
  },
  strapi: {
    url: `${backendUrl}/api`,
  },
  apollo: {
    // errorHandler: '~/plugins/apollo-error-handler.js',

    clientConfigs: {
      default: {
        httpEndpoint: `${backendUrl}/graphql`,
        // inMemoryCacheOptions: {
        //   addTypename: false,
        // },
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
  alias: {
    tslib: 'tslib/tslib.es6.js',
    ufo: 'ufo/dist/index.cjs',
  },
  build: {
    transpile: [
      'graphql',
      '@nuxtjs/apollo',
      'subscriptions-transport-ws',
      'web-streams-polyfill',
      'cross-fetch',
      'hash.js',
      'universal-cookie',
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
    scriptSetup: true,
    // vite: true,
  },
})
