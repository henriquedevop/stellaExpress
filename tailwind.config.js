/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'wine-bg': "url('/src/assets/winebg.jpeg')",
        'pratileira-bg': "url('/src/assets/pratileirabg.jpeg')",
        'embalagem-bg': "url('/src/assets/embalegem-bg.jpeg')",   
        'tabacaria-bg': "url('/src/assets/tabacaria-bg.jpeg')",   
        'snacks-bg': "url('/src/assets/snacks-bg.jpeg')",
        'bebidas-bg': "url('/src/assets/bebidas-bg.jpg')",
      }
    },
  },
  plugins: [],
}