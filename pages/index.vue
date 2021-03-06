<template>
  <div class="w-full flex flex-col space-y-4 md:space-y-0 max-w-screen-2xl mx-auto">
    <section class="xl:py-4 w-full">
      <div
        class="w-full text-left md:text-center 2xl:rounded-3xl md:drop-shadow-xl py-4 sm:py-12 md:py-16 lg:py-24 xl:py-32 2xl:py-64 bg-cover bg-center"
        :style="{'background-image': `url(${getImagePath(data.frontmatter.image)})`}"
      >
        <div class="w-full md:w-1/2 px-4 sm:px-16">
          <h1
            class="font-headline my-4 text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl leading-tight slide-in-bottom-h1 text-white"
          >
            {{ data.frontmatter.headline }}
          </h1>
          <p class="font-sans sm:text-md md:text-lg mb-4 slide-in-bottom-subtitle text-white ">
            {{ data.frontmatter.subheadline }}
          </p>
          <button
            type="button"
            class="font-butto text-white bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-yellow-500 hover:to-pink-500 rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-sky-500 dark:focus:ring-blue-800 uppercase font-bold tracking-widest"
          >
            Kontakt aufnehmen
          </button>
        </div>
      </div>
    </section>

    <section class="w-full">
      <div class="grid sm:grid-cols-2 md:grid-cols-4 my-4 sm:my-8 md:my-16 xl:my-24 gap-y-8 text-center">
        <a
          v-for="(section, index) in data.frontmatter.sections"
          :key="index"
          class="group flex flex-row gap-8 sm:gap-0 sm:flex-col mx-8 sm:mx-0 items-center items-center sm:items-stretch"
          :href="'#' + index"
        >
          <div
            class="flex-none w-16 h-16 xl:w-48 xl:h-48 sm:mx-auto"
            v-if="section.image"
          >
            <img
              class="object-contain w-full h-full"
              :src="getImagePath(section.icon)"
              :alt="`${section.title}-logo`"
            >
          </div>
          <span class="font-headline text-lg sm:mt-3 group-hover:underline underline-offset-4 decoration-4 px-2">
            {{ section.title }}
          </span>
        </a>
      </div>
    </section>

    <section v-for="(section, index) in data.frontmatter.sections" :id="index" :key="index" class="w-full mb-16 p-4 sm:p-8 md:p-12 xl:p-16">
      <div
        class="flex flex-col md:flex-row flex-col-reverse md:items-center"
        :class="{ 'md:flex-row-reverse': section.content_side === 'left' }"
      >
        <div class="pr-4 sm:pr-8 md:pr-12 xl:pr-16">
          <h2
            class="font-headline text-2xl md:text-4xl xl:text-6xl text-black-800 font-black leading-tight text-center md:text-left slide-in-bottom-h1"
          >
            {{ section.title }}
          </h2>
          <p
            class="text-base lg:text-xl xl:text-2xl mb-4 text-center md:text-left slide-in-bottom-subtitle"
          >
            {{ section.text }}
          </p>
        </div>
        <div class="mx-auto sm:w-2/3 md:w-1/2 px-4 sm:px-8 md:px-12 xl:px-16 flex-none" v-if="section.image">
          <div class="">
            <img class="object-center" :src="getImagePath(section.image)" :alt="`${section.image_alt_text}-logo`">
          </div>
        </div>
      </div>

      <!-- Seperator -->
      <div class="h-0.5 w-full bg-gradient-to-r from-transparent via-gray-200 via-gray-200" />

      <!-- Logos -->
      <div
        class="flex flex-row w-full gap-x-8 justify-center md:justify-start"
        :class="{ 'md:justify-end': section.content_side === 'left' }"
      >
        <div v-for="(item, i) in section.links " :key="i">
          <div class="w-auto sm:h-20 md:w-24 md:h-24">
            <img class="object-contain grayscale hover:grayscale-0 h-16 sm:h-20 md:h-24" :src="getImagePath(item.icon)" :alt="item.label">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
if (process.env.NODE_ENV === 'development') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
}

export default {
  name: 'IndexPage',
  data () {
    return {
      data: {},
      baseUrl: process.env.backendUrl,
      pageUrlName: 'deepops-homepage',
      mediaBaseURL: 'user/pages'
    }
  },
  async fetch () {
    const localeCode = this.$i18n.localeProperties.code
    let localeURL = ''
    if (localeCode !== 'de') {
      localeURL = `${localeCode}/`
    }
    const url = `${this.baseUrl}/${localeURL}${this.pageUrlName}.json`
    this.data = await fetch(
      url
    ).then(res => res.json())
  },
  methods: {
    getPageByLink (link) {
      return link
    },
    getImagePath (file) {
      return `${this.baseUrl}/${this.mediaBaseURL}/${this.pageUrlName}/${file}`
    },
    getImageBGClass (file) {
      return `bg-[url('${this.getImagePath(file)}')]`
    }
  }
}
</script>
