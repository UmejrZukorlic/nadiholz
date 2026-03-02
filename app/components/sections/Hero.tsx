"use client";

import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/translations/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/1.png"
          fill
          className="w-full h-full object-cover"
          alt="Workshop"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <p className="text-[#D4A373] uppercase tracking-[0.3em] mb-6 font-medium">
          {t.hero.subtitle}
        </p>
        <h1 className="text-4xl md:text-7xl font-serif text-white leading-tight mb-6">
          {t.hero.title} <br />
          <span className="text-[#F5E8C7]">{t.hero.titlePart2}</span>
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <button className="bg-[#D4A373] text-white h-14 px-10 rounded-lg font-bold hover:bg-[#b88b5d] transition-all">
            {t.hero.buttonProducts}
          </button>
          <button className="border-2 border-white text-white h-14 px-10 rounded-lg font-medium hover:bg-white/10 transition-all">
            {t.hero.buttonContact}
          </button>
        </div>
      </div>
    </section>
  );
}
