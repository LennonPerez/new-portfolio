import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primaryBgColor: string;
      secondaryBgColor: string;
      tertiaryBgColor: string;
      fourthBgColor: string;
      textPrimaryColor: string;
      textSecondaryColor: string;
      textTertiaryColor: string;
      textFourthColor: string;
      focusedBorderColor: string,
      // button: {
      //   primary: {
      //     backgroundColor: string,
      //     borderColor: string,
      //     textColor: string,
      //     hoverBackgroundColor: string,
      //     hoverBorderColor: string,
      //     hoverTextColor: string,
      //   }
      // }
    };
  }
}
