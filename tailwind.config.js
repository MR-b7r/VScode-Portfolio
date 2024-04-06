/** @type {import('tailwindcss').Config} */
const { createThemes } = require("tw-colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "480px",
      },
    },
  },
  plugins: [
    createThemes({
      github: {
        mainBg: "#24292e",
        bgText: "rgba(56, 58, 61, 0.35)",
        textColor: "#efefef",
        accentColor: "#f9826c",
        titlebarBg: "#1f2428",
        sidebarBg: "#24292e",
        sidebarHoverBg: "#1f2428",
        explorerBg: "#1f2428",
        explorerHoverBg: "#24292e",
        explorerBorder: "#161a1d",
        tabsBg: "#1f2428",
        tabBg: "#1f2428",
        tabActiveBg: "#24292e",
        tabBorder: "#24292e",
        bottombarBg: "#24292e",
        bottombarBorder: "#1b1f23",
        buttonBg: "#176f2c",
        buttonText: "#dcffe4",
        bottombarHoverBg: "#4f4f52",
        scrollbarTrackBg: "#24292e",
        scrollbarThumbBg: "#333536",
        articleBg: "#1f2428",
      },
      dracula: {
        mainBg: "#282a36",
        bgText: "#313340",
        textColor: "#efefef",
        accentColor: "#bd93f9",
        titlebarBg: "#1e1f29",
        sidebarBg: "#343746",
        sidebarHoverBg: "#3c3d51",
        explorerBg: "#21222c",
        explorerHoverBg: "#313241",
        explorerBorder: "#161a1d",
        tabsBg: "#191a21",
        tabBg: "#21222c",
        tabActiveBg: "#282a36",
        tabBorder: "#191a21",
        bottombarBg: "#191a21",
        bottombarBorder: "#191a21",
        buttonBg: "#44475a",
        buttonText: "#f8f8f2",
        bottombarHoverBg: "#4f4f52",
        scrollbarTrackBg: "#282a36",
        scrollbarThumbBg: "#454647",
        articleBg: "#21222c",
      },
      ayuDark: {
        mainBg: "#0a0e14",
        bgText: "#101620",
        textColor: "#efefef",
        accentColor: "#e6b450",
        titlebarBg: "#1f2428",
        sidebarBg: "#0a0e14",
        sidebarHoverBg: "#00010a",
        explorerBg: "#0a0e14",
        explorerHoverBg: "#00010a",
        explorerBorder: "transparent",
        tabsBg: "#0a0e14",
        tabBg: "#0a0e14",
        tabActiveBg: "#0a0e14",
        tabBorder: "transparent",
        bottombarBg: "#0a0e14",
        bottombarBorder: "transparent",
        buttonBg: "#e6b450",
        buttonText: "#0a0e14",
        bottombarHoverBg: "#4f4f52",
        scrollbarTrackBg: "#0a0e14",
        scrollbarThumbBg: "#454647",
        articleBg: "#10121a",
      },
      ayuMirage: {
        mainBg: "#1f2430",
        bgText: "#21242b",
        textColor: "#efefef",
        accentColor: "#e6b450",
        titlebarBg: "#1f2428",
        sidebarBg: "#1f2430",
        sidebarHoverBg: "#191e2a",
        explorerBg: "#1f2430",
        explorerHoverBg: "#191e2a",
        explorerBorder: "transparent",
        tabsBg: "#1f2430",
        tabBg: "#1f2430",
        tabActiveBg: "#1f2430",
        tabBorder: "transparent",
        bottombarBg: "#1f2430",
        bottombarBorder: "transparent",
        buttonBg: "#e6b450",
        buttonText: "#1f2430",
        bottombarHoverBg: "#4f4f52",
        scrollbarTrackBg: "#1f2430",
        scrollbarThumbBg: "#454647",
        articleBg: "#252e3d",
      },
      nord: {
        mainBg: "#2e3440",
        bgText: "#3b414d",
        textColor: "#efefef",
        accentColor: "#88c0d0",
        titlebarBg: "#1f2428",
        sidebarBg: "#2e3440",
        sidebarHoverBg: "#434c5e",
        explorerBg: "#2e3440",
        explorerHoverBg: "#434c5e",
        explorerBorder: "rgba(136, 192, 208, 0.2)",
        tabsBg: "#2e3440",
        tabBg: "#2e3440",
        tabActiveBg: "#3b4252",
        tabBorder: "transparent",
        bottombarBg: "#3b4252",
        bottombarBorder: "transparent",
        buttonBg: "#434c5e",
        buttonText: "#d8dee9",
        bottombarHoverBg: "#4f4f52",
        scrollbarTrackBg: "#2e3440",
        scrollbarThumbBg: "#454647",
        articleBg: "#363f50",
      },
      nightOwl: {
        mainBg: "#011627",
        bgText: "#031d33",
        textColor: "#89a4bb",
        accentColor: "rgb(95, 126, 151)",
        titlebarBg: "#011627",
        sidebarBg: "#011627",
        sidebarHoverBg: "#0e293f",
        explorerBg: "#011627",
        explorerHoverBg: "#0e293f",
        explorerBorder: "transparent",
        tabsBg: "#011627",
        tabBg: "#01111d",
        tabActiveBg: "#0b2942",
        tabBorder: "rgb(39, 43, 59)",
        bottombarBg: "#011627",
        bottombarBorder: "#262a39",
        buttonBg: "rgb(95, 126, 151)",
        buttonText: "#fff",
        bottombarHoverBg: "#1b222f",
        scrollbarTrackBg: "#011627",
        scrollbarThumbBg: "#043254",
        articleBg: "#031d33",
      },
    }),
  ],
};
