import Image from "next/image";
import Logo from '../../public/img/brand/netflix-logo.svg';
import { FaAngleRight } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      <header className="header bg-header">
        <div className="header-container">
          <div className="header-left">
            <Image
              src={Logo}
              alt="Netflix Logo"
              className="header-logo"
            />
          </div>
          <div className="header-right">
            <button className="header-sign-in-button" type="submit">Sign In</button>
          </div>
        </div>
      </header>
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
        <div className="border-line"></div>
        <section className="trending-now">
          <div className="trending-now-container">
            <div className="trending-now-headline">Trending Now</div>
            <select className="trending-now-select">
              <option label="Philippines" value="local" selected>Philippines</option>
              <option label="Global" value="global">Global</option>
            </select>
            <select className="trending-now-select">
              <option label="Movies" value="localMovies" selected>Movies</option>
              <option label="TV Shows" value="localTV">TV Shows</option>
            </select>
          </div>
        </section>
      </main>
      <footer className=""></footer>
    </div>
  );
}
