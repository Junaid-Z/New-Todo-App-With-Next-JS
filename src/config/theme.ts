import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#63c1ff",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "hsla(229, 71%, 42%, 1.00)"
        },
      },
    },
  },
});

export default theme;
