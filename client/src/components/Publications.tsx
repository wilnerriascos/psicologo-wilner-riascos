import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export default function Publications() {
  const { t } = useLanguage();

  const publications = [
    {
      title: 'Publicación 1',
      year: '2023',
      journal: 'Revista de Psicología',
      description: 'Descripción de la investigación...',
    },
    {
      title: 'Publicación 2',
      year: '2023',
      journal: 'Journal of Psychology',
      description: 'Descripción de la investigación...',
    },
    {
      title: 'Publicación 3',
      year: '2022',
      journal: 'Revista Científica',
      description: 'Descripción de la investigación...',
    },
  ];

  return (
    <section id="publicaciones" className="py-20 bg-muted">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('publications.title')}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-foreground/70 mt-6 text-lg">
            {t('publications.description')}
          </p>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-primary mb-2">
                      {pub.title}
                    </CardTitle>
                    <CardDescription className="text-base text-foreground/70">
                      {pub.journal} • {pub.year}
                    </CardDescription>
                  </div>
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                    {pub.year}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">
                  {pub.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 border-primary text-primary hover:bg-primary/10"
                >
                  <ExternalLink size={16} />
                  Ver Publicación
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add Publication Info */}
        <div className="mt-12 p-8 bg-white rounded-lg shadow-sm border-l-4 border-l-primary text-center">
          <p className="text-foreground/70 text-lg">
            Aquí puedes agregar enlaces a tus publicaciones académicas y artículos de investigación
          </p>
        </div>
      </div>
    </section>
  );
}
