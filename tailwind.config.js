/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      mainFont : ["Caveat", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'logo': "url('./src/assets/download.png')",
        "cart" : "url('./src/assets/cart.png')",
         "pament":"url('./src/assets/pament.png')",
         "login":"url('./src/assets/login.jpg')"
      },
    },
  },
  plugins: [],
}
