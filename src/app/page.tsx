import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import HomeBanner from "@/app/components/HomeBanner";
import Top10Carousel from "@/app/components/Top10Carousel"

export default function Home() {
  return (
    <div>
      <main>
        <Top10Carousel />
      </main>
      <Footer />
    </div>
  );
}