"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-screen flex items-center justify-center text-white"
    >
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover overflow-hidden"
      >
        <source src="/video/cafe-hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay para oscurecer un poco el video */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenido encima del video */}
      <div className="relative z-10 text-center">
        <h2 className="font-serif mt-20 lg:mt-6 text-5xl lg:text-8xl px-4 sm:px-6">El arte del café en cada grano</h2>
        <p className="font-sans font-extralight text-xl lg:text-4xl mt-8 px-4 sm:px-6 ">Un refugio para ti en el corazón de la ciudad</p>

        {/* Botón CTA */}
        <motion.a
          href="/docs/Menú Café Ágata.pdf" target="_blank" rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="inline-block mt-8 px-6 py-3 bg-pink-950 text-white font-sans rounded-lg shadow tracking-wide transition"
        >
          Descubre nuestra carta
        </motion.a>
      </div>
    </motion.section>
  );
}
