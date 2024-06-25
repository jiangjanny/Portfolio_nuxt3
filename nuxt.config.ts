export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "zh-tw",
      },
      // ...
    },
  },
  imports: {
    dirs: ["stores"],
  },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    "@vueuse/nuxt",
    "@nuxtjs/i18n", "@unocss/nuxt"
  ],
  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
  },
  css: ["@/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // 全局提供 variables裡包含了mixin、palette
          additionalData: '@import "~/assets/style/_variables.scss";',
        },
      },
    },
  },
});
