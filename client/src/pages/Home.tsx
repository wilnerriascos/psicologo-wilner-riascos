import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Diseño: Minimalismo Cálido con Acentos Naturales
 * Paleta: Verde Oliva (#7A8B6F), Beige (#E8DCC8), Marrón Suave (#9B8B7E)
 * Tipografía: Playfair Display (títulos), Lato (cuerpo)
 * Filosofía: Profesionalismo, confianza, calidez y comodidad
 */
export default function Home() {
  return (
    <>

      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-1">
          <Hero />
          <About />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
