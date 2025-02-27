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
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
