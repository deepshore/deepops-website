<template>
  <div class="w-full sm:w-2/3 md:w-1/2 px-4 sm:px-16 sm:text-white">
    <h1
      class="font-headline font-bold my-4 text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl mb-1 leading-tight slide-in-bottom-h1"
    >
      {{ data.frontmatter.headline }}
    </h1>
    <p class="font-sans font-light sm:text-md md:text-lg 2xl:text-2xl mb-4 slide-in-bottom-subtitle">
      {{ data.frontmatter.subheadline }}
    </p>
    <a :href="data.frontmatter.cta.url">
      <button
        type="button"
        class="font-butto text-white bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-yellow-500 hover:to-pink-500 rounded-full text-sm 2xl:text-md px-5 py-2.5 text-center mr-2 mb-2 dark:bg-sky-500 dark:focus:ring-blue-800 uppercase font-bold tracking-widest"
      >
        {{ data.frontmatter.cta.text }}
      </button>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>
