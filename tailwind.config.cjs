/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DBB6F',
        secondary: '#D7885C',
        background: '#F4F8F7'
      },
      fontFamily: {
        'Oswald': ['Oswald', 'sans-serif']
      }
    },
  },
  plugins: [],
}