
"use client";

import { motion } from "framer-motion";

export default function Location() {
  return (
    <section id="location" className="bg-orange-50 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6">
        
        {/* Columna izquierda: dirección */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center space-y-4"
        >
            <span className="font-sans  uppercase tracking-wide mb-2 block px-4 text-pink-950">
          Visítanos
        </span>
          <h3 className="font-serif text-5xl mb-4 px-4 text-pink-950">¿Dónde nos encuentras?</h3>
          
          <p className="font-sans text-xl text-gray-600 mt-6 px-4">
            Av. Libertador Bernardo O'Higgins 777, Santiago Centro
          </p>
          <p className="font-sans text-xl text-gray-600 px-4">
            Horario: Lunes a Domingo, 9:00 – 21:00 hrs
          </p>
        </motion.div>

        {/* Columna derecha: mapa embed */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.789123456!2d-70.6483!3d-33.4569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c59c123456%3A0xabcdef123456!2sSantiago%20Centro!5e0!3m2!1ses!2scl!4v1621234567890!5m2!1ses!2scl"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
