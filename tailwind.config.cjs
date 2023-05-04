/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        secondary: ['"Castoro Titling"', 'sans-serif'],
        primary: ['"Comme"', 'cursive'],
      },
    },
  },
  plugins: [],
}
