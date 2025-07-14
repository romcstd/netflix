import shows from "@/app/data/shows.json";
import Image from 'next/image';

export default function HomeBannerOne() {
    const globalMovies = shows.entertainment.globalMovies;
    return (
        <section className="relative py-16 bg-secondary">
            <div className="container mx-auto grid place-items-center">
                <div className="mb-8 text-center max-w-4xl">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">This Week’s Most Watched Movies</div>
                    <div className="text-sm sm:text-lg">Experience cinema like never before — from award-winning dramas. Our handpicked collection of movies brings powerful storytelling and unforgettable moments to your screen.</div>
                </div>
                <div className="relative w-full grid grid-rows-5 grid-cols-2 sm:grid-cols-4 sm:grid-rows-7 gap-4 p-4">
                                    {globalMovies.map((movies, index) => {
                                        const gridClasses = [
                                            'sm:row-span-3 sm:aspect-[2/3]',
                                            'sm:row-span-2 sm:aspect-[2/2]',
                                            'sm:row-span-3 sm:aspect-[2/3]',
                                            'sm:row-span-2 sm:aspect-[2/2]',
                                            'sm:row-span-2 sm:col-start-1 sm:row-start-4 sm:aspect-[2/2]',
                                            'sm:row-span-3 sm:col-start-2 sm:row-start-3 sm:aspect-[2/3]',
                                            'sm:row-span-2 sm:col-start-3 sm:row-start-4 sm:aspect-[2/2]',
                                            'sm:row-span-3 sm:col-start-4 sm:row-start-3 sm:aspect-[2/3]',
                                            'sm:col-span-2 sm:row-span-2 sm:row-start-6 sm:aspect-[4/2]',
                                            'sm:col-span-2 sm:row-span-2 sm:col-start-3 sm:row-start-6 sm:aspect-[4/2]',
                                        ]
                                        return (
                                            <div
                                                key={index}
                                                className={`group relative w-full rounded-lg overflow-hidden shadow-md aspect-[2/2] ${gridClasses[index]}`}
                                            >
                                                <div className="row-span-2 col-start-3 row-start-3"></div>
                                                <Image
                                                    src={movies.imgCard}
                                                    alt={movies.title}
                                                    fill
                                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                                                <div className="absolute inset-0 flex items-end justify-center p-4">
                                                    <Image
                                                        src={movies.imgCardLogo}
                                                        alt={`${movies.title} logo`}
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