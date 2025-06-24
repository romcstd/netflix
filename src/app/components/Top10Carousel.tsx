"use client";

import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";
import { useState, useMemo, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
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
    name: string;
    imgCard: string;
    imgCardLogo: string;
    imgModal: string;
    imgModalTitle: string;
};

export default function Top10Carousel() {
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
        const timeout = setTimeout(() => setIsLoading(false), 300);
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
            <div className="relative">
                <div className="container mx-auto">
                    {isLoading ? (
                        <Spinner />
                    ) : (
                        <Carousel opts={{ align: "start", }} className="top-10-carousel w-full relative">
                            <CarouselContent className="top-10-carousel-content relative">
                                {data.map((item: ShowItem, index) => (
                                    <CarouselItem
                                        key={item.id}
                                        className="top-10-carousel-item group cursor-pointer relative basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/5"
                                    >
                                        <Card className="top-10-carousel-item-card w-full h-full bg-cover bg-center border-none rounded-md shadow-xl transition-transform duration-300 group-hover:scale-105">
                                            <Image
                                                src={item.imgCard}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                            <CardContent className="top-10-carousel-item-card-content relative aspect-[2/3] overflow-hidden">
                                                <div className="top-10-carousel-item-card-content-number absolute left-2 top-2 z-10 text-8xl font-bold text-black/40 leading-none drop-shadow-md pointer-events-none">
                                                    <span className="relative">
                                                        {index + 1}
                                                    </span>
                                                </div>
                                                <div className="top-10-carousel-item-card-content-logo absolute bottom-8 left-0 right-0 flex justify-center z-10">
                                                    <Image src={item.imgCardLogo} alt={item.name} className="object-contain" width={240} height={153} />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    )}
                </div>
            </div>
        </section>
    );
}
