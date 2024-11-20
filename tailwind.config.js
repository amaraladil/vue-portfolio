const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "electric-violet": {
          DEFAULT: "#9144EF",
          50: "#F4EDFD",
          100: "#E9DAFC",
          200: "#D3B5F9",
          300: "#BD8FF5",
          400: "#A76AF2",
          500: "#9144EF",
          600: "#7314E7",
          700: "#590FB3",
          800: "#400B80",
          900: "#26074C",
          950: "#190432",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
