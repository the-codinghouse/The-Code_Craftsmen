/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"], // Include .vue files
  theme: {
    extend: {
      colors: {
        // Primary
        'craftsman-dark': {
          900: '#1A1A1A',  // Base
          800: '#2D2D2D',  // Lighter surfaces
          500: '#515151',  // Lighter surfaces
        },
        // 'craftsman-amber': {
        //   500: '#FFB300',  // Base
        //   600: '#E69900',  // Hover
        // },
        // // Secondary
        // 'craftsman-teal': {
        //   400: '#38B2AC',  // Base
        //   500: '#319795',  // Hover
        // },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
