import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Media from '@/components/Media';
import Publications from '@/components/Publications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

/**
 * Diseño: Minimalismo Cálido con Acentos Naturales
 * Paleta: Verde Oliva (#7A8B6F), Beige (#E8DCC8), Marrón Suave (#9B8B7E)
 * Tipografía: Playfair Display (títulos), Lato (cuerpo)
 * Filosofía: Profesionalismo, confianza, calidez y comodidad
 */
export default function Home() {
  return (
    <>
      <SEO
        title="Wilner Riascos Sánchez - Psicólogo | Acompañamiento Profesional Online"
        description="Psicólogo profesional que ofrece acompañamiento en salud mental, orientación de carrera, parentalidad y migración. Atención 100% online disponible mundialmente."
        keywords="psicólogo online, terapia psicológica, salud mental, bienestar emocional, orientación profesional, terapia de pareja, terapia familiar, psicología del trabajo, migración, adaptación cultural"
      />
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-1">
          <Hero />
          <About />
          <Services />
          <Media />
          <Publications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
