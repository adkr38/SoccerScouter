/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'fade-out-semi': {
          '0%': { opacity: '20%' },
          '100%': { opacity: '2%' },
        },

        'fade-out': {
          '0%': { opacity: '100%' },
          '100%': { opacity: '0%' },
        },

        'fade-in': {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
    },
      animation: {
        'fade-out-semi': 'fade-out-semi 2.5s ease-in-out',
        'fade-out': 'fade-out 1s ease-in-out',
        'fade-in': 'fade-in 1s ease-in-out',
      },
  },
  plugins: [],
}
}

