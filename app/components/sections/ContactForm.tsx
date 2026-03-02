"use client";

import React, { useState } from "react";
import { Upload, Send } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/translations/translations";

export default function ContactForm() {
  const [file, setFile] = useState<File | null>(null);
  const { language } = useLanguage();
  const t = translations[language];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const woodOptions = [
    "Eiche",
    "Nussbaum",
    "Buche",
    "Kirsche",
    "Esche",
  ];

  const woodOptionsEn = [
    "Oak",
    "Walnut",
    "Beech",
    "Cherry",
    "Ash",
  ];

  return (
    <section id="anfrage" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4 font-medium">
            {t.contact.label}
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">
            {t.contact.title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t.contact.description}
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="max-w-2xl mx-auto bg-card rounded-xl p-8 md:p-10 shadow-sm border border-border/40">
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label
                className="text-sm font-medium text-foreground"
                htmlFor="name">
                {t.contact.formFields.name} *
              </label>
              <input
                id="name"
                name="name"
                required
                className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder={t.contact.formFields.namePlaceholder}
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium text-foreground"
                htmlFor="email">
                {t.contact.formFields.email} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder={t.contact.formFields.emailPlaceholder}
              />
            </div>
          </div>

          {/* Phone & Product Type */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label
                className="text-sm font-medium text-foreground"
                htmlFor="phone">
                {t.contact.formFields.phone}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder={t.contact.formFields.phonePlaceholder}
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium text-foreground"
                htmlFor="productType">
                {t.contact.formFields.subject} *
              </label>
              <input
                id="productType"
                name="productType"
                required
                className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder={t.contact.formFields.subjectPlaceholder}
              />
            </div>
          </div>

          {/* Dimensions & Wood Type */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label
                className="text-sm font-medium text-foreground"
                htmlFor="dimensions">
                {language === "de" ? "Maße (L x B x H)" : "Dimensions (W x D x H)"}
              </label>
              <input
                id="dimensions"
                name="dimensions"
                className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder={language === "de" ? "z.B. 180 x 90 x 75 cm" : "e.g. 180 x 90 x 75 cm"}
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium text-foreground"
                htmlFor="woodType">
                {language === "de" ? "Holzart" : "Wood Type"}
              </label>
              <select
                id="woodType"
                name="woodType"
                className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                <option value="">
                  {language === "de" ? "Bitte wählen" : "Please select"}
                </option>
                {(language === "de" ? woodOptions : woodOptionsEn).map(
                  (wood) => (
                    <option key={wood} value={wood}>
                      {wood}
                    </option>
                  )
                )}
                <option value="other">
                  {language === "de"
                    ? "Andere (bitte angeben)"
                    : "Other (please specify)"}
                </option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2 mb-6">
            <label
              className="text-sm font-medium text-foreground"
              htmlFor="description">
              {t.contact.formFields.description} *
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={5}
              className="flex min-h-30 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              placeholder={t.contact.formFields.descriptionPlaceholder}
            />
          </div>

          {/* File Upload */}
          <div className="space-y-2 mb-8">
            <label className="text-sm font-medium text-foreground">
              {t.contact.formFields.file}
            </label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary hover:bg-primary/5 transition-all cursor-pointer relative">
              <input
                type="file"
                id="file-upload"
                accept="image/*,.pdf"
                className="hidden"
                onChange={handleFileChange}
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <Upload className={`w-8 h-8 ${file ? "text-primary" : ""}`} />
                  <span className="font-medium">
                    {file
                      ? file.name
                      : language === "de"
                        ? "Klicken zum Hochladen"
                        : "Click to upload"}
                  </span>
                  <span className="text-xs">
                    {language === "de"
                      ? "(JPG, PNG, PDF bis 10MB)"
                      : "(JPG, PNG, PDF up to 10MB)"}
                  </span>
                </div>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 font-semibold h-12 rounded-md px-8 text-base shadow-md">
            <Send className="w-5 h-5" />
            {t.contact.formFields.submit}
          </button>

          <p className="text-[11px] text-muted-foreground text-center mt-4">
            {language === "de"
              ? "* Pflichtfelder. Ihre Daten werden vertraulich behandelt."
              : "* Required fields. Your data will be treated confidentially."}
          </p>
        </form>
      </div>
    </section>
  );
}
