<script setup>
const config = useRuntimeConfig().public
const baseUrl = config.BACKEND_URL
const pageUrlName = "deepops-homepage"
const mediaBaseURL = "user/pages"
console.debug(baseUrl)
const { data } = await useFetch(`${baseUrl}/${pageUrlName}.json`)
</script>

<script>
export default {
  methods: {
    getPageByLink(link) {
      return link
    },
    getImagePath(file) {
      return `${this.baseUrl}/${this.mediaBaseURL}/${this.pageUrlName}/${file}`
    }
  },
  mounted() {
    // console.debug(this.data)
    useHead({
      title: this.data.frontmatter.title
    })
  }
}
</script>

<template>
  <div class="w-full flex flex-col space-y-4 md:space-y-0 max-w-screen-2xl mx-auto">
    <section class="xl:py-4 w-full">
      <div
        class="w-full text-left md:text-center xl:rounded-lg md:drop-shadow-xl ring-1 ring-gray-900/5 py-4 sm:py-24 md:py-32 lg:py-64 bg-team-blue bg-cover text-slate-50">
        <div class="md:w-3/5 md:mx-auto px-4 sm:px-16">
          <h1
            class="font-headline my-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black-800 font-black leading-tight slide-in-bottom-h1">
            {{ data.frontmatter.headline }}
          </h1>
          <h3 class="font-sans md:text-2xl mb-4 slide-in-bottom-subtitle">
            {{ data.frontmatter.subheadline }}
          </h3>
          <button type="button"
            class="font-butto text-white bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-yellow-500 hover:to-pink-500 rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-sky-500 dark:focus:ring-blue-800 uppercase font-bold tracking-widest">
            Kontakt aufnehmen
          </button>
        </div>
      </div>
    </section>

    <section class="w-full">
      <div class="grid sm:grid-cols-2 md:grid-cols-4 my-4 sm:my-8 md:my-16 xl:my-24 gap-y-8 text-center">
        <a class="group flex flex-row gap-8 sm:gap-0 sm:flex-col mx-8 sm:mx-0 items-center items-center sm:items-stretch"
          v-for="(section, index) in data.frontmatter.sections" :key="section" :href="'#'+index">
          <div
            class="flex-none rounded-xl xl:rounded-3xl w-16 h-16 xl:w-32 xl:h-32 px-4 py-4 xl:px-8 xl:py-8 shadow-xl group-hover:shadow-xl group-hover:shadow-cyan-700/20 bg-white sm:mx-auto">
            <img class="object-contain w-8 h-8 xl:h-16 xl:w-16 " :src="getImagePath(section.icon)">
          </div>
          <h5 class="font-headline text-lg sm:mt-3 group-hover:underline underline-offset-4 decoration-4 ">
            {{ section.title }}
          </h5>
        </a>
      </div>
    </section>

    <section :id="index" class="w-full" v-for="(section, index) in data.frontmatter.sections" :key="section">
      <div class="flex flex-col md:flex-row flex-col-reverse mb-16 md:items-center"
        :class="{ 'md:flex-row-reverse': section.content_side === 'left' }">
        <div class="md:w-1/2 p-4 md:p-16">
          <h2
            class="font-headline text-2xl md:text-4xl xl:text-6xl text-black-800 font-black leading-tight text-center md:text-left slide-in-bottom-h1"
            :class="{ 'md:text-right': section.content_side === 'left' }">
            {{ section.title }}
          </h2>
          <p class="text-base md:text-xl my-4 text-center md:text-left slide-in-bottom-subtitle"
            :class="{ 'md:text-right': section.content_side === 'left' }">
            {{ section.text }}
          </p>

          <div class="flex flex-row w-full gap-x-8 justify-center md:justify-start"
            :class="{ 'md:justify-end': section.content_side === 'left' }">
            <div v-for="(item) in section.links " :key="item">
              <div class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
                <img class="object-contain grayscale hover:grayscale-0" :src="getImagePath(item.icon)">
              </div>
            </div>
          </div>
        </div>
        <div class="w-2/3 mx-auto md:w-1/2 md:p-16">
          <div class="">
            <img class="object-center" :src="getImagePath(section.image)">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
