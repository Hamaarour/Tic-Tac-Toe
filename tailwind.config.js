/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yel: "#3f3b00",
        "primary-200": "#D9E2EC",
        "primary-300": "#BCCCDC",
      },
      fontFamily: {
        cursive: ["Caprasimo", "cursive"],
      },
    },
  },
  plugins: [],
};
