import { Globe, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 flex items-center justify-between px-8 py-6 text-white mix-blend-difference">
      <div className="text-2xl font-bold tracking-tighter">Holzwerk.</div>

      <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">
        <a href="#" className="hover:opacity-70 transition">
          Home
        </a>
        <a href="#" className="hover:opacity-70 transition">
          About Us
        </a>
        <a href="#" className="hover:opacity-70 transition">
          Products
        </a>
        <a href="#" className="hover:opacity-70 transition">
          Materials
        </a>
        <a href="#" className="hover:opacity-70 transition">
          Custom Order
        </a>
        <a href="#" className="hover:opacity-70 transition">
          Contact
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center gap-1 cursor-pointer">
          <Globe size={16} />
          <span className="text-xs uppercase">EN</span>
        </div>
        <Menu className="md:hidden" />
      </div>
    </nav>
  );
}
