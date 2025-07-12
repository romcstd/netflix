"use client";

import Image from "next/image";
import Link from "next/link";
import { ShowItem } from "./types";

export default function Top10DialogContent({ selectedShow }: { selectedShow: ShowItem }) {
    return (
        <div className="mb-4">
            <div className="relative w-full h-64 sm:h-80 overflow-hidden">
                {selectedShow?.imgCard && (
                    <Image src={selectedShow.imgCard} alt={selectedShow.name} fill className="object-cover" />
                )}
            </div>

            <div className="flex flex-col gap-6 p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    {selectedShow?.year && <span>{selectedShow.year}</span>}
                    {selectedShow?.duration && <span>{selectedShow.duration}</span>}
                    {selectedShow?.rating && (
                        <span className="bg-red-600 text-white px-2 py-0.5 rounded text-xs">{selectedShow.rating}</span>
                    )}
                </div>

                <p className="text-base text-foreground leading-relaxed">{selectedShow?.description}</p>

                {selectedShow?.genre?.length && (
                    <div>
                        <h4 className="text-sm font-semibold text-foreground">Genres:</h4>
                        <p className="text-sm text-muted-foreground">{selectedShow.genre.join(", ")}</p>
                    </div>
                )}

                {selectedShow?.cast?.length > 0 && (
                    <div>
                        <h4 className="text-sm font-semibold text-foreground">Cast:</h4>
                        <p className="text-sm text-muted-foreground">{selectedShow.cast.join(", ")}</p>
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
    );
}