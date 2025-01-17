/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grape: ['GrapeNuts', 'sans-serif'],
        condiment: ['Condiment', 'cursive'],
        sil: ['ShadowsIntoLight', 'cursive'],
        pangolin: ['Pangolin', 'cursive'],
      },
    },
  },
  plugins: [],
}

