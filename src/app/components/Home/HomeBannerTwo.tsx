import Image from 'next/image';

export default function HomeBannerTwo() {
    return (
        <section className="relative pt-12 pb-12 bg-background">
            <div className="container mx-auto grid place-items-center">
                <div className="mb-8 text-center">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">All of these and more, now streaming</div>
                    <div className="text-sm sm:text-lg">Disney+ is the streaming home for movies and series from Disney, Pixar, Marvel, Star Wars, National Geographic and Star.</div>
                </div>
                <div>
                    <Image 
                        src="/img/home/home-banner-2.webp"
                        width={1200}
                        height={600}
                        alt="Background"
                        priority
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}