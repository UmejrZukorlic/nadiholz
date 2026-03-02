"use client";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/sections/About";
import ContactForm from "./components/sections/ContactForm";
import Hero from "./components/sections/Hero";
import InfoSection from "./components/sections/Info";
import Materials from "./components/sections/Materials";
import Products from "./components/sections/Products";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Materials />
      <ContactForm />
      <InfoSection />
      <Footer />
    </>
  );
}
