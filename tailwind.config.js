/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainClr': '#EBF2FC',
        'subClr': '#003dcb',
      },
      width: {
        medium: "600px",
      },
    },
  },
  plugins: [],
  
}
