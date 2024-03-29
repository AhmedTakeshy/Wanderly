/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgProfile: "url(/src/assets/borabora2.jpg)",
      },
      colors: {
        primary: "#6D40D7",
        secondary: "#73d7ff",
        custom_purple: "#5651e5",
      },
    },
  },
  plugins: [],
};
