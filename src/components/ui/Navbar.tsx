"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/#experience" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <div className="absolute top-0 flex w-full justify-center p-7 z-50 pointer-events-none">
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 px-8 py-3 items-center rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-lg pointer-events-auto">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white font-display font-medium hover:text-[#d05300] transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex w-full justify-end pointer-events-auto">
          <button
            onClick={() => setIsOpen(true)}
            className="p-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-lg"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/60 backdrop-blur-xl">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-7 right-7 p-3 rounded-full bg-white/10 border border-white/20 text-white shadow-lg hover:bg-white/20 transition-all duration-300"
          >
            <X size={24} />
          </button>

          <nav className="flex flex-col items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-display font-semibold text-white hover:text-orange-500 transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
