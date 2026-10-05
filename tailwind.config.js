/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'Manrope', 'Arial', 'sans-serif'],
      },
      colors: { forest: '#102A20', deep: '#0B2119', cream: '#F5F1E8', sand: '#D8C49A', copper: '#B77B45', moss: '#667A52' },
    },
  },
  plugins: [],
};
