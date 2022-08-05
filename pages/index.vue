<template>
  <div class="w-full flex flex-col space-y-4 md:space-y-0 max-w-screen-2xl mx-auto text-slate-800">
    <section class="xl:py-4 w-full shrink">
      <!-- Mobile -->
      <div class="block sm:hidden">
        <div class="bg-cover bg-right h-80" :style="{'background-image': `url(${getImagePath(data.frontmatter.image.mobile)})`}" />
        <HeaderText :data="data" />
      </div>
      <!-- Desktop -->
      <div
        class="hidden sm:block w-full 2xl:rounded-3xl md:drop-shadow-xl py-4 sm:py-12 md:py-16 lg:py-24 xl:py-32 2xl:py-64 bg-cover bg-center"
        :style="{'background-image': `url(${getImagePath(data.frontmatter.image.desktop)})`}"
      >
        <HeaderText :data="data" />
      </div>
    </section>

    <section class="w-full">
      <div class="grid sm:grid-cols-2 md:grid-cols-4 my-4 sm:my-8 md:my-16 xl:my-24 gap-y-2 sm:gap-y-8 text-center">
        <a
          v-for="(section, index) in data.frontmatter.sections"
          :key="index"
          class="group flex flex-row gap-1 sm:gap-0 sm:flex-col mx-8 sm:mx-0 items-center items-center sm:items-stretch"
          :href="'#' + index"
        >
          <div
            v-if="section.image"
            class="flex-none w-16 h-16 md:w-16 md:h-16 xl:w-48 xl:h-48 sm:mx-auto"
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
        <div class="">
          <h2
            class="font-headline text-3xl md:text-4xl xl:text-6xl 2xl:text-8xl leading-tight text-center md:text-left slide-in-bottom-h1"
          >
            {{ section.title }}
          </h2>
          <h3
            v-if="section.subtitle"
            class="font-headline uppercase text-1xl md:text-2xl xl:text-4xl leading-tight text-center md:text-left slide-in-bottom-h1"
            :class="{'md:text-center': section.content_side === 'center'}"
          >
            {{ section.subtitle }}
          </h3>
          <p
            class="text-base lg:text-xl xl:text-2xl mb-4 text-center md:text-left slide-in-bottom-subtitle"
            :class="{'md:text-center': section.content_side === 'center'}"
          >
            {{ section.text }}
          </p>
        </div>
        <div v-if="section.image" class="mx-auto w-1/2 sm:w-2/3 md:w-1/2 px-2 sm:px-8 md:px-12 xl:px-16 2xl:px-32 flex-none">
          <div class="">
            <img class="object-center" :src="getImagePath(section.image)" :alt="`${section.image_alt_text}-logo`">
          </div>
        </div>
      </div>

      <!-- Seperator -->
      <div class="hidden sm:flex w-full my-5 relative">
        <div v-if="section.content_side === 'left'" class="absolute right-0 h-0.5 w-1/2 sm:w-1/3 md:w-1/2 bg-gradient-to-r from-transparent via-gray-200 to-gray-200" />
        <div v-if="section.content_side === 'right'" class="h-0.5 w-1/2 sm:w-1/3 md:w-1/2 bg-gradient-to-r from-gray-200 via-gray-200" />
        <div v-if="section.content_side === 'center'" class="h-0.5 w-full bg-gradient-to-r from-transparent via-gray-200" />
      </div>

      <!-- Logos -->
      <div
        class="flex flex-row w-full gap-x-2 sm:gap-x-8 justify-center md:justify-start"
        :class="{ 'md:justify-end': section.content_side === 'left', 'md:justify-center': section.content_side === 'center' }"
      >
        <div v-for="(item, i) in section.links " :key="i">
          <a class="w-auto" :href="item.url">
            <img class="object-contain h-12 sm:h-16 xl:h-24" :src="getImagePath(item.icon)" :alt="item.label">
          </a>
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
    }
  }
}
</script>
