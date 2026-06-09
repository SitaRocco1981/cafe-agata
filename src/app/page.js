export const metadata = {
  title: "Café Ágata | El arte del café en cada grano",
  description: "Descubre Café Ágata, un espacio acogedor en Santiago Centro donde cada taza de café es una experiencia única.",
  keywords: ["café", "cafetería", "Santiago", "café de especialidad", "Café Ágata"],
  openGraph: {
    title: "Café Ágata",
    description: "El arte del café en cada grano",
    url: "https://tusitio.com",
    siteName: "Café Ágata",
    images: [
      {
        url: "/images/cafeteria.jpg",
        width: 800,
        height: 600,
        alt: "Interior de Café Ágata",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Café Ágata",
    description: "El arte del café en cada grano",
    images: ["/images/cafeteria.jpg"],
  },
};

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Location from "@/components/Location";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Location />
      <Gallery />
      <Footer />

    </main>
  );
}