import Head from "next/head";
import Default from "../layouts/Default";
import HomeSection from "../components/sections/HomeSection";
import Skills from "../components/sections/SkillsSection";
import MyWorkSection from "../components/sections/MyWorkSection";
import ContactSection from "../components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Lennon Perez's Porfolio`}</title>
        <meta name="description" content="This is my professional portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Default>
        <HomeSection />
        <Skills />
        <MyWorkSection />
        <ContactSection />
      </Default>
    </>
  );
}
