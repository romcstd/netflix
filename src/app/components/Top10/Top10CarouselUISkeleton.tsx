"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

const skeletonItems = Array.from({ length: 5 });

export default function Top10CarouselUISkeleton() {
  return (
    <Carousel opts={{ align: "start" }}>
      <CarouselContent className="m-0 py-4">
        {skeletonItems.map((_, index) => (
          <CarouselItem
            key={`skeleton-${index}`}
            className="pl-2 pr-2 relative basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/5"
          >
            <div className="absolute left-2 -top-12 z-10 text-[6rem] font-black text-white/60 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.8)] pointer-events-none">
              {index + 1}
            </div>
            <Card className="relative w-full h-full bg-transparent border-none rounded-md overflow-hidden shadow-lg">
              <CardContent className="relative aspect-[2/3] w-full h-auto">
                <Skeleton className="absolute inset-0 w-full h-full rounded-md" />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:inline-flex dark:bg-[#2d2d2d]/90" />
      <CarouselNext className="hidden lg:inline-flex dark:bg-[#2d2d2d]/90" />
    </Carousel>
  );
}