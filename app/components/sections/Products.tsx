import { ArrowRight } from "lucide-react";
import Image from "next/image"; // Ako koristiš Next.js Image komponentu, inače može i običan <img>

export default function Products() {
  const products = [
    {
      category: "DINING TABLES",
      name: "Natural Dining Table",
      desc: "Solid oak dining table for 6-8 people.",
      // Privremene slike (zameni sa svojim iz public foldera)
      image: "/images/1.png",
    },
    {
      category: "COFFEE TABLES",
      name: "Rustic Coffee Table",
      desc: "Natural coffee table with live edge.",
      image: "/images/1.png",
    },
    {
      category: "BENCHES",
      name: "Modern Bench",
      desc: "Elegant bench made from solid beech wood.",
      image: "/images/1.png",
    },
    {
      category: "SHELVES",
      name: "Oak Wall Shelf",
      desc: "Minimalist wall shelf made from oiled oak.",
      image: "/images/1.png",
    },
    {
      category: "NIGHTSTANDS",
      name: "Classic Nightstand",
      desc: "Elegant nightstand with natural wood grain.",
      image: "/images/1.png",
    },
    {
      category: "DESKS",
      name: "Home Desk",
      desc: "Modern desk for the home office.",
      image: "/images/1.png",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-primary-foreground text-[#1A1A1A]">
      <div className="max-w-[93%] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <p className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs mb-4 text-primary font-bold">
            Our Products
          </p>
          <h2 className="text-3xl md:text-5xl font-serif mb-6 md:mb-8 leading-tight">
            Masterpieces in Solid Wood
          </h2>
          <p className="max-w-full md:max-w-[70%] lg:max-w-[50%] text-base md:text-lg mx-auto leading-relaxed text-muted-foreground">
            Discover our collection of handcrafted furniture. Each piece is
            unique, made with attention to detail and the highest precision.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 ">
          {products.map((product, i) => (
            <div
              key={i}
              className="group flex flex-col cursor-pointer bg-primary-foreground border border-amber-50 shadow-xl hover:shadow-2xl transition rounded-2xl overflow-hidden">
              {/* Image Container sa Hover Zoom efektom */}
              <div className="relative w-full aspect-square mb-6 overflow-hidden  bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-1 px-6 pb-8">
                <p className="text-[10px] md:text-xs uppercase tracking-widest text-secondary-foreground font-bold mb-2">
                  {product.category}
                </p>
                <h3 className="text-xl md:text-2xl font-serif font-semibold mb-3 text-gray-900">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 flex-1">
                  {product.desc}
                </p>

                {/* Dugme sa animacijom strelice */}
                <div className="flex items-center text-primary font-bold text-sm uppercase tracking-wide group-hover:text-[#b88b5d] transition-colors mt-auto">
                  Request Quote
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
