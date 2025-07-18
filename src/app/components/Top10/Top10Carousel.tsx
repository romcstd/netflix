"use client";

import dynamic from "next/dynamic";
import { useState, useEffect, useMemo, useRef } from "react";
import Top10Category from "./Top10Category";
const Top10Dialog = dynamic(() => import("./Top10Dialog"));
const Top10Drawer = dynamic(() => import("./Top10Drawer"));
import Top10CarouselUISkeleton from "./Top10CarouselUISkeleton";
import Top10CarouselUI from "./Top10CarouselUI";
import { CarouselApi } from "@/components/ui/carousel";

import countries from "@/app/data/countries.json";
import entertainments from "@/app/data/entertainments.json";
import shows from "@/app/data/shows.json";

import { Entertainment, ShowItem } from "./types";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function Top10Carousel() {
    const [selectedCountry, setSelectedCountry] = useState<string>(countries[0].value);
    const [selectedEntertainment, setSelectedEntertainment] = useState<string>("");
    const [selectedShow, setSelectedShow] = useState<ShowItem | null>(null);
    const carouselApi = useRef<CarouselApi | null>(null);

    const filteredEntertainment = useMemo(() => {
        return entertainments.filter((ent: Entertainment) => ent.country === selectedCountry);
    }, [selectedCountry]);

    useEffect(() => {
        const valid = filteredEntertainment.find(ent => ent.value === selectedEntertainment);
        setSelectedEntertainment(valid ? valid.value : filteredEntertainment[0]?.value || "");
    }, [filteredEntertainment, selectedEntertainment]);

    const selectedEntertainmentName = useMemo(() => {
        return filteredEntertainment.find((ent) => ent.value === selectedEntertainment)?.name || "";
    }, [filteredEntertainment, selectedEntertainment]);

    const data: ShowItem[] = useMemo(() => {
        const items = shows?.entertainment?.[selectedEntertainment];
        return Array.isArray(items) ? items : [];
    }, [selectedEntertainment]);

    const loading = !data.length;

    useEffect(() => {
        if (carouselApi.current) {
            carouselApi.current.scrollTo(0);
        }
    }, [selectedCountry, selectedEntertainment]);

    const headline = useMemo(() => {
        if (!selectedEntertainmentName) return "Top 10 Trending";
        return selectedCountry === "philippines"
            ? `Top 10 ${selectedEntertainmentName} in ${selectedCountry}`
            : `${selectedCountry} Top 10 ${selectedEntertainmentName}`;
    }, [selectedCountry, selectedEntertainmentName]);

    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <section className="relative bg-background pb-12 !top-0">
            <Top10Category
                selectedCountry={selectedCountry}
                selectedEntertainment={selectedEntertainment}
                countries={countries}
                entertainments={filteredEntertainment}
                onCountryChange={setSelectedCountry}
                onEntertainmentChange={setSelectedEntertainment}
            />

            <div className="container mx-auto my-12">
                <div className="text-primary text-3xl text-center sm:text-left sm:text-4xl lg:text-5xl font-extrabold capitalize">{headline}</div>
            </div>

            <div className="relative container mx-auto mb-4 mt-8" style={{ opacity: loading ? 0.5 : 1 }}>
                {loading ? (
                    <Top10CarouselUISkeleton />
                ) : (
                    <Top10CarouselUI data={data} onSelect={setSelectedShow} setCarouselApi={(api) => { carouselApi.current = api; }} />
                )}
            </div>

            {selectedShow && (
                isDesktop ? (
                    <Top10Dialog selectedShow={selectedShow} onClose={() => setSelectedShow(null)} />
                ) : (
                    <Top10Drawer selectedShow={selectedShow} onClose={() => setSelectedShow(null)} />
                )
            )}
        </section>
    );
}