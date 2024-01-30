/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rose: ['Red Rose', 'serif'],
        sora: ['Sora', 'sans-serif'],
      },
      colors: {
        main: '#A02279',
        footer: '#1D1D1E',
        text: '#434343',
        shade: '#00000060'
      },
    },
  },
  plugins: [],
}