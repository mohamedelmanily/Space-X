/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: { default: "1rem", sm: "2rem" },
      },
      screens: {
        'max-sm': {'max': '640px'},
      }
    },
  },
  variants: {
    display: ['responsive', 'max-sm'],
  },
  plugins: [],
};
