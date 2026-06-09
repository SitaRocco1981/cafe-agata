"use client";

import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/images/cafeteria.jpg", w: 600, h: 800 },
    { src: "/images/1.webp", w: 600, h: 400 },
    { src: "/images/2.webp", w: 600, h: 500 },
    { src: "/images/3.jpg", w: 600, h: 700 },
    { src: "/images/bar-concept.jpg", w: 600, h: 450 },
    { src: "/images/cafecitorico.jpeg", w: 600, h: 600 },
  ];

  return (
    <section id="gallery" className="bg-fondo text-texto py-20 px-6">
      {/* Título */}
      <span className="font-sans text-start lg:text-center uppercase tracking-wide mb-2 block px-4 text-pink-950">
          Nuestro espacio
        </span>
      <h3 className="font-serif text-5xl mb-4 text-start lg:text-center px-4 text-pink-950">Galería</h3>
      
      {/* Texto introductorio */}
      <p className="text-start lg:text-center  max-w-2xl mx-auto mb-10 font-sans text-xl text-gray-600 px-4">
        Una selección de momentos y detalles que reflejan la esencia de nuestra cafetería: 
        el ambiente acogedor, la pasión por el café y la experiencia única que ofrecemos.
      </p>

      {/* Masonry */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((img, i) => (
          <div key={i} className="break-inside-avoid">
            <Image
              src={img.src}
              alt={`Galería ${i + 1}`}
              width={img.w}
              height={img.h}
              className="rounded-lg shadow-lg hover:opacity-90 transition"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

