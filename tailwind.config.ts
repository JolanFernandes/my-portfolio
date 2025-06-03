import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class", // Enables manual dark mode toggling

  theme: {
    extend: {
      fontFamily: {
        futuristic: ['"Orbitron"', "sans-serif"],
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
} as Config;
