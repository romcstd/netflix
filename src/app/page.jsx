"use client"
import Image from "next/image";
import Logo from '../../public/img/brand/netflix-logo.svg';
import Top10Logo from '../../public/img/top-10/Top10Badge.svg';
import { FaAngleRight } from "react-icons/fa6";
import { useState, useMemo, useEffect } from "react";

import countries from "./api/countries.json"
import entertainments from "./api/entertainments.json"
import shows from "./api/shows.json"

export default function Home() {
  // State to track selected country and entertainment
  const [selectedCountry, setSelectedCountry] = useState(countries[0].value);
  const [selectedEntertainment, setSelectedEntertainment] = useState(entertainments[0].value);

  // Filter entertainments based on selected country
  const filteredEntertainment = useMemo(() => {
    return entertainments.filter((ent) => ent.country === selectedCountry);
  }, [selectedCountry]);

  // Derive the entertainment name based on selected entertainment value
  const selectedEntertainmentName = useMemo(() => {
    const match = filteredEntertainment.find(ent => ent.value === selectedEntertainment);
    return match ? match.name : '';
  }, [filteredEntertainment, selectedEntertainment]);

  // Automatically set the first available entertainment type when country changes
  useEffect(() => {
    if (filteredEntertainment.length > 0) {
      setSelectedEntertainment(filteredEntertainment[0].value);
    }
  }, [filteredEntertainment])

  // Get the shows for the currently selected entertainment
  const data = useMemo(() => {
    return shows.entertainment[selectedEntertainment] || [];
  }, [selectedEntertainment]);


  const getTop10Headline = () => {
    switch (selectedCountry) {
      case "philippines":
        return `Top 10 ${selectedEntertainmentName} in ${selectedCountry}`;
      default:
        return `${selectedCountry} Top 10 ${selectedEntertainmentName}`;
    }
  };

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
        <section className="top-10">
          <div className="top-10-category">
            <div className="top-10-category-container">
              <Image
                src={Top10Logo}
                alt="Netflix Top 10 Logo"
                className="top-10-category-logo"
                width={40}
              />
              <div className="top-10-category-select-wrapper">
                <select value={selectedCountry} className="top-10-category-select" onChange={(e) => setSelectedCountry(e.target.value)}>
                  {countries.map((country) => (
                    <option key={country.id} label={country.name} value={country.value} name={country.name}>{country.name}</option>
                  ))}
                </select>
                <div className="top-10-category-select-icon-wrapper">
                  <svg className="top-10-category-select-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div className="top-10-category-select-wrapper">
                <select value={selectedEntertainment} className="top-10-category-select" onChange={(e) => setSelectedEntertainment(e.target.value)}>
                  {filteredEntertainment.map((entertainment) => (
                    <option key={entertainment.id} label={entertainment.name} value={entertainment.value} name={entertainment.name}>{entertainment.name}</option>
                  ))}
                </select>
                <div className="top-10-category-select-icon-wrapper">
                  <svg className="top-10-category-select-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="top-10-headline">
            <div className="top-10-headline-container">
              {getTop10Headline()}
            </div>
          </div>
          <div className="top-10-cards">
            <div className="top-10-cards-container">
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
