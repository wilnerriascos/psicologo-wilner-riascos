import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, Globe } from 'lucide-react';

/**
 * Diseño: Minimalismo Cálido
 * Sección Contact: Información de contacto simplificada
 */
export default function Contact() {
  const { t, language } = useLanguage();

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('contact.title')}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-foreground/70 mt-6 text-lg">
            {t('contact.description')}
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Location Card */}
          <Card className="bg-muted border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <Globe className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {language === 'es' ? 'Ubicación' : 'Localização'}
              </h3>
              <p className="text-foreground/70 text-base leading-relaxed">
                {language === 'es' 
                  ? '100% Online - Disponible desde cualquier lugar del mundo'
                  : '100% Online - Disponível de qualquer lugar do mundo'}
              </p>
            </CardContent>
          </Card>

          {/* Phone Card */}
          <Card className="bg-muted border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <Phone className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {language === 'es' ? 'Teléfono' : 'Telefone'}
              </h3>
              <a 
                href="tel:+5511966047554"
                className="text-foreground/70 hover:text-primary transition-colors duration-200 text-base font-medium"
              >
                +55 (11) 96604-7554
              </a>
            </CardContent>
          </Card>

          {/* Email Card */}
          <Card className="bg-muted border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <Mail className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {language === 'es' ? 'Email' : 'Email'}
              </h3>
              <a 
                href="mailto:wilner.riascos@gmail.com"
                className="text-foreground/70 hover:text-primary transition-colors duration-200 text-base font-medium break-all"
              >
                wilner.riascos@gmail.com
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-foreground/60 text-base">
            {language === 'es'
              ? 'Contáctame directamente para agendar tu cita o resolver cualquier pregunta'
              : 'Entre em contato comigo diretamente para agendar sua consulta ou esclarecer dúvidas'}
          </p>
        </div>
      </div>
    </section>
  );
}
