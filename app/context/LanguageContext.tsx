"use client";

import React, { createContext, useContext, useState } from "react";

type Language = "de" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // start with a hard‑coded default so the server and the initial client render
  // produce the same markup.  We read from localStorage only after the
  // component has mounted, which avoids hydration mismatches when the saved
  // language differs from the default.
  const [language, setLanguageState] = useState<Language>("de");

  React.useEffect(() => {
    const saved = localStorage.getItem("language") as Language | null;
    if (saved && saved !== language) {
      setLanguageState(saved);
    }
  }, []); // run once on mount

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
