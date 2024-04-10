/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#edf2f8',
        'secondaryColor': '#313bac',
        'blackColor': '#030303',
        'lightGrayColor': '#e4e4e4',
        'grayColor': '#6b7688',
        'brownColor': '#46364a',
        'whiteColor': '#ffffff'

      }
    },
  },
  plugins: [],
}