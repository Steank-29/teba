/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teba-primary': '#650018',
        'teba-secondary': '#7A1830',
        'teba-rose': '#B9787D',
        'teba-blush': '#E8C9C7',
        'teba-cream': '#FAF7F2',
        'teba-white-cream': '#FFFDF9',
        'teba-beige': '#C8B8AA',
        'teba-brown': '#705A4D',
        'teba-dark': '#292525',
        'teba-gold': '#C9A35B',
        'teba-white': '#FFFFFF',
        'teba-black': '#000000',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}