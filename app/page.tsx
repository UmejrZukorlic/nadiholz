"use client";

import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/sections/About";
import ContactForm from "./components/sections/ContactForm";
import Hero from "./components/sections/Hero";
import InfoSection from "./components/sections/Info";
import Materials from "./components/sections/Materials";
import Products from "./components/sections/Products";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<{
    name: string;
    desc: string;
  } | null>(null);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products setSelectedProduct={setSelectedProduct} />
      <Materials />
      <ContactForm selectedProduct={selectedProduct} />
      <InfoSection />
      <Footer />
    </>
  );
}
