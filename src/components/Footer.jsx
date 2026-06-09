"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-orange-50 text-texto py-10 px-6 relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Columna 1: Logotipo */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/images/logo-cafe.webp"
            alt="Ágata Café Logo"
            width={100}
            height={100}
            className="rounded"
          />
        </div>

        {/* Columna 2: Contacto */}
        <div className="space-y-2">
          <h4 className="font-sans text-xl text-gray-600">Contacto</h4>
          <p className="font-sans text-gray-600"> contacto@agatacafe.cl</p>
          <p className="font-sans text-gray-600"> +56 9 1234 5678</p>
          <p className="font-sans text-gray-600">
            Av. Alameda Libertador Bernardo O'Higgins 777, Santiago Centro
          </p>
        </div>

        {/* Columna 3: Redes sociales */}
        <div className="flex flex-col items-center gap-2 md:items-center">
          <span className="font-sans text-gray-600">Síguenos en Instagram:</span>
          <a
            href="https://instagram.com/agatacafe"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2"
          >
            <Image
              src="/images/instagram.png"
              alt="Instagram"
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>

      {/* Línea separadora */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Ágata Café. Todos los derechos reservados.
      </div>

      {/* Botón WhatsApp fijo */}
      <a
        href="https://wa.me/56912345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-50 transition"
      >
        <Image
          src="/images/whatsapp.png" 
          alt="WhatsApp"
          width={30}
          height={30}
        />
      </a>
    </footer>
  );
}







