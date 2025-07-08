import Image from "next/image";

export default function Top10HeroBanner() {
    return (
        <section className="relative w-full h-[300px] sm:h-[300px] md:h-[400px] overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/img/top-10/top-10-banner.jpg"
                    alt="Top 10 Banner Background"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/50 to-black/100 -z-10" />

            <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
                <div className="mt-9">
                    <div className="text-3xl sm:text-5xl font-bold text-white mb-4">
                        Top 10
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base max-w-xl">
                        Discover the most-watched shows and movies trending now on Netflix.
                    </p>
                </div>
            </div>
        </section>
    );
}