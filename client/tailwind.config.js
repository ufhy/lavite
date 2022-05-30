const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  prefix: 'tw-',
  darkMode: 'class',
  theme: {
    fontWeight: {
      thin: '100',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      black: '900',
    },
    extend: {
      fontFamily: {
        sans: ['Jost', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
