/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'main': '#f41415',
      'black':'#000',
     
    },
    fontFamily: {
      swash: ['swash', 'sans-serif'],
      raleway: ['raleway', 'sans-serif'],
    },
    extend:{
      spacing:{
        '200':'200%'
      }
    }
  },
  plugins:[],
}
