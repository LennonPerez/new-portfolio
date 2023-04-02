import { ThemeProvider, DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primaryBgColor: "#202025",
    secondaryBgColor: "#303036",
    tertiaryBgColor: "#7856ff",
    fourthBgColor: "#fcfcfc",
    textPrimaryColor: "#fff",
    textSecondaryColor: "#9e9e9e",
    textTertiaryColor: "#1f1f24",
  },
};

const ThemesProvider = ({ children }: { children: JSX.Element }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemesProvider;
