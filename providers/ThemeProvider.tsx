import {
  ThemeProvider,
  DefaultTheme,
  createGlobalStyle,
} from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scrollbar-width: thin;
    scrollbar-color: #9e9e9e;

    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #fff;
      border-radius: 20px;
    }
  }

  html,
  body {
    color: white;
    background: #202025;
    font-family: ApercuPro, sans-serif;
    scroll-behavior: smooth;
  }
`;

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

const ThemesProvider = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default ThemesProvider;
