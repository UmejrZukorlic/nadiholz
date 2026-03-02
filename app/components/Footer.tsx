"use client";

import { Instagram, Facebook, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/translations/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Socials */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="text-2xl font-serif font-semibold text-accent-foreground mb-4 block">
              Holzwerk<span className="text-wood-light">.</span>
            </a>
            <p className="text-accent-foreground/80 leading-relaxed max-w-md mb-6">
              {t.footer.tagline}{" "}
              {language === "de"
                ? "Seit 1985 verbinden wir traditionelle Handwerkskunst mit modernem Design."
                : "Since 1985, we combine traditional craftsmanship with modern design."}
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent-foreground/10 hover:bg-accent-foreground/20 flex items-center justify-center transition-all"
                aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent-foreground/10 hover:bg-accent-foreground/20 flex items-center justify-center transition-all"
                aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-accent-foreground mb-6 uppercase tracking-wider text-sm">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-accent-foreground/70 hover:text-accent-foreground transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a
                  href="#ueber-uns"
                  className="text-accent-foreground/70 hover:text-accent-foreground transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href="#produkte"
                  className="text-accent-foreground/70 hover:text-accent-foreground transition-colors">
                  {t.nav.products}
                </a>
              </li>
              <li>
                <a
                  href="#materialien"
                  className="text-accent-foreground/70 hover:text-accent-foreground transition-colors">
                  {t.nav.materials}
                </a>
              </li>
              <li>
                <a
                  href="#anfrage"
                  className="text-accent-foreground/70 hover:text-accent-foreground transition-colors">
                  {t.nav.contact}
                </a>
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
                <a
                  href="tel:+498912345678"
                  className="hover:text-accent-foreground transition-colors">
                  +49 89 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-3 text-accent-foreground/70">
                <Mail className="w-4 h-4 text-wood-light" />
                <a
                  href="mailto:info@holzwerk-moebel.de"
                  className="hover:text-accent-foreground transition-colors">
                  info@holzwerk-moebel.de
                </a>
              </li>
            </ul>
            <div className="mt-6 text-accent-foreground/60 text-sm leading-relaxed">
              <p>Musterstraße 42</p>
              <p>80331 München</p>
              <p>{language === "de" ? "Deutschland" : "Germany"}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-foreground/10 pt-8">
          <div className="flex flex-col md:row justify-between items-center gap-6">
            <p className="text-accent-foreground/40 text-sm text-center md:text-left">
              © {currentYear} {t.footer.company}.{" "}
              {language === "de" ? "Alle Rechte vorbehalten." : "All rights reserved."}
            </p>
            <div className="flex gap-8 text-xs font-medium">
              <a
                href="#"
                className="text-accent-foreground/40 hover:text-accent-foreground transition-colors uppercase tracking-widest">
                {language === "de" ? "Impressum" : "Imprint"}
              </a>
              <a
                href="#"
                className="text-accent-foreground/40 hover:text-accent-foreground transition-colors uppercase tracking-widest">
                {language === "de" ? "Datenschutz" : "Privacy"}
              </a>
              <a
                href="#"
                className="text-accent-foreground/40 hover:text-accent-foreground transition-colors uppercase tracking-widest">
                {language === "de" ? "AGB" : "Terms"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
