/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        charterBoldItalic: ["charterBoldItalic"],
        charterItalic: ["charterItalic"],
      },
    },
  },
  plugins: [],
};
