import Navbar from "./components/Navbar";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Products from "./components/sections/Products";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
    </>
  );
}
