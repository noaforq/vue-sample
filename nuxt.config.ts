// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
import { icons } from './build/fontawesome';

export default defineNuxtConfig({
  head: {
    titleTemplate: '%s - scout-web',
    title: 'scout-web',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  ssr: true,
  target: 'server',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss', '~/assets/scss/variables.scss', '@fortawesome/fontawesome-svg-core/styles.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_API_URL,
      applicationEnvironment: process.env.NUXT_APPLICATION_ENVIRONMENT
    }
  },
  alias: {
    '@/*': resolve(__dirname, './*'),
  },
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    [
      '@nuxtjs/vuetify',
      {
        treeShake: true,
        customVariables: ['@/styles/vuetify-override.scss'],
      },
    ],
    ['@nuxtjs/fontawesome', { component: 'fontAwesome', suffix: true }],
    '@nuxtjs/dotenv',
    // https://composition-api.nuxtjs.org/getting-started/setup
    '@nuxtjs/composition-api/module',
  ],
  veutify: {
    customVariables: ['~assets/variables.scss'],
  },
  // nuxt/fontawesome
  // https://www.npmjs.com/package/@nuxtjs/fontawesome
  fontawesome: {
    icons,
  },
})
