import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: "#E6FBFC",
          paper: "#E6FBFC",
        },
        primary: {
          main: "#0B6687",
        },
        secondary: {
          main: "#C95F18",
        },
      },
    },
    dark: {
      palette: {
        background: {
          default: "#032842",
          paper: "#032842",
        },
        primary: {
          main: "#1ED0E0",
        },
        secondary: {
          main: "#E06E1D",
        },
      },
    },
  },
});

export default theme;
