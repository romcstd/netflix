import Header from "@/app/components/Header";
import HomeHeroBanner from "@/app/components/Home/HomeHeroBanner";
import HomeBannerOne from "@/app/components/Home/HomeBannerOne";
import HomeBannerTwo from "@/app/components/Home/HomeBannerTwo";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HomeHeroBanner />
      <HomeBannerOne />
      <HomeBannerTwo />
      <Footer />
    </>
  );
}