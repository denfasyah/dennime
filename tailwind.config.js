/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "100px",
    },
    extend: {
      colors: {
        Grey: "#222430",
        Purple: "#bf8cfa",
        White: "#fefffd",
        Background: "#1a1d26",
      },
    },
  },
  plugins: [require("daisyui")],
};
