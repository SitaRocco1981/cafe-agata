"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center"
    >
      <div className="bg-orange-50/60 backdrop-blur rounded-lg px-6 py-4 lg:max-w-7xl w-full mx-auto flex flex-col items-center">
        
        {/* Logotipo */}
        <Image
          src="/images/logo-cafe.webp"
          alt="Café Ágata Logo"
          width={120}
          height={120}
          className="rounded mb-2"
        />

        {/* Botón hamburguesa */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-cafe focus:outline-none"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Menú */}
        <ul
          className={`flex flex-col md:flex-row gap-4 md:gap-6 font-sans font-semibold tracking-wide text-lg text-pink-950 mt-4 transition-all duration-300 ${
            open ? "block" : "hidden md:flex"
          }`}
        >
          <li><a href="#about" onClick={() => setOpen(false)}>Sobre Nosotros</a></li>
          <li><a href="#menu" onClick={() => setOpen(false)}>Carta</a></li>
          <li><a href="#gallery" onClick={() => setOpen(false)}>Galería</a></li>
          <li><a href="#location" onClick={() => setOpen(false)}>Ubicación</a></li>
        </ul>
      </div>
    </motion.nav>
  );
}



