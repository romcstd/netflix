"use client";

import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";
import { Country, Entertainment } from "./types";

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
        <div className="top-10-category">
            <div className="top-10-category-container">
                <Image src="/img/top-10/top-10-badge.svg" alt="Netflix Top 10 Logo" className="top-10-category-logo" width={40} height={47} />
                <div className="top-10-category-select-wrapper">
                    <label htmlFor="country" className="sr-only">Country</label>
                    <select
                        id="country"
                        value={selectedCountry}
                        className="top-10-category-select"
                        onChange={(e) => onCountryChange(e.target.value)}
                    >
                        {countries.map((country) => (
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
                        onChange={(e) => onEntertainmentChange(e.target.value)}
                    >
                        {entertainments.map((ent) => (
                            <option key={ent.id} value={ent.value}>{ent.name}</option>
                        ))}
                    </select>
                    <div className="top-10-category-select-icon-wrapper">
                        <FaChevronDown className="top-10-category-select-icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}