/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        beams: "url('~/assets/beams.jpeg')"
      }
    },
    fontFamily: {
      sans: ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
      button: ['Nunito', 'Helvetica', 'Arial', 'sans-serif'],
      headline: ['Montserrat', 'sans-serif']
    }
  },
  plugins: [],
}

