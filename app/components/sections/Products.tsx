"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/translations/translations";
import { useInView } from "@/app/hooks/useInView";

export default function ProductsSection({ setSelectedProduct }: any) {
  const { language } = useLanguage();
  const t = translations[language];
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const products = t.products.items.map((item) => ({
    category: item.category,
    name: item.name,
    desc: item.desc,
    image: item.image,
  }));

  const handleClick = (product: any) => {
    setSelectedProduct({
      name: product.name,
      desc: product.desc,
    });

    document.getElementById("anfrage")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="produkte"
      className={`py-24 md:py-32 bg-background transition-all ${
        isInView ? "animate-fade-in-up" : "opacity-hidden"
      }`}
      ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <article
              key={index}
              onClick={() => handleClick(product)}
              className="cursor-pointer group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border/50">
              <div className="aspect-square overflow-hidden relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-sm mb-4">{product.desc}</p>

                <div className="flex items-center text-primary text-sm">
                  {language === "de" ? "Anfrage stellen" : "Request Quote"}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
