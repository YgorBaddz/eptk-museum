"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import MenuItem from "./MenuItem";

const menuItems = [
  { href: "/history", label: "История" },
  { href: "/teachers", label: "Преподаватели" },
  { href: "/specialties", label: "Специальности" },
  { href: "/contact", label: "Связь" },
  { href: "/misc", label: "Разное" },
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
    <nav className="relative px-2 flex justify-between items-center text-white">
      <div className="container mx-auto flex items-center justify-center">
        <Link href="/">
          <p className="text-lg font-bold tracking-wider cursor-pointer flex items-center justify-center bg-[#CF9056] hover:bg-[#c18043] duration-150 rounded-sm w-[100px] h-[100px] mr-4">
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
          className="md:hidden flex justify-center items-center w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full transition duration-200 ease-in-out"
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
          className={`md:hidden absolute top-full left-0 right-0 bg-gray-900 transition-all duration-300 ease-in-out overflow-hidden ${
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
