const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        // Generate colors easily with this tool: https://javisperez.github.io/tailwindcolorshades/
        mono: {
          0: '#ffffff',
          10: '#f7f7f8',
          20: '#eeeeee',
          30: '#d6d6d6',
          40: '#c8c8c8',
          60: '#969696',
          80: '#444444',
          100: '#000000',
        },
        primary: {
          10: '#c2c2c2',
          20: '#a9a9a9',
          40: '#808080',
          60: '#696969',
          80: '#444444',
          100: '#000000',
        },
        secondary: {
          10: '#efefef',
          20: '#dddddd',
          40: '#cfcfcf',
          60: '#bdbdbd',
          80: '#9e9e9e',
          100: '#808080',
        },
      },
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
