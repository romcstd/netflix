import Image from 'next/image';

export default function HomeBannerOne() {
    return (
        <section className="relative pt-12 pb-12 bg-background">
            <div className="container mx-auto grid place-items-center">
                <div className="mb-8 text-center">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">Stream these titles at no cost!</div>
                    <div className="text-sm sm:text-lg">Watch select episodes of favorite stories without a paid subscription.</div>
                </div>
                <div>
                    <Image 
                        src="/img/home/home-banner-1.webp"
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