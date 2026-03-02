"use client";

import { Check } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/translations/translations";

const colorClasses: Record<string, string> = {
  Eiche: "bg-amber-200",
  Oak: "bg-amber-200",
  Nussbaum: "bg-amber-800",
  Walnut: "bg-amber-800",
  Buche: "bg-amber-100",
  Beech: "bg-amber-100",
  Kirsche: "bg-red-300",
  Cherry: "bg-red-300",
};

export default function MaterialsSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const woodTypes = t.materials.woods.map((wood) => ({
    name: wood.name,
    description: wood.description,
    colorClass: colorClasses[wood.name] || "bg-amber-200",
    features: wood.features,
  }));

  return (
    <section id="materialien" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Header dijela */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4 font-medium">
            {t.materials.label}
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">
            {t.materials.title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t.materials.description}
          </p>
        </div>

        {/* Wood Types Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {woodTypes.map((wood, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-border/50">
              <div className="flex items-start gap-4 mb-4">
                {/* Wood Color Preview */}
                <div
                  className={`w-12 h-12 rounded-lg ${wood.colorClass} shrink-0 shadow-inner`}
                />
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-foreground">
                    {wood.name}
                  </h3>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {wood.description}
              </p>

              <ul className="space-y-2">
                {wood.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Sustainability Info */}
        <div className="mt-16 bg-accent/5 rounded-xl p-8 md:p-12 max-w-4xl mx-auto text-center border border-accent/10">
          <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
            {language === "de"
              ? "Nachhaltige Forstwirtschaft"
              : "Sustainable Forestry"}
          </h3>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {language === "de"
              ? "All unser Holz stammt aus FSC-zertifizierten Wäldern in Europa. Für jeden gefällten Baum werden mehrere neue gepflanzt. So tragen wir dazu bei, dass auch zukünftige Generationen von der Schönheit des Naturmaterials Holz profitieren können."
              : "All our wood comes from FSC-certified forests in Europe. For every tree felled, several new ones are planted. This way we contribute to ensuring that future generations can also benefit from the beauty of natural wood material."}
          </p>
        </div>
      </div>
    </section>
  );
}
