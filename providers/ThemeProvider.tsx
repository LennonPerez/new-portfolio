import { ThemeProvider } from "styled-components";

const theme = {
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

const ThemesProvider = ({ children }: { children: any }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemesProvider;
