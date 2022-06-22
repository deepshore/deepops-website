<template>
  <div class="bg-contain bg-beams bg-no-repeat">
    <NavBar />
    <!--Main-->
    <NuxtPage />
    <Footer />
  </div>
</template>

<style scoped>
</style>

<script setup>
const route = useRoute()

useHead({
  // or, instead:
  titleTemplate: (titleChunk) => {
    return titleChunk ? `Deepops - ${titleChunk}` : 'Deepops';
  },
  link: {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Montserrat:wght@700&family=Nunito:wght@400;500;700&display=swap'
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'bg-gray-50 font-body'
  }
})
</script>