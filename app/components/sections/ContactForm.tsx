"use client";

import React, { useState, useRef, useEffect } from "react";
import { Upload, Send } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/translations/translations";
import { useInView } from "@/app/hooks/useInView";

export default function ContactForm({ selectedProduct }: any) {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { language } = useLanguage();
  const t = translations[language];
  const { ref, isInView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (!selectedProduct || !formRef.current) return;

    const form = formRef.current;

    (form.elements.namedItem("productType") as HTMLInputElement).value =
      selectedProduct.name;

    (form.elements.namedItem("description") as HTMLTextAreaElement).value =
      selectedProduct.desc;
  }, [selectedProduct]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const toBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    let fileData = "";
    if (file) {
      fileData = await toBase64(file);
    }

    const formData = new FormData(formRef.current!);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      productType: formData.get("productType"),
      dimensions: formData.get("dimensions"),
      woodType: formData.get("woodType"),
      description: formData.get("description"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        alert("Poslato!");
        formRef.current?.reset();
        setFile(null);
      } else {
        alert("Greška pri slanju");
      }
      setLoading(false);
    } catch (err) {
      alert("Greška na serveru");
      setLoading(false);
    }
  };

  const woodOptions = ["Eiche", "Nussbaum", "Buche", "Kirsche", "Esche"];
  const woodOptionsEn = ["Oak", "Walnut", "Beech", "Cherry", "Ash"];

  return (
    <section
      id="anfrage"
      className={`py-24 md:py-32 bg-background transition-all ${
        isInView ? "animate-fade-in-up" : "opacity-hidden"
      }`}
      ref={ref}>
      <div className="container mx-auto px-6">
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

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-card rounded-xl p-8 md:p-10 shadow-sm border border-border/40">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              name="name"
              required
              className="flex h-11 w-full rounded-md border border-input px-3"
              placeholder={t.contact.formFields.name}
            />
            <input
              name="email"
              type="email"
              required
              className="flex h-11 w-full rounded-md border border-input px-3"
              placeholder={t.contact.formFields.email}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              name="phone"
              className="flex h-11 w-full rounded-md border border-input px-3"
              placeholder={t.contact.formFields.phone}
            />
            <input
              name="productType"
              required
              className="flex h-11 w-full rounded-md border border-input px-3"
              placeholder={t.contact.formFields.subject}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              name="dimensions"
              className="flex h-11 w-full rounded-md border border-input px-3"
              placeholder="Dimensions"
            />
            <select
              name="woodType"
              className="flex h-11 w-full rounded-md border border-input px-3">
              <option value="">
                {language === "de" ? "Bitte wählen" : "Select"}
              </option>
              {(language === "de" ? woodOptions : woodOptionsEn).map((wood) => (
                <option key={wood} value={wood}>
                  {wood}
                </option>
              ))}
            </select>
          </div>

          <textarea
            name="description"
            required
            rows={5}
            className="w-full rounded-md border border-input px-3 py-2 mb-6"
            placeholder={t.contact.formFields.description}
          />

          <input type="hidden" name="file" />
          <input type="hidden" name="file_name" />

          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center mb-8">
            <input
              type="file"
              id="file-upload"
              accept="image/*,.pdf"
              className="hidden"
              onChange={handleFileChange}
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <Upload className="w-8 h-8" />
                <span>
                  {file
                    ? file.name
                    : language === "de"
                      ? "Klicken zum Hochladen"
                      : "Click to upload"}
                </span>
              </div>
            </label>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-primary text-white h-12 rounded-md">
            <Send className="w-5 h-5" />
            {loading ? "Sending..." : t.contact.formFields.submit}
            {}
          </button>
        </form>
      </div>
    </section>
  );
}
