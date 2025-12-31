// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],
  plugins: ["~/plugins/vue-query.ts"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@nuxt/icon"],
});