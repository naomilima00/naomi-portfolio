/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{html,ts}'],
  theme: {
    colors: {
      'cod-gray': '#2A2F32',
      'jupiter': '#E1E1E1'
    },
    fontSize:{
      sm: ['16px', '24px'],
      base: ['20px', '28px'],
      lg: ['36px', '44px'],
      xl: ['48px', '56px'],
    }
  },
  plugins: [],
}

