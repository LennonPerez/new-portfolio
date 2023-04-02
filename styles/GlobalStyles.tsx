import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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

export default GlobalStyle;
