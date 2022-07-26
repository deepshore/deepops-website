<template>
  <nav id="navbar" class="relative z-10 w-full text-neutral-800">
    <div
      class="flex flex-row max-w-screen-2xl px-4 2xl:px-0
     mx-auto items-center justify-between py-0 xl:py-4"
    >
      <div class="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8">
        <div class="w-full flex flex-row items-center justify-between py-6">
          <div>
            <DeepopsLogo class="h-10 sm:h-12 2xl:h-16" />
          </div>
        </div>
      </div>
      <div class="lg:flex">
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          class="font-bold hover:underline underline-offset-4 decoration-2"
          :to="switchLocalePath(locale.code)">{{ locale.name }}
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>