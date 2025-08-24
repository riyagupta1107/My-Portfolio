/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        'tai': ['"Tai Heritage Pro"', 'serif'],
        'myFont': ['"Libre Baskerville"', 'serif'],
      },
      colors: {
        lightGreen: '#f9fbee',
        darkGreen: '#dbe0c2',
        myOrange: '#f4d6a9',
        lightPink: '#feeede',
      },
    },
  },
  plugins: [],
}

