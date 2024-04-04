// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    "/": { ssr: false }, // Disable server-side rendering
  },
  devtools: { enabled: false },
  modules: [],
  // config tailwindcss
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
