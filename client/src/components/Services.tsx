import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: '👤',
      titleKey: 'services.therapy',
      descKey: 'services.therapy_desc',
    },
    {
      icon: '💑',
      titleKey: 'services.couples',
      descKey: 'services.couples_desc',
    },
    {
      icon: '👨‍👩‍👧‍👦',
      titleKey: 'services.family',
      descKey: 'services.family_desc',
    },
    {
      icon: '💼',
      titleKey: 'services.consultation',
      descKey: 'services.consultation_desc',
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-muted">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('services.title')}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer border-t-4 border-t-primary"
            >
              <CardHeader className="pb-3">
                <div className="text-4xl mb-3">{service.icon}</div>
                <CardTitle className="text-xl text-primary">
                  {t(service.titleKey)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70 text-base">
                  {t(service.descKey)}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 bg-white rounded-lg shadow-sm border-l-4 border-l-primary">
          <p className="text-foreground text-lg leading-relaxed">
            Cada sesión es personalizada según tus necesidades específicas. Utilizo técnicas
            basadas en evidencia y un enfoque humanista para acompañarte en tu proceso de
            crecimiento y bienestar.
          </p>
        </div>
      </div>
    </section>
  );
}
