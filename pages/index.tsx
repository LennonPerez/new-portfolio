import Default from "../layouts/Default";
import HomeSection from "../components/sections/HomeSection";
import Skills from "../components/sections/SkillsSection";
import MyWorkSection from "../components/sections/MyWorkSection";
import ContactSection from "../components/sections/ContactSection";
import ThemesProvider from "../providers/ThemeProvider";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO />
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
