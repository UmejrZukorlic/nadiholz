export const translations = {
  de: {
    // Navbar
    nav: {
      home: "Startseite",
      about: "Über uns",
      products: "Produkte",
      materials: "Materialien",
      contact: "Anfrage",
    },
    // Hero Section
    hero: {
      subtitle: "Deutsche Handwerkskunst seit 1985",
      title: "Handgefertigte Holzmöbel & Tische",
      titlePart2: "aus Deutschland",
      buttonProducts: "Unsere Produkte",
      buttonContact: "Kontakt aufnehmen",
    },
    // About Section
    about: {
      label: "Über uns",
      title: "Tradition trifft moderne Handwerkskunst",
      description:
        "Seit 1985 fertigen wir in unserer Werkstatt im Herzen Deutschlands hochwertige Holzmöbel. Was als kleine Schreinerei begann, ist heute ein renommiertes Atelier für maßgefertigte Möbelstücke, die Generationen überdauern.",
      features: [
        {
          title: "Deutsche Handwerkskunst",
          desc: "Generationen von Erfahrung und Präzision in jedem Stück.",
        },
        {
          title: "Nachhaltigkeit",
          desc: "Holz aus zertifizierten, nachhaltigen europäischen Wäldern.",
        },
        {
          title: "Leidenschaft",
          desc: "Jedes Möbelstück wird mit Liebe zum Detail gefertigt.",
        },
        {
          title: "Maßanfertigung",
          desc: "Individuelle Lösungen, perfekt auf Ihre Wünsche abgestimmt.",
        },
      ],
      stats: [
        { value: "40+", label: "Jahre Erfahrung" },
        { value: "2000+", label: "Zufriedene Kunden" },
        { value: "100%", label: "Handarbeit" },
        { value: "∞", label: "Leidenschaft" },
      ],
    },
    // Products Section - USKLAĐENO SA SLIKAMA
    products: {
      label: "Unsere Produkte",
      title: "Meisterstücke aus unserer Werkstatt",
      description:
        "Entdecken Sie unsere Kollektion handgefertigter Unikate. Jedes Stück wird sa ljubavlju prema detaljima i najvišom preciznošću.",
      items: [
        {
          category: "Gartenmöbel",
          name: "Duo Gartenbank",
          desc: "Massive Gartenbank mit integriertem Mitteltisch für entspannte Stunden im Freien.",
          image: "/images/1.png",
        },
        {
          category: "Theken & Bars",
          name: "Rustikale Bartheke",
          desc: "Handgefertigte Bar aus geflammtem Holz mit einer markanten, rustikalen Optik.",
          image: "/images/2.jfif",
        },
        {
          category: "Sitzgruppen",
          name: "Massive Picknick-Garnitur",
          desc: "Robuste Holzsitzbank mit fest montiertem Tisch für Garten ili parkove.",
          image: "/images/3.jfif",
        },
        {
          category: "Liegen",
          name: "Holz-Sonnenliege",
          desc: "Bequeme Sonnenliege aus massivem Holz für optimalen Komfort beim Sonnenbaden.",
          image: "/images/4.jfif",
        },
        {
          category: "Tische",
          name: "Design-Gartentisch",
          desc: "Rustikaler Holztisch mit massivem X-Gestell für hohe Stabilität.",
          image: "/images/5.png",
        },
        {
          category: "Sitzkombinationen",
          name: "Balkon-Duo Set",
          desc: "Kompakte Sitzlösung mit zwei Stühlen und integriertem Abstelltisch.",
          image: "/images/1.png",
        },
      ],
      requestQuote: "Angebot anfragen",
    },
    // Materials Section - USKLAĐENO SA SLIKOM
    materials: {
      label: "Materialien & Qualität",
      title: "Only the Finest Wood",
      description:
        "We exclusively use certified solid wood from sustainable forestry. Each type of wood has its own characteristics, which we carefully select for your furniture piece.",
      woods: [
        {
          name: "Oak",
          description:
            "Robust and durable with distinctive grain. Ideal for dining tables and representative furniture.",
          features: ["Very Hard", "Durable", "Moisture Resistant"],
        },
        {
          name: "Walnut",
          description:
            "Dark, noble wood with warm tones. Perfect for elegant living room furniture.",
          features: ["Noble Look", "Medium Hardness", "Value Stable"],
        },
        {
          name: "Beech",
          description:
            "Versatile and easy to maintain. Popular for modern, timeless designs.",
          features: ["Even Structure", "Durable", "Affordable"],
        },
        {
          name: "Cherry",
          description:
            "Warm reddish tones that darken over time. For special accents.",
          features: ["Warm Color", "Fine Grain", "Exclusive"],
        },
      ],
      sustainableTitle: "Sustainable Forestry",
      sustainableDesc:
        "All our wood comes from FSC-certified forests in Europe. For every tree felled, several new ones are planted. This is how we contribute to ensuring that future generations can also benefit from the beauty of natural wood.",
    },
    // Contact Form Section
    contact: {
      label: "Maßanfertigung",
      title: "Ihr Wunschmöbel anfragen",
      description:
        "Teilen Sie uns Ihre Vorstellungen mit. Wir erstellen Ihnen ein unverbindliches Angebot für Ihr individuelles Möbelstück.",
      formFields: {
        name: "Name",
        email: "E-Mail",
        phone: "Telefon",
        subject: "Projektname",
        description: "Beschreibung des Möbelstücks",
        file: "Datei hochladen (optional)",
        submit: "Anfrage senden",
        required: "erforderlich",
        namePlaceholder: "Ihr vollständiger Name",
        emailPlaceholder: "ihre.email@example.com",
        phonePlaceholder: "+49 123 456789",
        subjectPlaceholder: "z.B. Maßgefertigter Esstisch",
        descriptionPlaceholder:
          "Beschreiben Sie Ihr Wunschmöbel...\n\nAbmessungen, Stilrichtung, Besonderheiten...",
      },
    },
    // Info Section
    info: {
      label: "Kontakt",
      title: "Kontakt & Öffnungszeiten",
      description:
        "Wir sind für Sie erreichbar und freuen uns auf Ihre Anfrage. Besuchen Sie uns in unserer Werkstatt oder kontaktieren Sie uns direkt.",
      address: "Adresse",
      phone: "Telefon",
      email: "E-Mail",
      hours: "Öffnungszeiten",
      location: `Holzwerk Möbelmanufaktur\nMusterstraße 42\n80331 München, Deutschland`,
      phoneNumber: "+49 89 1234 5678",
      emailAddress: "info@holzwerk-moebel.de",
      openingHours: `Mo - Fr: 8:00 - 18:00 Uhr\nSa: 9:00 - 14:00 Uhr (nach Vereinbarung)\nSo: Geschlossen`,
    },
    // Footer
    footer: {
      company: "Holzwerk Möbelmanufaktur",
      tagline: "Handgefertigte Möbel aus Deutschland",
      quickLinks: "Schnelllinks",
      contact: "Kontakt",
      copyRight: "© 2026 Holzwerk. Alle Rechte vorbehalten.",
    },
  },
  en: {
    // Navbar
    nav: {
      home: "Home",
      about: "About",
      products: "Products",
      materials: "Materials",
      contact: "Inquiry",
    },
    // Hero Section
    hero: {
      subtitle: "German Craftsmanship Since 1985",
      title: "Handcrafted Wooden Furniture & Tables",
      titlePart2: "from Germany",
      buttonProducts: "Our Products",
      buttonContact: "Get in Touch",
    },
    // About Section
    about: {
      label: "About Us",
      title: "Tradition Meets Modern Craftsmanship",
      description:
        "Since 1985, we have been crafting high-quality wooden furniture in our workshop in the heart of Germany. What began as a small carpentry shop is now a renowned atelier for custom-made furniture pieces that last for generations.",
      features: [
        {
          title: "German Craftsmanship",
          desc: "Generations of experience and precision in every piece.",
        },
        {
          title: "Sustainability",
          desc: "Wood from certified, sustainable European forests.",
        },
        {
          title: "Passion",
          desc: "Every furniture piece is crafted with love for detail.",
        },
        {
          title: "Custom Made",
          desc: "Individual solutions tailored perfectly to your wishes.",
        },
      ],
      stats: [
        { value: "40+", label: "Years of Experience" },
        { value: "2000+", label: "Satisfied Customers" },
        { value: "100%", label: "Handmade" },
        { value: "∞", label: "Passion" },
      ],
    },
    // Products Section - USKLAĐENO SA SLIKAMA
    products: {
      label: "Our Products",
      title: "Masterpieces from our Workshop",
      description:
        "Discover our collection of handcrafted originals. Each piece is unique, crafted with attention to detail and highest precision.",
      items: [
        {
          category: "Garden Furniture",
          name: "Duo Garden Bench",
          desc: "Solid garden bench with integrated middle table for relaxing outdoor hours.",
          image: "/images/1.png",
        },
        {
          category: "Counter & Bars",
          name: "Rustic Bar Counter",
          desc: "Handcrafted bar made from scorched wood with a striking, rustic look.",
          image: "/images/2.jfif",
        },
        {
          category: "Outdoor Sets",
          name: "Massive Picnic Set",
          desc: "Robust wooden bench with a fixed table for garden or park use.",
          image: "/images/3.jfif",
        },
        {
          category: "Loungers",
          name: "Wooden Sun Lounger",
          desc: "Comfortable sun lounger made from solid wood for optimal relaxation.",
          image: "/images/4.jfif",
        },
        {
          category: "Tables",
          name: "Design Garden Table",
          desc: "Rustic wooden table with a massive X-frame for high stability.",
          image: "/images/5.png",
        },
        {
          category: "Seating Combos",
          name: "Balkony Duo Set",
          desc: "Compact seating solution with two chairs and an integrated side table.",
          image: "/images/1.png",
        },
      ],
      requestQuote: "Request Quote",
    },
    // Materials Section - USKLAĐENO SA SLIKOM
    materials: {
      label: "Materials & Quality",
      title: "Only the Finest Wood",
      description:
        "We exclusively use certified solid wood from sustainable forestry. Each type of wood has its own characteristics, which we carefully select for your furniture piece.",
      woods: [
        {
          name: "Oak",
          description:
            "Robust and durable with distinctive grain. Ideal for dining tables and representative furniture.",
          features: ["Very Hard", "Durable", "Moisture Resistant"],
        },
        {
          name: "Walnut",
          description:
            "Dark, noble wood with warm tones. Perfect for elegant living room furniture.",
          features: ["Noble Look", "Medium Hardness", "Value Stable"],
        },
        {
          name: "Beech",
          description:
            "Versatile and easy to maintain. Popular for modern, timeless designs.",
          features: ["Even Structure", "Durable", "Affordable"],
        },
        {
          name: "Cherry",
          description:
            "Warm reddish tones that darken over time. For special accents.",
          features: ["Warm Color", "Fine Grain", "Exclusive"],
        },
      ],
      sustainableTitle: "Sustainable Forestry",
      sustainableDesc:
        "All our wood comes from FSC-certified forests in Europe. For every tree felled, several new ones are planted. This is how we contribute to ensuring that future generations can also benefit from the beauty of natural wood.",
    },
    // Contact Form Section
    contact: {
      label: "Custom Furniture",
      title: "Request Your Dream Furniture",
      description:
        "Share your ideas with us. We will create a non-binding quote for your custom furniture piece.",
      formFields: {
        name: "Name",
        email: "E-Mail",
        phone: "Phone",
        subject: "Project name",
        description: "Furniture description",
        file: "Upload file (optional)",
        submit: "Send Inquiry",
        required: "required",
        namePlaceholder: "Your full name",
        emailPlaceholder: "your.email@example.com",
        phonePlaceholder: "+49 123 456789",
        subjectPlaceholder: "e.g. Custom dining table",
        descriptionPlaceholder:
          "Describe your dream furniture...\n\nDimensions, style, special features...",
      },
    },
    // Info Section
    info: {
      label: "Contact",
      title: "Contact & Opening Hours",
      description:
        "We are here for you and look forward to your inquiry. Visit us in our workshop or contact us directly.",
      address: "Address",
      phone: "Phone",
      email: "E-Mail",
      hours: "Opening Hours",
      location: `Holzwerk Furniture Manufactory\nMusterstraße 42\n80331 Munich, Germany`,
      phoneNumber: "+49 89 1234 5678",
      emailAddress: "info@holzwerk-moebel.de",
      openingHours: `Mon - Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM (by appointment)\nSun: Closed`,
    },
    // Footer
    footer: {
      company: "Holzwerk Furniture Manufactory",
      tagline: "Handcrafted Furniture from Germany",
      quickLinks: "Quick Links",
      contact: "Contact",
      copyRight: "© 2026 Holzwerk. All rights reserved.",
    },
  },
};
