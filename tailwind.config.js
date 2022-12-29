/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bluegray: "#242B2E",
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif']
      },
    }, 
  },
  plugins: [],
};
