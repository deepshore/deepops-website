// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
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
  },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: true,
  nitro: {
    static: true
  },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxtjs/i18n'
  ],
  // i18n config
  i18n: {
    /* module options */
    locales: [
      {
        code: 'de',
        name: 'Deutsch'
      },
      {
        code: 'en',
        name: 'English'
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
})
