/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      mobile: { min: "375px", max: "767px" },
    },
    extend: {
      colors: {
        yellow: "hsl(47, 88%, 63%)",
        white: "hsl(0, 0%, 100%)",
        gray: "hsl(0, 0%, 50%)",
        black: "hsl(0, 0%, 7%)",
      },
      fontFamily: {
        Figtree: ["Figtree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
