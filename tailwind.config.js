/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'shoulder': ['Big Shoulders Display', 'cursive'],
        'lexend': ['Lexend Deca', 'sans-serif']
      },
      colors:{
        'bright-orange':'hsl(31, 77%, 52%)',
        'dark-cyan':'hsl(184, 100%, 22%)',
        'very-dark-cyan':'hsl(179, 100%, 13%)',
      }
    },
  },
  plugins: [],
}

