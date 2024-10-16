// import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      <main>
        <section className="home-banner h-screen">
          <div className="home-banner-content">
            <div className="home-banner-content-wrapper">
              <div className="home-banner-content-headline">Unlimited movies, TV shows, and more</div>
              <div className="home-banner-content-subheadline">Starts at ₱149. Cancel anytime.</div>
              <div className="home-banner-content-description">Ready to watch? Enter your email to create or restart your membership.</div>
              <form className="home-banner-content-form">
                <input className="home-banner-content-form-text-field" placeholder="Email Address"/>
                <button className="home-banner-content-form-button" type="submit">Get Started <FaAngleRight className="ml-2 "/></button>
              </form>
            </div>
          </div>
          <div className="home-banner-content-background"></div>
        </section>
      </main>
      <footer className=""></footer>
    </div>
  );
}
