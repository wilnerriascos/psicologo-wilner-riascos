import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

/**
 * Diseño: Minimalismo Cálido
 * Sección Media: Videos y Audios con contenido multimedia
 */
export default function Media() {
  const { t, language } = useLanguage();

  return (
    <section id="media" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Videos Section */}
        <div className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {t('videos.title')}
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-foreground/70 mt-6 text-lg">
              {t('videos.description')}
            </p>
          </div>

          {/* Videos Placeholder */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card
                key={`video-${item}`}
                className="bg-muted border-0 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
              >
                <div className="aspect-video bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <div className="text-center">
                    <div className="text-4xl mb-2">▶️</div>
                    <p className="text-sm text-foreground/60">Video {item}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-foreground/70">
                    {language === 'es' 
                      ? 'Haz clic para ver el video en YouTube' 
                      : 'Clique para assistir o vídeo no YouTube'}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add Video Button */}
          <div className="mt-8 text-center">
            <p className="text-foreground/60 text-sm mb-4">
              {language === 'es' 
                ? 'Aquí puedes agregar enlaces a tus videos de YouTube' 
                : 'Aqui você pode adicionar links para seus vídeos do YouTube'}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>

        {/* Audios Section */}
        <div>
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {t('audios.title')}
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-foreground/70 mt-6 text-lg">
              {t('audios.description')}
            </p>
          </div>

          {/* Spotify Podcast Embed */}
          <div className="bg-muted rounded-lg p-8 md:p-12 shadow-sm border border-primary/10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Spotify Icon and Info */}
              <div className="flex-shrink-0 text-center md:text-left">
                <div className="text-6xl mb-4">🎧</div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {language === 'es' ? 'Mi Podcast en Spotify' : 'Meu Podcast no Spotify'}
                </h3>
                <p className="text-foreground/70 mb-6 max-w-sm">
                  {language === 'es'
                    ? 'Escucha mis episodios sobre bienestar emocional, salud mental y crecimiento personal directamente en Spotify.'
                    : 'Ouça meus episódios sobre bem-estar emocional, saúde mental e crescimento pessoal diretamente no Spotify.'}
                </p>
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2"
                  onClick={() => window.open('https://open.spotify.com/show/1lsWL9iqGQFOOguhylEbhU?si=6c9cac9c66f24c63', '_blank')}
                >
                  <ExternalLink size={18} />
                  {language === 'es' ? 'Escuchar en Spotify' : 'Ouvir no Spotify'}
                </Button>
              </div>

              {/* Spotify Embed */}
              <div className="flex-1 w-full">
                <iframe
                  src="https://open.spotify.com/embed/show/1lsWL9iqGQFOOguhylEbhU?utm_source=generator"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-foreground/60 text-sm">
              {language === 'es'
                ? '¿Tienes sugerencias de temas? Contáctame para propuestas de episodios'
                : 'Tem sugestões de temas? Entre em contato para propostas de episódios'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
