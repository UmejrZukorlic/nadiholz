"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/translations/translations";
import Link from "next/link";
import { useInView } from "@/app/hooks/useInView";

export default function InfoSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const contactDetails = [
    {
      icon: <MapPin className="w-5 h-5 text-primary" />,
      title: t.info.address,
      content: (
        <p className="text-muted-foreground whitespace-pre-line">
          {t.info.location}
        </p>
      ),
    },
    {
      icon: <Phone className="w-5 h-5 text-primary" />,
      title: t.info.phone,
      content: (
        <Link
          href="tel:+498912345678"
          className="text-muted-foreground hover:text-primary transition-colors">
          {t.info.phoneNumber}
        </Link>
      ),
    },
    {
      icon: <Mail className="w-5 h-5 text-primary" />,
      title: t.info.email,
      content: (
        <Link
          href="mailto:info@holzwerk-moebel.de"
          className="text-muted-foreground hover:text-primary transition-colors">
          {t.info.emailAddress}
        </Link>
      ),
    },
    {
      icon: <Clock className="w-5 h-5 text-primary" />,
      title: t.info.hours,
      content: (
        <p className="text-muted-foreground whitespace-pre-line">
          {t.info.openingHours}
        </p>
      ),
    },
  ];

  return (
    <section
      id="kontakt"
      className={`py-24 md:py-32 bg-secondary transition-all ${isInView ? "animate-fade-in-up" : "opacity-hidden"}`}
      ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4 font-medium">
            {t.info.label}
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">
            {t.info.title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t.info.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-background rounded-xl p-8 md:p-10 shadow-sm border border-border/40">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-8">
              {language === "de" ? "Kontaktdaten" : "Contact Information"}
            </h3>

            <div className="space-y-8">
              {contactDetails.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      {item.title}
                    </h4>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Google Maps Placeholder/Iframe */}
          <div className="bg-background rounded-xl overflow-hidden shadow-sm border border-border/40 min-h-100">
            <iframe
              title="Standort Holzwerk Möbelmanufaktur"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d311750.18747738114!2d9.171296646576385!3d52.37860929595293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b00b514d494f85%3A0x425ac6d94ac4720!2z0KXQsNC90L7QstC10YAsINCd0LXQvNCw0YfQutCw!5e0!3m2!1ssr!2srs!4v1774341237090!5m2!1ssr!2srs"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-100 grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
