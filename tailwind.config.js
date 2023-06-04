/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily : { 'poppins' : [ 'Poppins' , 'sans-serif' ] },
      colors :{'main' : "#119F4A",'second': '#47B368','third': '#29663B'}
    },
  },
  plugins: [],
}