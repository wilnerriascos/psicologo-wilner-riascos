import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { key: 'nav.inicio', href: '#inicio' },
    { key: 'nav.sobre', href: '#sobre' },
    { key: 'nav.servicios', href: '#servicios' },
    { key: 'nav.videos', href: '#videos' },
    { key: 'nav.audios', href: '#audios' },
    { key: 'nav.publicaciones', href: '#publicaciones' },
    { key: 'nav.contacto', href: '#contacto' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Nombre */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">WRS</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
              >
                {t(item.key)}
              </a>
            ))}
          </div>

          {/* Language Selector and Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="flex gap-2 border-l border-border pl-4">
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded text-sm font-medium transition-all duration-300 ${
                  language === 'es'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('pt')}
                className={`px-3 py-1 rounded text-sm font-medium transition-all duration-300 ${
                  language === 'pt'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                PT
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-in fade-in duration-300">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 text-sm font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
