const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        // Generate colors easily with this tool: https://javisperez.github.io/tailwindcolorshades/
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
        tertiary: {
          10: '#fafafa',
          20: '#f3f3f3',
          40: '#eeeeee',
          60: '#e6e6e6',
          80: '#d6d6d6',
          100: '#c8c8c8',
        },
        background: {
          white: '#ffffff',
          grey: '#eeeeee',
        },
        functional: {
          120: '#444444',
          110: '#555555',
          100: '#696969',
          90: '#808080',
          80: '#a9a9a9',
          70: '#c2c2c2',
          60: '#c8c8c8',
          50: '#d6d6d6',
          40: '#e6e6e6',
          30: '#eeeeee',
          20: '#f7f7f8',
          10: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
        15: '3.75rem',
        16: '4rem',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
