/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#F806CC',
        secondary: '#170055',
        blur: '#94a3b8',
        dark: '#334155',
        background1: '#4EEAF6',
        background3: '#34B3F1',
        background4: '#1363DF',
        background5: '#10316B',
        background6: '#525E75',
        gray: '#374151',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
};
