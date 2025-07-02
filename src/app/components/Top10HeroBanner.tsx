export default function Top10HeroBanner() {
  return (
    <section className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] bg-black">
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/PH-en-20250630-TRIFECTA-perspective_76d73aa8-a16b-4b4e-b833-c574aade7036_large.jpg"
          alt="Top 10 Banner Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
          Top 10
        </h1>
        <p className="text-gray-300 text-sm sm:text-base max-w-xl">
          Discover the most-watched shows and movies trending now on Netflix.
        </p>

        {/* Optional: Poster thumbnails under the heading
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="w-full aspect-[2/3] bg-gray-700 rounded-md"
            />
          ))}
        </div>
        */}
      </div>
    </section>
  );
}