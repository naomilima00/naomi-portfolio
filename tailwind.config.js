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
      '3xl': '2100px' //4k
    },
    colors: {
      'cod-gray': '#2A2F32',
      'jupiter': '#E1E1E1',
      'rosy-brown': '#AC8887',
      'light-pink': '#DDCFCF',
      'arsenic': '#3F4346',
      'black': '#000000',
      'white': '#ffffff'
    },
    fontSize:{
      sm: ['16px', '24px'],
      base: ['20px', '28px'],
      md: ['24px', '32px'],
      lg: ['36px', '44px'],
      xl: ['48px', '56px'],
    },
    extend: {
      transitionProperty: {
        'outline': 'outline-color',
        'background': 'background-image'
      }
    }
  },
  plugins: [],
}

