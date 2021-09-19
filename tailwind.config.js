const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ['Roboto Sans', ...fontFamily.sans],
      },
      colors: {
        primary: {
          300: '#f6904e',
          400: '#f58238',
          500: '#f47522',
          600: '#db691e',
        },
        secondary: {
          300: '#465c7e',
          400: '#2f486e',
          500: '#19345e',
        },
        dark: '#333333',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
