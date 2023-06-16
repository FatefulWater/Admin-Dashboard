// darkmode color
export const tokensDark = {
  background: {
    // shades of black
      100: "#999999",
      200: "#666666",
      300: "#444444",
      400: "#333333",
      500: "#222222",
      600: "#111111"
  },
  primary: {
    // shades of yellow
      100: "#feffd4",
      200: "#fdffa8",
      300: "#fdff7d",
      400: "#fcff51",
      500: "#fbff26",
      600: "#eef200"
  },
  secondary: {
    // shades of green
      100: "#e0ffda",
      200: "#c2ffb5",
      300: "#a3ff8f",
      400: "#85ff6a",
      500: "#66ff45",
      600: "#2cf200"
  }
};

export const tokensLight = {
  background: {
    // shades of white
      100: "#ffffff",
      200: "#efefef",
      300: "#e7e7e7",
      400: "#e3e3e3",
      500: "#eeeeee",
      600: "#cccccc"
  },
  primary: {
    // shades of orange
      100: "#ffdacc",
      200: "#ffb599",
      300: "#ff8f66",
      400: "#ff6a33",
      500: "#ff4500",
      600: "#cc3700"
  },
  secondary: {
    // shades of purple
      100: "#e3ccfd",
      200: "#c799fc",
      300: "#aa66fa",
      400: "#8e33f9",
      500: "#7200f7",
      600: "#5b00c6"
  }
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
          // palette values for dark mode
          background: {
            ...tokensDark.background,
            main: tokensDark.background[600],
            dark: tokensDark.background[500],
            middle: tokensDark.background[400],
            light: tokensDark.background[300],
          },
          primary: {
            ...tokensDark.primary,
            main: tokensDark.primary[500],
            light: tokensDark.primary[300],
          },
          secondary: {
            ...tokensDark.secondary,
            main: tokensDark.secondary[500],
            light: tokensDark.secondary[300],
          },
        }
      : {
        // palette values for light mode
        background: {
          ...tokensLight.background,
          main: tokensLight.background[100],
          dark: tokensLight.background[600],
          middle: tokensLight.background[300],
          light: tokensLight.background[200],
        },
        primary: {
          ...tokensLight.primary,
          main: tokensLight.primary[500],
          light: tokensLight.primary[300],
        },
        secondary: {
          ...tokensLight.secondary,
          main: tokensLight.secondary[500],
          light: tokensLight.secondary[300],
        },
      }),
    },
  };
};