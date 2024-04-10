/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-border": "#E6ECEF",
        "color-alt": "#868A8D",
        "color-icon": "#6F7B8D",
        "theme-button-primary": "#1493FE",
        "theme-button-primary-disabled": "#C2CBD1",
        "table-main": "#0A508B",
        "table-border": "#EBEBEB",
      },
    },
  },
  plugins: [],
}
