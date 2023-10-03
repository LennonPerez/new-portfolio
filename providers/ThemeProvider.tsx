import {
  ThemeProvider,
  DefaultTheme,
  createGlobalStyle,
} from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primaryBgColor: "#202025",
    secondaryBgColor: "#303036",
    tertiaryBgColor: "#7856ff",
    fourthBgColor: "#fcfcfc",
    textPrimaryColor: "#fff",
    textSecondaryColor: "#9e9e9e",
    textTertiaryColor: "#1f1f24",
    textFourthColor: '#dfdfdf',
    focusedBorderColor: '#8a8a8a',
  },
};

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    scrollbar-width: thin;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: 5px;
      background-color: ${({ theme }) => theme.colors.primaryBgColor};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.textSecondaryColor};
    }
  }

  html,
  body {
    color: ${({ theme }) => theme.colors.textPrimaryColor};
    background-color: ${({ theme }) => theme.colors.primaryBgColor};
    font-family: ApercuPro, sans-serif;
    scroll-behavior: smooth;
  }
`;

const ThemesProvider = ({ children }: { children: any }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default ThemesProvider;
