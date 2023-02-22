/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        inconsolata: ["Inconsolata", "monospace"],
        "space-mono": ["Space Mono", "monospace"],
      },
      colors: {
        'app-gray-1': '#333333',
        'app-gray-2': '#4F4F4F',
        'app-gray-light': '#BDBDBD'
      }
    },
  },
  plugins: [],
}
