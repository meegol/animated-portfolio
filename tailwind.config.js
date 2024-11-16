/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#1a1816',
          100: '#231f1d',
          200: '#2b2725',
          300: '#332f2d',
          400: '#3f3a37',
          500: '#4a4441',
          600: '#574f4b',
          700: '#665c57',
          800: '#776c66',
          900: '#8c7f78',
        },
        terracotta: '#8b4513',
        sage: '#4a5d32',
        sand: '#8b7355',
        clay: '#804d3f',
        accent: {
          100: '#d4b483',
          200: '#b56357',
          300: '#8a9a5b',
        }
      },
    },
  },
  plugins: [],
};