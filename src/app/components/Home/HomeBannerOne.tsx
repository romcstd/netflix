import Image from 'next/image';

export default function HomeBannerOne() {
    return (
        <section className="relative pt-24 pb-12 bg-background">
            <div className="container mx-auto grid place-items-center">
                <div className="mb-4 text-center">
                    <div className="text-4xl font-bold mb-4">Stream these titles at no cost!</div>
                    <div className="text-lg">Watch select episodes of favorite stories without a paid subscription.</div>
                </div>
                <div>
                    <Image 
                        src="/img/home/home-banner-1.webp"
                        width={1200}
                        height={600}
                        alt="Background"
                        objectFit="cover"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}