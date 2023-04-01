import Head from "next/head";
import Default from "../layouts/Default";
import HomeSection from "../components/sections/HomeSection";
import Skills from "../components/sections/SkillsSection";
import MyWorkSection from "../components/sections/MyWorkSection";
import ContactSection from "../components/sections/ContactSection";
import ThemesProvider from "../providers/ThemeProvider";

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Front-end Porfolio - Lennon Perez`}</title>
        <meta name="description" content="This is my professional portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemesProvider>
        <Default>
          <HomeSection />
          <Skills />
          <MyWorkSection />
          <ContactSection />
        </Default>
      </ThemesProvider>
    </>
  );
}
