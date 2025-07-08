import Image from "next/image";

export default function HomeHeroBanner() {
    return (
        <section className="relative w-full h-[500px] sm:h-[600px] text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/img/home/hero-banner.jpg"
                    alt="Hulu Background"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-black/5 to-black/60 -z-10" />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center">

                {/* Headline */}
                <div className="text-lg md:text-5xl xl:text-5xl font-bold mb-4 max-w-2xl">
                    Watch thousands of TV shows and movies.
                </div>

                {/* Subheadline */}
                <p className="text-base md:text-lg mb-8 max-w-xl">
                    Enjoy past seasons, current episodes, and Netflix Originals.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-row sm:flex-row gap-4">
                    <button className="text-white font-bold py-3 px-6 bg-[#e50914] cursor-pointer transition duration-200 ease-out hover:bg-[#c11119] rounded-full">
                        Get Netflix
                    </button>
                    <button className="border border-white text-white font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-black transition">
                        View Plans
                    </button>
                </div>
            </div>
        </section>
    );
}