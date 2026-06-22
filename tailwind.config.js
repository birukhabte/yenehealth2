/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        coral: { DEFAULT: '#d9736a', dark: '#c5605a', light: '#e8a09a' },
        teal: { yene: '#3a9e99', dark: '#2e8a85' },
      },
    },
  },
  plugins: [],
}
