"use client";

import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";
import { useState, useMemo, useEffect } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

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
    imgModal: string;
    imgModalTitle: string;
};

export default function Top10() {
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
        return (shows?.entertainment && typeof shows.entertainment === "object")
            ? shows.entertainment[selectedEntertainment] || []
            : [];
    }, [selectedEntertainment]);

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
        <>
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

                <div className="relative container mx-auto mb-4 mt-8">
                    <Carousel opts={{ align: "start" }} className="w-full">
                        <CarouselContent className="top-10-carousel-content p-4">
                            {data.map((item: ShowItem, index) => (
                                <CarouselItem
                                    key={index}
                                    className="group top-10-carousel-item relative basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/5"
                                >
                                    {/* Rank Number (Outside Card) */}
                                    <div className="absolute left-2 -top-12 z-10 text-[6rem] font-black text-white/60 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.8)] pointer-events-none">
                                        {index + 1}
                                    </div>

                                    <Card className="relative w-full h-full bg-transparent border-none rounded-md overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-lg">
                                        {/* Poster Image */}
                                        <CardContent className="relative aspect-[2/3] w-full h-auto">
                                            <Image
                                                src={
                                                    item.imgCard && item.imgCard !== ""
                                                        ? item.imgCard
                                                        : "/img/top-10/placeholder.png"
                                                }
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </CardContent>
                                        <CardFooter className="top-10-carousel-item-card-footer absolute bottom-0 left-0 right-0 flex justify-center z-10 w-full bg-gradient-to-t from-black/80 to-transparent">
                                            <Image src="/img/top-10/local/movies/card/logo/1.png" alt={item.name} className="object-contain" width={240} height={153} />
                                        </CardFooter>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </section>
        </>
    );
}