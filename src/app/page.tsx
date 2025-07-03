// import ThemeToggle from "@/app/components/ThemeToggle";
import Top10Carousel from "@/app/components/Top10/Top10Carousel";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      {/* <ThemeToggle />
      <div className="bg-white text-black dark:bg-black dark:text-white">
        Hello, themed world!
      </div> */}
      <Top10Carousel />
      <Footer />
    </>
  );
}