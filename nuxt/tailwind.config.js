const primeUi = require("tailwindcss-primeui");

module.exports = {
    content: [
        "./pages/**/*.{vue,js}",
        "./components/**/*.{vue,js}",
        "./layouts/**/*.{vue,js}",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./primevue/**/*.{js,ts}",
    ],
    theme: {
        extend: {
            screens: {
                desktop: { min: "769px" },
                tablet: { max: "768px" },
                mobile: { max: "480px" },
            },
            fontSize: {
                "2xs": ["0.7rem", "1rem"],
            },
        },
    },
    plugins: [
        primeUi, // Add this plugin
    ],
};
