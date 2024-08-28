// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["chota", "~/assets/css/app.css"],
  modules: [
    "@nuxt/image",
    "vue3-carousel-nuxt",
    "@nuxt/content",
    "@nuxtjs/google-fonts",
  ],

  googleFonts: {
    families: {
      Unbounded: true,
      "Instrument Sans": true,
    },
  },
});
