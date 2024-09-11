// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  app: {
    head: {
      script: [
        {
          src: "https://cdn.lottielab.com/s/lottie-player@1.x/player-web.min.js",
          defer: true, // defer loading of the script until after the HTML is parsed
        },
      ],
    },
  },
});