"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/translations/translations";

export default function ProductsSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const products = t.products.items.map((item) => ({
    category: item.category,
    name: item.name,
    desc: item.desc,
    image: "/images/1.png",
  }));

  return (
    <section id="produkte" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4 font-medium">
            {t.products.label}
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">
            {t.products.title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t.products.description}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <article
              key={index}
              className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border/50">
              {/* Image Container */}
              <div className="aspect-square overflow-hidden relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs uppercase tracking-wider text-primary font-medium">
                  {product.category}
                </span>
                <h3 className="text-xl font-serif font-semibold text-foreground mt-2 mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {product.desc}
                </p>

                <button className="inline-flex items-center text-primary font-medium text-sm group/link">
                  {language === "de" ? "Anfrage stellen" : "Request Quote"}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 font-semibold h-12 rounded-md px-8 text-base">
            {language === "de"
              ? "Individuelle Anfertigung anfragen"
              : "Request Custom Furniture"}
          </button>
        </div>
      </div>
    </section>
  );
}
