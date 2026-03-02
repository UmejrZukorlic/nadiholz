"use client";

import { useState, useEffect } from "react";
import { Globe, Menu, X } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/translations/translations";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  // Menjanje pozadine headera prilikom skrolovanja
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "#" },
    { name: t.nav.about, href: "#ueber-uns" },
    { name: t.nav.products, href: "#produkte" },
    { name: t.nav.materials, href: "#materialien" },
    { name: t.nav.contact, href: "#anfrage" },
  ];

  const handleLanguageChange = (lang: "de" | "en") => {
    setLanguage(lang);
    setShowLanguageMenu(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? "bg-background/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}>
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className={`text-2xl font-serif font-semibold transition-colors ${
              isScrolled || isOpen ? "text-foreground" : "text-white"
            }`}>
            Nadi Holz<span className="text-primary">.</span>
          </a>

          <div
            className={`hidden lg:flex items-center gap-8 ${isScrolled ? "text-foreground" : "text-white"}`}>
            <ul className="flex items-center gap-8 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="relative">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20">
                <Globe className="w-4 h-4" />
                <span>{language === "de" ? "🇩🇪 DE" : "🇬🇧 EN"}</span>
              </button>
              {showLanguageMenu && (
                <div className="absolute top-full right-0 mt-2 bg-background border border-border rounded-md shadow-lg overflow-hidden z-10">
                  <button
                    onClick={() => handleLanguageChange("de")}
                    className={`w-full px-4 py-2 text-left hover:bg-primary/10 transition-colors flex items-center gap-2 ${
                      language === "de" ? "bg-primary/5" : ""
                    }`}>
                    🇩🇪 Deutsch
                  </button>
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className={`w-full px-4 py-2 text-left hover:bg-primary/10 transition-colors flex items-center gap-2 ${
                      language === "en" ? "bg-primary/5" : ""
                    }`}>
                    🇬🇧 English
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 transition-colors ${isScrolled || isOpen ? "text-foreground" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden absolute left-0 right-0 top-full bg-background border-b border-border transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen
              ? "max-h-screen opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}>
          <div className="flex flex-col p-6 gap-6 shadow-xl">
            <ul className="flex flex-col gap-4 text-lg font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-foreground hover:text-primary transition-colors block py-2"
                    onClick={() => setIsOpen(false)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <hr className="border-border" />
            <div className="flex gap-2">
              <button
                onClick={() => handleLanguageChange("de")}
                className={`flex-1 py-2 px-3 rounded-md border transition-all flex items-center justify-center gap-2 ${
                  language === "de"
                    ? "bg-primary text-white border-primary"
                    : "border-border hover:bg-primary/10"
                }`}>
                🇩🇪 Deutsch
              </button>
              <button
                onClick={() => handleLanguageChange("en")}
                className={`flex-1 py-2 px-3 rounded-md border transition-all flex items-center justify-center gap-2 ${
                  language === "en"
                    ? "bg-primary text-white border-primary"
                    : "border-border hover:bg-primary/10"
                }`}>
                🇬🇧 English
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
