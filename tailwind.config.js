/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'safira-march': '"safira march"',
        'creato-display': '"creato display"'
      },
    },
    container: {
      center: true
    }
  },
  plugins: [],
}

