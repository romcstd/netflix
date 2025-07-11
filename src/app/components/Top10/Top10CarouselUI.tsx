"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselApi,
} from "@/components/ui/carousel";
import { ShowItem } from "./types";

interface Props {
    data: ShowItem[];
    onSelect: (show: ShowItem) => void;
    setCarouselApi: (api: CarouselApi) => void;
}

export default function Top10CarouselUI({ data, onSelect, setCarouselApi }: Props) {
    return (
        <Carousel opts={{ align: "start" }} setApi={setCarouselApi}>
            <CarouselContent id="top-10-carousel-content" className="m-0 py-4">
                {data.map((item, index) => (
                    <CarouselItem
                        key={index}
                        onClick={() => onSelect(item)}
                        id="top-10-carousel-item"
                        className="group cursor-pointer top-10-carousel-item pl-2 pr-2 relative basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/5"
                    >
                        <div className="absolute left-2 -top-12 z-10 text-[6rem] font-black text-white/60 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.8)] pointer-events-none">
                            {index + 1}
                        </div>
                        <Card id="top-10-carousel-item-card" className="relative w-full h-full bg-transparent border-none rounded-md overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-lg">
                            <CardContent id="top-10-carousel-item-card-footer" className="relative aspect-[2/3] w-full h-auto">
                                <Image
                                    src={item.imgCard?.trim() || "/img/top-10/top-10-card-image-placeholder.png"}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                />
                            </CardContent>
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                            <CardFooter id="top-10-carousel-item-card-footer" className="absolute bottom-0 left-0 right-0 aspect-[16/9] flex justify-center z-10 w-full">
                                <Image
                                    src={item.imgCardLogo?.trim() || "/img/top-10/placeholder-logo.png"}
                                    alt={item.name}
                                    fill
                                    className="object-contain"
                                />
                            </CardFooter>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:inline-flex dark:bg-[#2d2d2d]/90" />
            <CarouselNext className="hidden lg:inline-flex dark:bg-[#2d2d2d]/90" />
        </Carousel>
    );
}