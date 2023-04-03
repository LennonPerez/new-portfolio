import "../styles/global.css";
import "../styles/fonts.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import ThemesProvider from "../providers/ThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemesProvider>
      <Component {...pageProps} />
      <Analytics />
    </ThemesProvider>
  );
}
