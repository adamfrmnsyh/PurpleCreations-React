import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logopc.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-300 ${
      isActive
        ? "text-[#de8bf3]"
        : "text-[#4f056c] hover:text-[#de8bf3]"
    }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-[#fff9f1]/60 md:backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="flex h-20 items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="h-20 md:h-24"
              />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:block absolute left-[58%] -translate-x-1/2">
              <ul className="flex items-center gap-12 text-sm font-medium">
                <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
                <li><NavLink to="/catalog" className={navLinkClass}>Catalog</NavLink></li>
                <li><NavLink to="/aboutUs" className={navLinkClass}>About Us</NavLink></li>
                <li><NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink></li>
              </ul>
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden text-[#4f056c] text-3xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-[#fff9f1] shadow-lg
          transform transition-transform duration-300 z-[60]
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-6">
            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl text-[#4f056c] mb-6"
            >
              ✕
            </button>

            <ul className="flex flex-col gap-6 text-lg font-medium">
              <li><NavLink onClick={() => setIsOpen(false)} to="/" className={navLinkClass}>Home</NavLink></li>
              <li><NavLink onClick={() => setIsOpen(false)} to="/catalog" className={navLinkClass}>Catalog</NavLink></li>
              <li><NavLink onClick={() => setIsOpen(false)} to="/aboutUs" className={navLinkClass}>About Us</NavLink></li>
              <li><NavLink onClick={() => setIsOpen(false)} to="/contact" className={navLinkClass}>Contact Us</NavLink></li>
            </ul>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 z-50"
          />
        )}
      </header>
    </>
  );
}
