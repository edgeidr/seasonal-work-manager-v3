// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
				compatibilityDate: "2024-11-01",
				devtools: { enabled: true },
				ssr: false,
				app: {
								head: {
												title: process.env.NUXT_APP_NAME || "",
								},
				},
				runtimeConfig: {
								public: {
												appName: process.env.NUXT_APP_NAME || "",
												brandName: process.env.NUXT_BRAND_NAME || "",
								},
				},
				modules: [
				 "@primevue/nuxt-module",
				 "@nuxtjs/tailwindcss",
				 "@nuxtjs/google-fonts",
				 "@vueuse/nuxt",
				],
				primevue: {
								importTheme: { from: "@/themes/mytheme.js" },
								options: {
												ripple: true,
												inputVariant: "filled",
								},
				},
				css: ["primeicons/primeicons.css", "@/assets/css/base.css"],
				tailwindcss: {
								configPath: "tailwind.config.js",
				},
				googleFonts: {
								families: {
												Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
												Montserrat: [100, 200, 300, 400, 500, 600, 700, 800, 900],
												Roboto: [100, 200, 300, 400, 500, 600, 700, 800, 900],
								},
				},
});