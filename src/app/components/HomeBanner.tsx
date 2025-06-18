export default function HomeBanner() {
  return (
    <section className="home-banner h-screen">
      <div className="home-banner-content">
        <div className="home-banner-content-wrapper">
          <div className="home-banner-content-headline">
            Unlimited movies, TV shows, and more
          </div>
          <div className="home-banner-content-subheadline">
            Starts at ₱149. Cancel anytime.
          </div>
          <div className="home-banner-content-description">
            Ready to watch? Enter your email to create or restart your membership.
          </div>
          <form className="home-banner-content-form">
            <input
              className="home-banner-content-form-text-field"
              placeholder="Email Address"
            />
            <button className="home-banner-content-form-button" type="submit">
              Get Started
            </button>
          </form>
        </div>
      </div>
      <div className="home-banner-content-background" />
    </section>
  );
}