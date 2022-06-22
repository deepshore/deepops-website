import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  //modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  modules: ['@nuxtjs/tailwindcss' ],
  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true
  },
  runtimeConfig: {
    secretKey: '', // variable that can only be accessed on the server side
    public: {
      BACKEND_URL: process.env.BACKEND_URL || '' // variable that can also be accessed on the client side
    }
  },
  target: 'static',
  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  }
})
