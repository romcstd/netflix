import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import HomeBanner from "@/app/components/HomeBanner";
import Top10Carousel from "./components/Top10Carousel";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HomeBanner />
        <div className="border-line" />
        <Top10Carousel />
      </main>
      <Footer />
    </div>
  );
}