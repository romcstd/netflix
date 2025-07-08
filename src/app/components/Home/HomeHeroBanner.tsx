import Image from "next/image";

export default function HomeHeroBanner() {
    return (
        <section className="relative w-full min-h-screen h-dvh md:h-screen overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/img/home/banner.jpg"
                    alt="Home Hero Banner Background"
                    fill
                    priority
                    className="object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/50 to-black/100 -z-10" />

            <div className="relative z-10 flex items-center justify-center h-full text-center px-4 text-white">
                <div className="mt-9 flex flex-col items-center">
                    <div className="!leading-normal text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 max-w-3xl">
                        Watch thousands of TV shows and movies.
                    </div>

                    <p className="text-base md:text-lg mb-8 max-w-2xl">
                        Enjoy past seasons, current episodes, and Netflix Originals.
                    </p>

                    <div className="flex flex-row sm:flex-row gap-4">
                        <button className="text-white font-bold py-3 px-6 bg-[#e50914] cursor-pointer transition duration-200 ease-out hover:bg-[#c11119] rounded-full">
                            Get Netflix
                        </button>
                        <button className="border border-white text-white font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-black transition">
                            View Plans
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}