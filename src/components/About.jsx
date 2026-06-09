"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="grid md:grid-cols-2 lg:gap-8 px-4 lg:px-32 py-20  text-texto"
    >
      {/* Columna izquierda: video o imagen */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center items-center px-4"
      >
      <img src="/images/cafeteria.jpg" alt="Sobre nosotros" className="rounded-lg shadow-lg" /> 
      </motion.div>

      {/* Columna derecha: texto */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center"
      >
        <span className="font-sans  uppercase tracking-wider mt-4 mb-2 px-4 text-pink-950">
          Conócenos
        </span>
        <h3 className="font-serif text-5xl mb-4 text-pink-950 px-4">
          Nuestra Historia
        </h3>
      
        <p className="font-sans text-xl  leading-relaxed  text-gray-600 px-4 mt-4 ">
          Fundada en 2018 en el corazón de la ciudad, Ágata Café  nació de una idea sencilla: crear un espacio donde el tiempo transcurriera más lento y cada taza de café invitara a disfrutar el momento. Inspirados por los viajes de sus fundadores a pequeñas cafeterías de montaña y por la tradición del café de especialidad, comenzaron seleccionando granos de productores locales y diseñando un ambiente cálido, elegante y acogedor. Lo que empezó como un pequeño proyecto se transformó rápidamente en un punto de encuentro para amantes del café, la conversación y la buena gastronomía, manteniendo hasta hoy el compromiso con la calidad, la cercanía y el arte de compartir experiencias memorables.
        </p>
      </motion.div>
     
    </section>
  );
}
