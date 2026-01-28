import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('about.title')}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              {t('about.intro')}
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              {t('about.experience')}
            </p>

            {/* Key Points */}
            <div className="space-y-4 pt-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Experiencia Profesional</h4>
                  <p className="text-foreground/80 text-sm">
                    Años de práctica clínica y especialización en diversas áreas
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Enfoque Humanista</h4>
                  <p className="text-foreground/80 text-sm">
                    Atención personalizada y compasiva para cada paciente
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Confidencialidad</h4>
                  <p className="text-foreground/80 text-sm">
                    Compromiso con la privacidad y ética profesional
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative">
              {/* Decorative background circles */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full w-80 h-80 blur-2xl"></div>
              
              {/* Profile image */}
              <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src="/images/wilner-profile.jpg"
                  alt="Wilner Riascos Sánchez"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Mobile Profile Photo */}
          <div className="md:hidden flex items-center justify-center mb-8">
            <div className="relative">
              {/* Decorative background circles */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full w-64 h-64 blur-2xl"></div>
              
              {/* Profile image */}
              <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src="/images/wilner-profile.jpg"
                  alt="Wilner Riascos Sánchez"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
