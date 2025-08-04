"use client";
import theme from "@/config/theme";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";

type Props = {
  children?: React.ReactNode;
};

function ThemeProvider({ children }: Props) {
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
}

export default ThemeProvider;
