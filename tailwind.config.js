module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'lg': '100%', // => @media (min-width: 1200px) { ... }
      'xl': '1920px', // => @media (min-width: 1920px) { ... }
    },
    container: {
        screens: {
            'lg': '100%',
            'xl': '1920px',
        },
    },
    minWidth: {
      '1200': '1200px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white' : '#ffffff'
    },
    extend: {

    }
  },
}