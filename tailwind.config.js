module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      scrollSnapType: {
        x: 'x',
        y: 'y',
        both: 'both',
        none: 'none',
      },
      scrollSnapAlign: {
        start: 'start',
        end: 'end',
        center: 'center',
      },
    },
  },
  variants: {
    scrollSnapType: ['responsive'],
    extend: {},
  },
  plugins: [
    require('tailwindcss-scroll-snap'),
  ],
}