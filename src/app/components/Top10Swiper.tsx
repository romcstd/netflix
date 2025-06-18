"use client";

import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa6";
import { useState, useMemo, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Spinner from "./Spinner";

// JSON data imports
import countries from "@/app/data/countries.json"
import entertainments from "@/app/data/entertainments.json";
import shows from "@/app/data/shows.json";

// Define types
type Country = {
    id: number;
    name: string;
    value: string;
};

type Entertainment = {
    id: number;
    name: string;
    value: string;
    country: string;
};

type ShowItem = {
    id: number;
    imgCard: string;
};

export default function Top10Swiper() {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const [selectedCountry, setSelectedCountry] = useState<string>(countries[0].value);
    const [selectedEntertainment, setSelectedEntertainment] = useState<string>(entertainments[0].value);

    // Filter entertainments for selected country
    const filteredEntertainment = useMemo(() => {
        return entertainments.filter((ent: Entertainment) => ent.country === selectedCountry);
    }, [selectedCountry]);

    // Get the name for the selected entertainment
    const selectedEntertainmentName = useMemo(() => {
        const match = filteredEntertainment.find((ent) => ent.value === selectedEntertainment);
        return match ? match.name : '';
    }, [filteredEntertainment, selectedEntertainment]);

    // Auto-set first available entertainment when country changes
    useEffect(() => {
        if (filteredEntertainment.length > 0) {
            setSelectedEntertainment(filteredEntertainment[0].value);
        }
    }, [filteredEntertainment]);

    // Get shows for selected entertainment
    const data: ShowItem[] = useMemo(() => {
        return shows.entertainment[selectedEntertainment] || [];
    }, [selectedEntertainment]);

    useEffect(() => {
        // Simulate fetch delay or data prep
        const timeout = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timeout);
    }, []);

    // Headline based on country
    const getTop10Headline = () => {
        switch (selectedCountry) {
            case "philippines":
                return <>Top 10 {selectedEntertainmentName} in {selectedCountry}</>;
            default:
                return <>{selectedCountry} Top 10 {selectedEntertainmentName}</>;
        }
    };

    // Sync Swiper state to navigation button enable/disable
    const handleSwiper = (swiper: any) => {
        swiper.on("slideChange", () => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
        });
    };

    return (
        <section className="top-10">
            {/* Dropdowns */}
            <div className="top-10-category">
                <div className="top-10-category-container">
                    <Image src="/img/top-10/Top10Badge.svg" alt="Netflix Top 10 Logo" className="top-10-category-logo" width={40} height={47} />
                    {/* Country Selector */}
                    <div className="top-10-category-select-wrapper">
                        <select
                            value={selectedCountry}
                            className="top-10-category-select"
                            onChange={(e) => setSelectedCountry(e.target.value)}
                        >
                            {countries.map((country: Country) => (
                                <option key={country.id} value={country.value}>{country.name}</option>
                            ))}
                        </select>
                        <div className="top-10-category-select-icon-wrapper">
                            <FaChevronDown className="top-10-category-select-icon" />
                        </div>
                    </div>
                    {/* Entertainment Selector */}
                    <div className="top-10-category-select-wrapper">
                        <select
                            value={selectedEntertainment}
                            className="top-10-category-select"
                            onChange={(e) => setSelectedEntertainment(e.target.value)}
                        >
                            {filteredEntertainment.map((entertainment: Entertainment) => (
                                <option key={entertainment.id} value={entertainment.value}>
                                    {entertainment.name}
                                </option>
                            ))}
                        </select>
                        <div className="top-10-category-select-icon-wrapper">
                            <FaChevronDown className="top-10-category-select-icon" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Headline */}
            <div className="top-10-headline">
                <div className="top-10-headline-container">{getTop10Headline()}</div>
            </div>

            {/* Swiper Navigation Buttons */}
            <div className="top-10-cards">
                <div className="top-10-cards-container">
                    <div className="flex justify-between mb-2">
                        <button
                            ref={prevRef}
                            disabled={isBeginning}
                            className={`p-2 rounded-full ${isBeginning ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-black text-white hover:bg-gray-800"
                                }`}
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            ref={nextRef}
                            disabled={isEnd}
                            className={`p-2 rounded-full ${isEnd ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-black text-white hover:bg-gray-800"
                                }`}
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
                {isLoading ? (
                    <Spinner />
                ) : (
                    <div className="py-4 px-16">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={16}
                            slidesPerView={2}
                            onSwiper={handleSwiper}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            onBeforeInit={(swiper) => {
                                if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                }
                            }}
                            breakpoints={{
                                640: { slidesPerView: 3 },
                                768: { slidesPerView: 4 },
                                1024: { slidesPerView: 5 },
                            }}
                            className="group"
                        >
                            {data.map((item: ShowItem) => (
                                <SwiperSlide key={item.id}>
                                    <div className="relative cursor-pointer">
                                        <div
                                            className="h-[350px] bg-cover bg-center shadow-md"
                                            style={{ backgroundImage: `url(${item.imgCard})` }}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}
            </div>
        </section>
    );
}
