import Header from "@/app/components/Header";
import HomeHeroBanner from "@/app/components/Home/HomeHeroBanner";
import Top10 from "@/app/components/Top10/Top10";
import HomeSectionOne from "@/app/components/Home/HomeSectionOne";
import HomeSectionTwo from "@/app/components/Home/HomeSectionTwo";
import FAQAccordion from "@/app/components/FAQAccordion";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HomeHeroBanner />
      <Top10 />
      <HomeSectionOne />
      <HomeSectionTwo />
      <FAQAccordion />
      <Footer />
    </>
  );
}