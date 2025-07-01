"use client";

import Link from "next/link";
import Image from "next/image";
import { FaChevronDown, FaXmark } from "react-icons/fa6";
import { useState, useMemo, useEffect } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from "@/components/ui/dialog"

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
    year: number;
    duration: string;
    description: string;
    genre?: string[];
    cast?: string[];
    rating: string;
    link?: string;
    imgCard: string;
    imgCardLogo: string;
};

export default function Top10() {
    const [selectedCountry, setSelectedCountry] = useState<string>(countries[0].value);
    const [selectedEntertainment, setSelectedEntertainment] = useState<string>(entertainments[0].value);
    const [selectedShow, setSelectedShow] = useState<ShowItem | null>(null);

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
                        <div className="top-10-category-select-wrapper">
                            <label htmlFor="country" className="sr-only">Country</label>
                            <select
                                id="country"
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
                        <div className="top-10-category-select-wrapper">
                            <label htmlFor="entertainment" className="sr-only">Entertainment</label>
                            <select
                                id="entertainment"
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
                                    onClick={() => setSelectedShow(item)}
                                    className="group cursor-pointer top-10-carousel-item relative basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/5"
                                >
                                    {/* Rank Number (Outside Card) */}
                                    <div className="absolute left-2 -top-12 z-10 text-[6rem] font-black text-white/60 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.8)] pointer-events-none">
                                        {index + 1}
                                    </div>

                                    <Card className="relative w-full h-full bg-transparent border-none rounded-md overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-lg">
                                        {/* Poster Image */}
                                        <CardContent className="relative aspect-[2/3] w-full h-auto">
                                            <Image
                                                src={item.imgCard?.trim() || "/img/top-10/placeholder.png"}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                                fetchPriority="high"
                                            />
                                        </CardContent>
                                        <CardFooter className="top-10-carousel-item-card-footer absolute bottom-0 left-0 right-0 aspect-[16/9] flex justify-center z-10 w-full bg-gradient-to-t from-black/80 to-transparent">
                                            <Image
                                                src={item.imgCardLogo?.trim() || "/img/top-10/placeholder-logo.png"}
                                                alt={item.name}
                                                fill
                                                className="object-contain"
                                                fetchPriority="high"
                                            />
                                        </CardFooter>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <Dialog open={!!selectedShow} onOpenChange={() => setSelectedShow(null)}>
                    <DialogContent
                        className="max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl w-full max-h-[90vh] gap-0 p-0 rounded bg-background border-l-0"
                    >
                        {/* Sticky Header (non-scrollable) */}
                        <DialogHeader className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b bg-background rounded">
                            <DialogTitle className="text-2xl font-bold text-foreground">
                                {selectedShow?.name}
                            </DialogTitle>
                            <DialogClose className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-0">
                                <FaXmark className="w-5 h-5" />
                            </DialogClose>
                        </DialogHeader>

                        {/* Scrollable content starts here */}
                        <div className="overflow-y-auto max-h-[calc(90vh-72px)] mb-4">
                            <div className="relative w-full h-64 sm:h-80 overflow-hidden">
                                {selectedShow?.imgCard && (
                                    <Image
                                        src={selectedShow.imgCard}
                                        alt={selectedShow.name}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                )}
                            </div>

                            <div className="flex flex-col gap-6 p-6 sm:p-8">

                                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                    {selectedShow?.year && <span>{selectedShow.year}</span>}
                                    {selectedShow?.duration && <span>{selectedShow.duration}</span>}
                                    {selectedShow?.rating && (
                                        <span className="bg-red-600 text-white px-2 py-0.5 rounded text-xs">
                                            {selectedShow.rating}
                                        </span>
                                    )}
                                </div>

                                <p className="text-base text-foreground leading-relaxed">
                                    {selectedShow?.description}
                                </p>

                                {selectedShow?.genre?.length > 0 && (
                                    <div>
                                        <h4 className="text-sm font-semibold text-foreground">Genres:</h4>
                                        <p className="text-sm text-muted-foreground">
                                            {selectedShow.genre.join(', ')}
                                        </p>
                                    </div>
                                )}

                                {selectedShow?.cast?.length > 0 && (
                                    <div>
                                        <h4 className="text-sm font-semibold text-foreground">Cast:</h4>
                                        <p className="text-sm text-muted-foreground">
                                            {selectedShow.cast.join(', ')}
                                        </p>
                                    </div>
                                )}

                                {selectedShow?.link && (
                                    <Link
                                        href={selectedShow.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block max-w-max mt-4 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2 px-4 rounded-md transition"
                                    >
                                        Watch Now
                                    </Link>
                                )}
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </section>
        </>
    );
}