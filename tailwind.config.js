/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        colorPrimary: "rgba(0, 63, 111, 1)", // blue dark 003F6F
        colorSecondary: "rgba(50, 47, 55, 1)", // dark text color 322F37
        colorTertiary: "rgba(0, 63, 111, 1)", // icon color 003F6F
        colorLightTertiary: "rgba(138, 131, 148, 1)", // light text color 8A8394
        colorBlack: "rgba(0,0,0)", // black
        colorWhite: "rgba(255, 255, 255, 1)", // white
      },
    },
  },
  plugins: [],
};
