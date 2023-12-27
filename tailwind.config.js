/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-color": "#e8f1fd",
        "task-background-color": "#f6faff",
        "button-background-color": "#6a6ce0",
        "red-color": "#f48686",
        "border-background-color": "rgba(106, 108, 224, 0.3)",
        "white-color": "#fff",
        "inactive-icon-color": "#D8D8D8",
        "dark-gray": "#27374D",
        "dark-todo": "#9DB2BF",
        "dark-icon": "#116D6E",
        "inactive-icon-color-dark": "#9DB2BF",
      },
    },
  },
  // eslint-disable-next-line
  plugins: [require("daisyui")],
  darkMode: "class",
};
