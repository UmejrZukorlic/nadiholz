"use client";

import { Award, Leaf, Heart, Settings } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/translations/translations";

export default function AboutSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const features = t.about.features.map((feature, index) => ({
    icon:
      index === 0 ? (
        <Award className="w-7 h-7 text-primary" />
      ) : index === 1 ? (
        <Leaf className="w-7 h-7 text-primary" />
      ) : index === 2 ? (
        <Heart className="w-7 h-7 text-primary" />
      ) : (
        <Settings className="w-7 h-7 text-primary" />
      ),
    title: feature.title,
    desc: feature.desc,
  }));

  const stats = t.about.stats;

  return (
    <section
      id="ueber-uns"
      className="py-20 md:py-32 bg-secondary transition-all">
      <div className="container mx-auto px-6">
        {/* Header dijela */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4 font-semibold">
            {t.about.label}
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6 leading-tight">
            {t.about.title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t.about.description}
          </p>
        </div>

        {/* Features Grid (4 kolone) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-primary/10">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* History & Stats Card */}
        <div className="mt-16 bg-background rounded-xl p-8 md:p-12 shadow-sm">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Tekstualni dio */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-serif text-foreground">
                {language === "de" ? "Unsere Geschichte" : "Our History"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {language === "de"
                  ? "Gegründet von Meisterschreiner Hans Müller, hat sich unsere Werkstatt zu einem der führenden Ateliers für maßgefertigte Holzmöbel in Deutschland entwickelt. Heute führt die dritte Generation das Erbe fort."
                  : "Founded by master craftsman Hans Müller, our workshop has developed into one of the leading studios for custom wooden furniture in Germany. Today, the third generation continues this legacy."}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {language === "de"
                  ? "Wir verbinden traditionelle Handwerkstechniken mit modernem Design und legen dabei größten Wert auf Qualität, Nachhaltigkeit und die Zufriedenheit unserer Kunden."
                  : "We combine traditional craftsmanship techniques with modern design, while placing great emphasis on quality, sustainability, and customer satisfaction."}
              </p>
            </div>

            {/* Stats Grid dijela */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-secondary/50 rounded-lg p-6 text-center border border-primary/5">
                  <p className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
