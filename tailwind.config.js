/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#f6f8fa',
          200: '#e5e7eb',
          800: '#1f2937',
        }
      }
    },
  },
  plugins: [],
} 