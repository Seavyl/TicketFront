/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        "back-color": "#BFFCFC",
        "item-color":"#00AAAD",
        "n-f-color":"#007579",
        "button-color":"#8A1E00"
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

