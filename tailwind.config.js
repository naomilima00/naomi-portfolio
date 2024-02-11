/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{html,ts}'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'cod-gray': '#2A2F32',
      'jupiter': '#E1E1E1',
      'rosy-brown': '#AC8887',
      'black': '#000000'
    },
    fontSize:{
      sm: ['16px', '24px'],
      base: ['20px', '28px'],
      md: ['24px', '32px'],
      lg: ['36px', '44px'],
      xl: ['48px', '56px'],
    }
  },
  plugins: [],
}

