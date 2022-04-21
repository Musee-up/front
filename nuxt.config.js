import { defineNuxtConfig } from '@nuxt/bridge'

const backendUrl = process.env.API_URL || 'http://localhost:1337'

export default defineNuxtConfig({
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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/custom.scss'],
  extractCSS: true,

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/i18n'],

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
    // 'nuxt-vite',
    '@nuxt/image',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',

    '@nuxtjs/vuetify',
    '@nuxtjs/strapi',
    '@nuxtjs/moment',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxt/http',
    '@nuxtjs/apollo',
    '@nuxtjs/style-resources',
    '@nuxtjs/i18n',
  ],
  moment: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },
  strapi: {
    url: process.env.STRAPI_URL || `${backendUrl}/api`,
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || `${backendUrl}/graphql`,
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
    defaultLocale: 'en',
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    optionsPath: './vuetify.options.js',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
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
  target: 'static',
  bridge: {
    // vite: true,
  },
})
