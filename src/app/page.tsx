import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import HomeBanner from "@/app/components/HomeBanner";
import Top10Swiper from "@/app/components/Top10Swiper"

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HomeBanner />
        <div className="border-line" />
        <Top10Swiper />
      </main>
      <Footer />
    </div>
  );
}