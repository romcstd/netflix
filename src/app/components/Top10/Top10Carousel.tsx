"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Top10Category from "./Top10Category";
import Top10Dialog from "./Top10Dialog";
import Top10CarouselUI from "./Top10CarouselUI";
import { CarouselApi } from "@/components/ui/carousel";

import countries from "@/app/data/countries.json";
import entertainments from "@/app/data/entertainments.json";
import shows from "@/app/data/shows.json";

import { Country, Entertainment, ShowItem } from "./types";

export default function Top10Carousel() {
    const [selectedCountry, setSelectedCountry] = useState<string>(countries[0].value);
    const [selectedEntertainment, setSelectedEntertainment] = useState<string>("");
    const [selectedShow, setSelectedShow] = useState<ShowItem | null>(null);
    // const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
    const carouselApi = useRef<CarouselApi | null>(null);

    const filteredEntertainment = useMemo(() => {
        return entertainments.filter((ent: Entertainment) => ent.country === selectedCountry);
    }, [selectedCountry]);

    useEffect(() => {
        // if (filteredEntertainment.length > 0) {
        //     setSelectedEntertainment(filteredEntertainment[0].value);
        // }

        if (filteredEntertainment.length > 0) {
            setSelectedEntertainment((prev) =>
                filteredEntertainment.some((ent) => ent.value === prev)
                    ? prev
                    : filteredEntertainment[0].value
            );
        } else {
            setSelectedEntertainment("");
        }
    }, [filteredEntertainment]);

    const selectedEntertainmentName = useMemo(() => {
        return filteredEntertainment.find((ent) => ent.value === selectedEntertainment)?.name || "";
    }, [filteredEntertainment, selectedEntertainment]);

    const data: ShowItem[] = useMemo(() => {
        // return shows?.entertainment?.[selectedEntertainment] || [];
        const items = shows?.entertainment?.[selectedEntertainment];
        return Array.isArray(items) ? items : [];
    }, [selectedEntertainment]);

    useEffect(() => {
        if (carouselApi.current) {
             carouselApi.current.scrollTo(0);
        }
    }, [selectedCountry, selectedEntertainment]);

    const headline = useMemo(() => {
        return selectedCountry === "philippines"
            ? `Top 10 ${selectedEntertainmentName} in ${selectedCountry}`
            : `${selectedCountry} Top 10 ${selectedEntertainmentName}`;
    }, [selectedCountry, selectedEntertainmentName]);

    return (
        <section className="top-10">
            <Top10Category
                selectedCountry={selectedCountry}
                selectedEntertainment={selectedEntertainment}
                countries={countries}
                entertainments={filteredEntertainment}
                onCountryChange={setSelectedCountry}
                onEntertainmentChange={setSelectedEntertainment}
            />

            <div className="top-10-headline">
                <div className="top-10-headline-container">{headline}</div>
            </div>

            <div className="top-10-carousel">
                {data.length === 0 ? (
                        <p className="text-center text-muted-foreground">No shows available.</p>
                ) : (
                    <Top10CarouselUI data={data} onSelect={setSelectedShow} setCarouselApi={(api) => { carouselApi.current = api; }} />
                )}
            </div>

            <Top10Dialog selectedShow={selectedShow} onClose={() => setSelectedShow(null)} />
        </section>
    );
}