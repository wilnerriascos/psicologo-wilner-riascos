import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero-background.jpg)',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-2xl">
        <div className="space-y-6 animate-in fade-in duration-1000">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-white/90 drop-shadow-md font-light">
            {t('hero.subtitle')}
          </p>

          {/* Decorative Line */}
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-white/60 rounded-full"></div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/85 drop-shadow-md max-w-xl mx-auto">
            {t('hero.description')}
          </p>

          {/* Online Service Badge */}
          <div className="flex justify-center gap-2 flex-wrap">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <span className="text-2xl">🌍</span>
              <span className="text-white font-medium">
                {t('hero.online_service')}
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg"
              onClick={() => {
                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('hero.cta')}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
