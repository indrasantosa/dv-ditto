const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        // Generate colors easily with this tool: https://javisperez.github.io/tailwindcolorshades/
        primary: {
          25: '#bfe1e8',
          50: '#81c4d2',
          75: '#3ca5bd',
          100: '#008caa',
          125: '#01768f',
          150: '#035f73',
          175: '#034554',
        },
        secondary: {
          25: '#C6DED5',
          50: '#8CBCAA',
          75: '#529B80',
          100: '#177B57',
          125: '#03553B',
          150: '#033D2B',
          175: '#03291A',
        },
        tertiary: {
          25: '#eff4d5',
          50: '#dde69e',
          75: '#cede6b',
          100: '#c3d62e',
          125: '#94ac3c',
          150: '#708a3b',
          175: '#4b6730',
        },
        text: {
          primary: '#000000',
          secondary: '#555555',
          tertiary: '#808080',
          support: '#b2b2b2',
          white: '#ffffff',
        },
        border: {
          border1: '#000000',
          border2: '#555555',
          border3: '#808080',
          border4: '#b2b2b2',
          border5: '#eeeeee',
        },
        background: {
          white: '#ffffff',
          grey: '#eeeeee',
        },
        functional: {
          120: '#000000',
          110: '#444444',
          100: '#555555',
          90: '#696969',
          80: '#808080',
          70: '#a9a9a9',
          60: '#c2c2c2',
          50: '#c8c8c8',
          40: '#d6d6d6',
          30: '#e6e6e6',
          20: '#eeeeee',
          10: '#ffffff',
        },
        state: {
          success: '#117345',
          error: '#ba3223',
          info: '#555c61',
          warning: '#9a7900',
          disabled: '#c2c2c2',
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
