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
                <span>📍</span>
                <span>[Tu dirección]</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>[Tu teléfono]</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <span>[Tu email]</span>
              </li>
            </ul>
          </div>
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
