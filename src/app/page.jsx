"use client"
import Image from "next/image";
import Logo from '../../public/img/brand/netflix-logo.svg';
import { FaAngleRight } from "react-icons/fa6";
import { useState, useMemo, useEffect } from "react";

import countries from "./api/countries.json"
import entertainments from "./api/entertainments.json"
import shows from "./api/trending/local/shows.json"

export default function Home() {

  const [selectedCountry, setSelectedCountry] = useState(countries[0].value);
  const [selectedEntertainment, setSelectedEntertainment] = useState("");

  // Filter entertainments by selected country
  const filteredEntertainment = useMemo(() => {
    return entertainments.filter((ent) => ent.country === selectedCountry);
  }, [selectedCountry]);

  useEffect(() => {
    if (filteredEntertainment.length > 0) {
      setSelectedEntertainment(filteredEntertainment[0].value);
    }
  }, [filteredEntertainment])

  const data = useMemo(() => {
    return shows.entertainment[selectedEntertainment] || [];
  }, [selectedEntertainment]);

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
                <input className="home-banner-content-form-text-field" placeholder="Email Address" />
                <button className="home-banner-content-form-button" type="submit">Get Started <FaAngleRight className="ml-2 " /></button>
              </form>
            </div>
          </div>
          <div className="home-banner-content-background"></div>
        </section>
        <div className="border-line"></div>
        <section className="trending-now">
          <div className="trending-now-container">
            <div className="trending-now-headline">Trending Now</div>
            <select value={selectedCountry} className="trending-now-select" onChange={(e) => setSelectedCountry(e.target.value)}>
              {countries.map((country) => (
                <option key={country.id} label={country.name} value={country.value} name={country.name}>{country.name}</option>
              ))}
            </select>
            <select value={selectedEntertainment} className="trending-now-select" onChange={(e) => setSelectedEntertainment(e.target.value)}>
              {filteredEntertainment.map((entertainment) => (
                <option key={entertainment.id} label={entertainment.name} value={entertainment.value} name={entertainment.name}>{entertainment.name}</option>
              ))}
            </select>
            <div className="mt-8">
              {data?.map((data) => (
                <div key={data.id}>{data.name}</div>
              ))}
            </div>
          </div>

        </section>
      </main>
      <footer className=""></footer>
    </div>
  );
}