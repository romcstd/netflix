"use client";

import Image from "next/image";
import { Country, Entertainment } from "./types";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface Props {
    selectedCountry: string;
    selectedEntertainment: string;
    countries: Country[];
    entertainments: Entertainment[];
    onCountryChange: (val: string) => void;
    onEntertainmentChange: (val: string) => void;
}

export default function Top10Category({
    selectedCountry,
    selectedEntertainment,
    countries,
    entertainments,
    onCountryChange,
    onEntertainmentChange,
}: Props) {
    return (
        <div className="relative bg-secondary py-2">
            <div className="container mx-auto flex items-center justify-start">
                <Image src="/img/top-10/top-10-badge.svg" alt="Netflix Top 10 Logo" className="top-10-category-logo" width={40} height={47} />
                <div className="relative mr-2">
                    <Select value={selectedCountry} onValueChange={onCountryChange}>
                        <SelectTrigger className="h-fit capitalize w-32 rounded-2xl py-1 focus:outline-none focus:ring-0 focus:ring-offset-0">
                            <SelectValue placeholder="Select a Country" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {countries.map((country) => (
                                    <SelectItem key={country.id} value={country.value} className="capitalize">
                                        {country.name}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className="relative mr-2">
                    <Select value={selectedEntertainment} onValueChange={onEntertainmentChange}>
                        <SelectTrigger className="h-fit capitalize w-32 rounded-2xl py-1 focus:outline-none focus:ring-0 focus:ring-offset-0">
                            <SelectValue placeholder="Select a Entertainment" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup className="capitalize">
                                {entertainments.map((ent) => (
                                    <SelectItem key={ent.id} value={ent.value}>
                                        {ent.name}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    );
}