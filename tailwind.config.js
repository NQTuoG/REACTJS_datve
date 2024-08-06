/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },

    extend: {
      fontFamily: {
        avenger: ["SVN Avengeance", "sans-serif"],
      },
    },
  },
  plugins: [],
};
