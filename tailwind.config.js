/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-text': '#3b4363',
        'score-text': '#2a46c0',
        'header-outline': '#606e85',
      },
      fontFamily: {
        sans: ['Barlow Semi Condensed'],
      },
    },
  },
  plugins: [],
};
