"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useLanguage } from "../context/LanguageContext";
// import { translations } from "../translations/translations";
import Image from "next/image";

export default function Gallery() {
  const { language } = useLanguage();
  //   const t = translations[language];

  // List of all images
  const images = [
    "/images/1.webp",
    "/images/2.webp",
    "/images/3.webp",
    "/images/4.webp",
    "/images/5.webp",
    "/images/6.webp",
    "/images/7.webp",
    "/images/8.webp",
    "/images/9.webp",
    "/images/10.webp",
    "/images/11.webp",
    "/images/12.webp",
    "/images/13.webp",
    "/images/14.webp",
    "/images/15.webp",
    "/images/16.webp",
    "/images/17.webp",
    "/images/18.webp",
    "/images/19.webp",
    "/images/20.webp",
    "/images/21.webp",
    "/images/22.webp",
    "/images/23.webp",
    "/images/24.webp",
    "/images/25.webp",
    "/images/26.webp",
    "/images/27.webp",
    "/images/28.webp",
    "/images/29.webp",
    "/images/30.webp",
    "/images/31.webp",
    "/images/32.webp",
    "/images/33.webp",
    "/images/34.webp",
    "/images/35.webp",
    "/images/36.webp",
    "/images/37.webp",
    "/images/38.webp",
    "/images/39.webp",
    "/images/40.webp",
    "/images/41.webp",
    "/images/42.webp",
    "/images/43.webp",
    "/images/44.webp",
    "/images/45.webp",
    "/images/46.webp",
    "/images/47.webp",
    "/images/48.webp",
    "/images/49.webp",
    "/images/50.webp",
    "/images/51.webp",
    "/images/52.webp",
    "/images/53.webp",
    "/images/54.webp",
    "/images/55.webp",
    "/images/56.webp",
    "/images/57.webp",
    "/images/58.webp",
    "/images/59.webp",
    "/images/60.webp",
    "/images/61.webp",
    "/images/62.webp",
    "/images/63.webp",
    "/images/64.webp",
    "/images/65.webp",
    "/images/66.webp",
    "/images/67.webp",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="bg-secondary-foreground w-full h-20">
        <Navbar />
      </div>
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
              {language === "de" ? "Galerie" : "Gallery"}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === "de"
                ? "Entdecken Sie unsere handgefertigten Möbel aus Massivholz"
                : "Discover our handcrafted solid wood furniture"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedImage(image)}>
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
            ))}
          </div>
        </div>

        {/* Modal for full-size image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl max-h-full">
              <Image
                src={selectedImage}
                fill
                alt="Full size gallery image"
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center transition-colors">
                ✕
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
