import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Wilner Riascos</h3>
            <p className="text-primary-foreground/80">
              Psicólogo Profesional dedicado a tu bienestar
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#sobre" className="hover:text-primary-foreground transition-colors">
                  Sobre Mí
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary-foreground transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-primary-foreground transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+5511966047554" className="hover:text-primary-foreground transition-colors">
                  +55 (11) 96604-7554
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:wilner.riascos@gmail.com" className="hover:text-primary-foreground transition-colors">
                  wilner.riascos@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://www.linkedin.com/in/wilnerriascos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            title="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.637h3.554v1.364c.429-.658 1.191-1.595 2.897-1.595 2.117 0 3.704 1.385 3.704 4.362v5.506zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.704 0-.951.77-1.703 1.956-1.703 1.187 0 1.915.752 1.94 1.703 0 .946-.753 1.704-1.981 1.704zm1.581 10.019H3.757V9.815h3.161v9.637zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70 text-sm">
          <p>
            © {currentYear} Wilner Riascos Sánchez. {t('footer.rights')}.
          </p>
          <p className="mt-2">
            Sitio web diseñado con cuidado para tu bienestar
          </p>
        </div>
      </div>
    </footer>
  );
}
