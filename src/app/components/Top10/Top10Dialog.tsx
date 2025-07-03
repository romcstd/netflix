"use client";

import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { FaXmark } from "react-icons/fa6";
import { ShowItem } from "./types";

export default function Top10Dialog({
    selectedShow,
    onClose,
}: {
    selectedShow: ShowItem | null;
    onClose: () => void;
}) {
    return (
        <Dialog open={!!selectedShow} onOpenChange={onClose}>
            <DialogContent id="dialog-content" className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl w-full max-h-full rounded-lg p-0 bg-background border-0 gap-0 flex flex-col">
                <DialogHeader id="dialog-header" className="relative top-0 z-10 flex items-center justify-between px-6 py-4 border-b bg-background rounded-t-lg">
                    <DialogTitle id="dialog-title" className="text-2xl font-bold text-foreground">
                        {selectedShow?.name}
                    </DialogTitle>
                    <DialogClose id="dialog-close" className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                        <FaXmark className="w-5 h-5" />
                    </DialogClose>
                </DialogHeader>

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

                        {selectedShow?.cast?.length && (
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
            </DialogContent>
        </Dialog>
    );
}