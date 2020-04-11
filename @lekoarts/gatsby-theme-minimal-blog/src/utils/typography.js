import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 400,
  headerFontFamily: ["tangerine", "serif"],
  bodyFontFamily: ["tangerine", "sans-serif"]
});

// Insert styles directly into the <head>
typography.injectStyles();

export default typography;