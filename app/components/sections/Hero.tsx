export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-center text-white">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-wood.jpg')" }} // Dodaj svoju sliku u public folder
      >
        <div className="absolute inset-0 bg-black/40" /> {/* Tamni filter */}
      </div>

      <div className="relative z-10 px-4">
        <p className="uppercase tracking-[0.3em] text-sm mb-4 opacity-90">
          German Craftsmanship Since 1985
        </p>
        <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
          Handmade Wooden Furniture <br /> & Tables <br />
          <span className="italic">Crafted in Germany</span>
        </h1>
        <p className="max-w-xl mx-auto text-lg mb-10 opacity-80">
          Premium custom furniture made from solid wood. Quality and
          craftsmanship for homes and businesses.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-[#D4A373] hover:bg-[#b88b5d] text-white px-8 py-4 rounded-sm transition uppercase text-sm tracking-widest font-bold">
            View Our Products
          </button>
          <button className="border border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-sm transition uppercase text-sm tracking-widest font-bold">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
