/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        orange: "#f69517",
        gray: "#d9d9d9",
        darkgray: "#555",
        lightgray: "#bbb",
        red: "#ec1d1d",
      },
      space: {
        sm: "15px",
        md: "30px",
        lg: "40px",
        "4xl": "600px",
      },
      width: {
        "4xl": "600px",
      },
      height: {
        "3xl": "300px",
      },
    },
  },
  plugins: [],
};
