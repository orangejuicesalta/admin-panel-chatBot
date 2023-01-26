/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "screen-bg": "#E5E5E5",
        "primary-color": "#004EFF",
        "main-dark": "#000000",
        "gray-label": "#727272",
        "my-purple": "#6A4DFF",
        "chat-bubble": "#EFEFEF",
        "darker-gray": "#ABABAB",
        "gray-bg": "rgba(171, 171, 171, 0.33)",
        "secondary-blue": "#3C78FF",
        "primary-orange": "#F6B445",
      },
      screens: {
        xxxl: "1440px",
      },
      gridTemplateColumns: {
        template: "218px 1fr",
      },
    },
  },
  plugins: [],
};
