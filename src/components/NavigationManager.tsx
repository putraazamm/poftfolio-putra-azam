"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/ui/Navbar";
import Image from "next/image";
import Dock from "@/components/Dock";
import {
  Home,
  User,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { AnimatePresence, color, motion } from "motion/react";

export default function NavigationManager() {
  const [showDock, setShowDock] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show dock when scrolled down more than 100px
      if (window.scrollY > 100) {
        setShowDock(true);
      } else {
        setShowDock(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dockItems = [
    {
      icon: <Home size={18} className="text-white" />,
      label: "Home",
      onClick: () => (window.location.href = "/#home"),
    },
    {
      icon: <User size={18} className="text-white" />,
      label: "About",
      onClick: () => (window.location.href = "/#about"),
    },
    {
      icon: <Briefcase size={18} className="text-white" />,
      label: "Experience",
      onClick: () => (window.location.href = "/#experience"), // Placeholder
    },
    {
      icon: <Mail size={18} className="text-white" />,
      label: "Contact",
      onClick: () => (window.location.href = "/#contact"), // Placeholder
    },
  ];

  return (
    <>
      <Navbar />

      <AnimatePresence>
        {showDock && (
          <>
            {/* Sticky Dock */}
            <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-[100]">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Dock
                  items={dockItems}
                  panelHeight={68}
                  baseItemSize={50}
                  magnification={70}
                  className="bg-white/10 backdrop-blur-sm shadow-lg z-[100]"
                />
              </motion.div>
            </div>

            {/* Sticky Asterisk Logo */}
            <div className="fixed top-0 left-0 px-7 py-6 z-[100] pointer-events-none">
              <motion.div
                initial={{ scale: 0, rotate: -180, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0, rotate: -180, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20}}
                className="mix-blend-exclusion"
              >
                <a href="/#home" className="pointer-events-auto">
                  <img
                    src="/asterisk-logo.svg"
                    alt="Asterisk Logo"
                    width={67}
                    height={67}
                    style={{
                      filter:
                        "invert(48%) sepia(79%) saturate(2476%) hue-rotate(1deg) brightness(118%) contrast(119%)",
                    }}
                    className=""
                  />
                </a>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
