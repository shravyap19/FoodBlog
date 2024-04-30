/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "custom-height": "68vh",
      },
      gridTemplateColumns: {
        "auto-fit-minmax": "repeat(auto-fit, minmax(100px, 1fr))",
      },
      zIndex: {
        highest: "1000",
      },
      colors: {
        "custom-bg-color-desc": "#F2F2F2",
      },
    },
  },
  plugins: [],
};
