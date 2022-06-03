module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#0c233f",
          secondary: "#20a6ff",
          accent: "#114373",
          neutral: "#00CBFF",
          "base-100": "#ffffff",
        },
      },
      "",
    ],
  },
}