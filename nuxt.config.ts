// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: process.env.NODE_ENV !== "production" },
  app: {
    head: {
      htmlAttrs: { lang: "en-PH" },
      titleTemplate: "%s | Motion Construction PH",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#ad3c25" },
        { name: "format-detection", content: "telephone=yes" },
        { property: "og:site_name", content: "Motion Construction PH" },
        { property: "og:locale", content: "en_PH" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
      ],
    },
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
  ],
});
