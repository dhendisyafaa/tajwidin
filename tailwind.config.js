/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1F1F1F",
        grey: "#8E8E8E",
        light: "#EDF1D6",
        green: "#9DC08B",
        lightGreen: "#9DC08B",
        darkGreen: "#40513B",
      },
    },
  },
  plugins: [],
};
