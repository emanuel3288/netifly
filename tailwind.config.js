/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ema': "url('./src/assets/images/ema.jpg')", // Ruta relativa a la imagen en tu carpeta de activos
      },
    },
  },
  plugins: [],
}