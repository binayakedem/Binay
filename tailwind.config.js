/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky-blue': '#2A9DF4',
        'leaf-green': '#28A745',
        'dark-slate': '#2C3E50',
        'light-gray': '#ECF0F1',
        'warm-orange': '#F39C12',
      },
      fontFamily: {
        'sans': ['Open Sans', 'Arial', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
      },
      active: {
        color: 'text-warm-orange',
        fontWeight: 'bold',
      },
    },
  },
  plugins: [],
}