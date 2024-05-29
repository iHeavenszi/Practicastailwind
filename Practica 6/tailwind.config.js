/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        azul: '#84b6f4',
        rojo: '#ff6961',
        verde: '#77dd77'
      },
      fontFamily: {
        jaquac: ['Jacquard'],
      }

    },
  },
  plugins: [],
}