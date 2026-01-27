import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export default function Media() {
  const { t } = useLanguage();

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
                    Haz clic para ver el video en YouTube
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add Video Button */}
          <div className="mt-8 text-center">
            <p className="text-foreground/60 text-sm mb-4">
              Aquí puedes agregar enlaces a tus videos de YouTube
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

          {/* Audios Placeholder */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card
                key={`audio-${item}`}
                className="bg-muted border-0 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
              >
                <CardHeader className="pb-3">
                  <div className="text-4xl mb-2">🎵</div>
                  <CardTitle className="text-lg">Audio {item}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70 mb-4">
                    Escucha en Spotify
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full gap-2 border-primary text-primary hover:bg-primary/10"
                  >
                    <ExternalLink size={16} />
                    Escuchar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add Audio Button */}
          <div className="mt-8 text-center">
            <p className="text-foreground/60 text-sm mb-4">
              Aquí puedes agregar enlaces a tus audios de Spotify
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
