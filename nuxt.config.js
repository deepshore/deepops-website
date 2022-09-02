export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: true,
  router: {
    base: '/'
  },

  env: {
    backendUrl: process.env.BACKEND_URL || 'https://127.0.0.1:8000'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Deepops - Start your Cloud Native Operations today',

    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Unser Team als Ihr Back-up! Wir befähigen und unterstützen Ihre DevOps-Organisation.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    bodyAttrs: {
      class: 'bg-gray-50'
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon-96x96.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@aceforth/nuxt-optimized-images'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // i18n config
  i18n: {
    /* module options */
    locales: [
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'de',
        name: 'Deutsch'
      }
    ],
    defaultLocale: 'de',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // recommended
    }
  },
  googleFonts: {
    families: {
      Lato: {
        wght: [400, 700, 900]
      },
      Montserrat: {
        wght: [700, 400, 300, 200]
      },
      Nunito: {wght: [500, 700]}
    },
    download: true,
    inject: true,
    overwriting: true
  },

  image: {
    // Options
    domains: ['deepshore.de']

  },

  optimizedImages: {
    optimizeImages: true
  }
}
