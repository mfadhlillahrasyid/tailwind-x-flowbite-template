/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html"  
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundColor: {
        'glass': 'rgba(255, 255, 255, 0.7)',
      },
      backdropBlur: {
        'none': '0',
        'sm': '4px',
        'md': '10px',
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/forms'),
  ],
}