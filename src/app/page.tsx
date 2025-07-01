import Footer from "@/app/components/Footer";
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