/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      zIndex: {
        super: "999999",
      },
      fontFamily: {
        "iran-sans": ["IranSans"],
      },
      colors: {
        Headers: "#292929",
        word: "#898989",
        wordBold: "#58595B",
        hover: "#FFFFFF",
        footer: "#EEEFEF",
        footRED: "#ED1C24",
        gradient1: "#F6F5F6",
        gradient2: "#DADADA",
        wRed: "#FF0100",
        label: "#E9D69F",
        greenB: "#CDE4B0",
        greenSocial: "#105153",
        blueSocial: "#07787C",
        blueBrightSocial: "#00D8DF",
        backGrey1: "#F2F2F2",
        backGrey2: "#DADADA",
      },
      screens: {
        xs: "375px",
        md: "576px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
};
