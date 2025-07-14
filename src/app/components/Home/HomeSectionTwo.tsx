import shows from "@/app/data/shows.json";
import Image from 'next/image';

export default function HomeSectionTwo() {
    const globalSeries = shows.entertainment.globalShows;
    return (
        <section className="relative py-16 bg-background">
            <div className="container mx-auto grid place-items-center">
                <div className="mb-8 text-center max-w-3xl">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">One Episode Is Never Enough</div>
                    <div className="text-sm sm:text-lg">Get hooked on the most addictive shows across every genre. These are the series everyone’s talking about, and once you start, you won’t stop.</div>
                </div>
                <div className="relative w-full grid grid-rows-3 grid-cols-3 sm:grid-cols-4 sm:grid-rows-6 gap-4 p-4">
                    {globalSeries.filter(series => series.id !== 9).map((series, index) => {
                        const gridClasses = [
                            'sm:col-span-2 sm:row-span-4',
                            'sm:row-span-2 sm:col-start-3',
                            'sm:row-span-2 sm:col-start-4',
                            'sm:row-span-2 sm:col-start-3 sm:row-start-3',
                            'sm:row-span-2 sm:col-start-4 sm:row-start-3',
                            'sm:row-span-2 sm:row-start-5',
                            'sm:row-span-2 sm:row-start-5',
                            'sm:row-span-2 sm:row-start-5',
                            'sm:row-span-2 sm:row-start-5',
                            'sm:col-span-3 sm:row-span-2 sm:row-start-8',
                        ]
                        return (
                            <div
                                key={index}
                                className={`group relative w-full aspect-[2/2] rounded-lg overflow-hidden shadow-md ${gridClasses[index]}`}
                            >
                                <div className="row-span-2 col-start-3 row-start-3"></div>
                                <Image
                                    src={series.imgCard}
                                    alt={series.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                                <div className="absolute inset-0 flex items-end justify-center p-4">
                                    <Image
                                        src={series.imgCardLogo}
                                        alt={`${series.title} logo`}
                                        width={120}
                                        height={50}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}