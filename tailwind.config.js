import scrollbarPlugin from 'tailwind-scrollbar'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        trebuchet: [
          '"Trebuchet MS"',
          '"Lucida Sans Unicode"',
          '"Lucida Grande"',
          '"Lucida Sans"',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [scrollbarPlugin],
}
