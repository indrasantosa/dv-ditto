module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
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
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
