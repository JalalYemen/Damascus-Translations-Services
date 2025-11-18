/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a", // Blue-800
        accent: "#47310bff",  // Amber-500
      }
    }
  },
  plugins: []
};
