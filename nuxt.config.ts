// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxtjs/seo"],
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
  site: {
    url: "https://2xpt.com",
    name: "2XPT",
    description:
      "We deliver innovative, secure, and customized technology solutions that drive organizational success.",
    defaultLocale: "en",
    image: "https://2xpt.com/banner.png",
  },
});
