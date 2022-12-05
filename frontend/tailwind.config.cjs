/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'bg_light' : "rgba(209, 177, 116, 0.68)",
        'button_dark' : "rgba(56, 40, 26, 0.71)",
        'bg_dark' : "rgba(138, 70, 11, 0.83)"
      }
    },
    fontFamily :{
      "header_font" : 'Libre Caslon Text'
    },
    backgroundImage :{
      'bg_home' : "url('./src/assets/images/bg_home.png')"
    }
  },
  plugins: [],
}
