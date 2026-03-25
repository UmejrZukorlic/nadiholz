"use client";

import React from "react";
import { Instagram, Facebook, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/translations/translations";
import Link from "next/link";
import { useInView } from "@/app/hooks/useInView";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  const { ref, isInView } = useInView({ threshold: 0.1 });
  // compute the year once; both server and client will see the same value on
  // the initial render which avoids a potential mismatch at new year boundaries.
  const currentYear = React.useMemo(() => new Date().getFullYear(), []);

  return (
    <footer
      ref={ref}
      className={`bg-accent text-accent-foreground transition-all ${isInView ? "animate-fade-in-up" : "opacity-hidden"}`}>
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Socials */}
          <div className="lg:col-span-2">
            <Link
              href="#"
              className="text-2xl font-serif font-semibold text-accent-foreground mb-4 block">
              Holzwerk<span className="text-wood-light">.</span>
            </Link>
            <p className="text-accent-foreground/80 leading-relaxed max-w-md mb-6">
              {t.footer.tagline}{" "}
              {language === "de"
                ? "Zusammenbau von Gartenmöbeln aus Holz, Holzverarbeitung, Montage von vorgefertigten Bauteilen, Oberflächenbehandlung von Holzprodukten"
                : "Assembly of wooden garden furniture, Wood processing, assembly of prefabricated components, Surface treatment of wood products"}
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/nadiholz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent-foreground/10 hover:bg-accent-foreground/20 flex items-center justify-center transition-all"
                aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.facebook.com/people/Nadi-Holz/61586676707548/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent-foreground/10 hover:bg-accent-foreground/20 flex items-center justify-center transition-all"
                aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-accent-foreground mb-6 uppercase tracking-wider text-sm">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-accent-foreground/70 hover:text-accent-foreground transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href="#ueber-uns"
                  className="text-accent-foreground/70 hover:text-accent-foreground transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href="#produkte"
                  className="text-accent-foreground/70 hover:text-accent-foreground transition-colors">
                  {t.nav.products}
                </Link>
              </li>
              <li>
                <Link
                  href="#materialien"
                  className="text-accent-foreground/70 hover:text-accent-foreground transition-colors">
                  {t.nav.materials}
                </Link>
              </li>
              <li>
                <Link
                  href="#anfrage"
                  className="text-accent-foreground/70 hover:text-accent-foreground transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-semibold text-accent-foreground mb-6 uppercase tracking-wider text-sm">
              {t.footer.contact}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-accent-foreground/70">
                <Phone className="w-4 h-4 text-wood-light" />
                <Link
                  href="tel:+498912345678"
                  className="hover:text-accent-foreground transition-colors">
                  +49 16 3152 2740
                </Link>
              </li>
              <li className="flex items-center gap-3 text-accent-foreground/70">
                <Mail className="w-4 h-4 text-wood-light" />
                <Link
                  href="mailto:info@holzwerk-moebel.de"
                  className="hover:text-accent-foreground transition-colors">
                  nadiholz21@gmail.com
                </Link>
              </li>
            </ul>
            <div className="mt-6 text-accent-foreground/60 text-sm leading-relaxed">
              <p>Worthstrße 21</p>
              <p>Hannover, Germany</p>
              <p>{language === "de" ? "Deutschland" : "Germany"}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-foreground/10 pt-8">
          <div className="flex flex-col md:row justify-between items-center gap-6">
            <p className="text-accent-foreground/40 text-sm text-center md:text-left">
              © {currentYear} {t.footer.company}.{" "}
              {language === "de"
                ? "Alle Rechte vorbehalten."
                : "All rights reserved."}
            </p>
            <div className="flex gap-8 text-xs font-medium">
              <Link
                href="#"
                className="text-accent-foreground/40 hover:text-accent-foreground transition-colors uppercase tracking-widest">
                {language === "de" ? "Impressum" : "Imprint"}
              </Link>
              <Link
                href="#"
                className="text-accent-foreground/40 hover:text-accent-foreground transition-colors uppercase tracking-widest">
                {language === "de" ? "Datenschutz" : "Privacy"}
              </Link>
              <Link
                href="#"
                className="text-accent-foreground/40 hover:text-accent-foreground transition-colors uppercase tracking-widest">
                {language === "de" ? "AGB" : "Terms"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
