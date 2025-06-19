// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        marker: ['"LXGW Marker Gothic"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};