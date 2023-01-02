/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainClr': '#eec4dc',
        'subClr': '#e27bb1',
      },
      width: {
        medium: "600px",
      },
    },
  },
  plugins: [],
  
}
