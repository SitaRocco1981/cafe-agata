"use client";

import { motion } from "framer-motion";

export default function Menu() {
  return (
    <section
      id="menu"
      className="relative h-screen flex items-center justify-center text-white"
    >
      {/* Imagen de fondo */}
      <img
        src="/images/cositasparacomer.jpg"
        alt="Fondo carta"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenido central */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-2xl px-6"
      >
        <span className="font-sans  uppercase tracking-wide mb-2 block">
          Nuestra propuesta
        </span>
        <h2 className="font-serif text-5xl lg:text-8xl mb-4 px-4">
          Descubre el arte de nuestra carta
        </h2>
        <p className="font-sans font-extralight text-xl lg:text-2xl mb-14 mt-8 px-4">
          Una selección de cafés de especialidad, repostería artesanal y sabores únicos que te invitan a disfrutar cada momento.
        </p>

        {/* Botón CTA */}
        <a
          href="/docs/Menú Café Ágata.pdf" target="_blank" rel="noopener noreferrer"
          className="tracking-wide inline-block px-6 py-3 bg-orange-950 text-white font-sans rounded-lg shadow hover:bg-terracota transition"
        >
          Descubre nuestra carta
        </a>
      </motion.div>
    </section>
  );
}
