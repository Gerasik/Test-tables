/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "640px",
      tablet: "768px",
      desktop: "1024px",
    },
    extend: {
      colors: {
        "theme-border": "#E6ECEF",
        "theme-red": "#EB5E58",
        "color-alt": "#868A8D",
        "color-icon": "#6F7B8D",
        "theme-button-primary": "#1493FE",
        "theme-button-primary-disabled": "#C2CBD1",
        "table-main": "#0A508B",
        "table-border": "#EBEBEB",
        "table-button-primary": "#057AE3",
        "table-button-dangerous": "#B0263D",
      },
    },
  },
  plugins: [],
}
