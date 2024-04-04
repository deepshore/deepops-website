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
        <SwitchLocalePathLink
          v-for="locale in availableLocales"
          :key="locale.code"
          class="font-bold hover:underline underline-offset-2 decoration-4"
          :locale="locale.code"
          @click="setLocale(locale.code);"
          external
        >
        {{ locale.name }}
        </SwitchLocalePathLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n()
const setI18nParams = useSetI18nParams()

setI18nParams({
  experimental: { switchLocalePathLinkSSR: true }
})

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

</script>
