import Image from "next/image";

export default function Top10HeroBanner() {
    return (
        <section className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] bg-black">
            <div className="absolute inset-0">
                <Image
                    src="/img/top-10/top-10-banner.jpg"
                    alt="Top 10 Banner Background"
                    className="w-full h-full object-cover object-center"
                    width={1920}
                    height={600}
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <div className="text-3xl sm:text-5xl font-bold text-white mb-4">
                    Top 10
                </div>
                <p className="text-gray-300 text-sm sm:text-base max-w-xl">
                    Discover the most-watched shows and movies trending now on Netflix.
                </p>
            </div>
        </section>
    );
}