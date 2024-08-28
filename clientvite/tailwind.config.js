/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gemini-start': '#f54272',  // Example start color
        'gemini-end': '#5742f5',    // Example end color
      },
      animation: {
        'text-gradient': 'gradient 5s linear infinite',
        'text-flip': 'flip 5s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

