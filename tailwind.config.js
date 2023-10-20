/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
      'darkgray': 'hsl(0, 0%, 63%)',
      'verydark': 'hsl(0, 0%, 27%)',
      }
    },
  },
  plugins: [],
}

