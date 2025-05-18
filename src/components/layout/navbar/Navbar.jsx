"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import MenuItem from "./MenuItem";

const menuItems = [
  { href: "/history", label: "История" },
  { href: "/staff", label: "Кадровый состав" },
  { href: "/specialties", label: "Специальности" },
  { href: "/graduates", label: "Выпускники" },
  { href: "/achievements", label: "Достижения" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Закрываем меню при изменении размера экрана на desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="relative z-[99999] px-2 flex justify-between items-center text-[#E67E22]">
      <div className="container mx-auto flex items-center justify-center">
        <Link href="/">
          <p className="text-lg text-white font-bold tracking-wider cursor-pointer flex items-center justify-center bg-[#E67E22] hover:bg-[#ee872e] duration-150 rounded-sm p-2 mr-4">
            ПОЛИТЕХ
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-4">
          {menuItems.map((item) => (
            <MenuItem key={item.href} href={item.href} label={item.label} />
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex justify-center items-center w-8 h-8 bg-[#E67E22] hover:bg-[#ee872e] rounded-full transition duration-200 ease-in-out"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-[#E67E22] text-white transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="px-4 py-2">
            {menuItems.map((item) => (
              <MenuItem
                key={item.href}
                href={item.href}
                label={item.label}
                mobile
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
