/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'xxl': '1.5rem', // You can adjust the size as needed
      },
    },
  },
  plugins: [],
}