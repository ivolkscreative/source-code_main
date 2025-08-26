/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        "tablet-landscape": { min: "1024px", max: "1480px" },
      },
      colors: {
        primary: {
          white: "#FFFFFF",
          grey: "#D9D9D9",
          black: "#231F20",
          red: "#BE1E2D",
        },
      },
    },
  },
  plugins: [],
};
