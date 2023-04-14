/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'dark-blue': {
        100: '#609ED4',
        200: '#356EA9',
        300: '#0A3871',
        400: '#072B61',
        500: '#052051',
      },
      'gray': {
        100: '#CED4DA',
        200: '#ADB5BD',
        300: '#868E96',
        400: '#495057',
        500: '#343A40',
      },
      'light-blue': {
        100: '#F3F5FC',
        200: '#EFF1FA',
        300: '#E9ECF8',
        400: '#AAB2D5',
        500: '#757FB2',
      },
      extend: {
      },
    },
    plugins: [],
  }
}
