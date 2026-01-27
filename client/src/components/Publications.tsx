import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { publications } from '@/data/publications';

/**
 * Diseño: Minimalismo Cálido
 * Sección Publicaciones: Listado de artículos académicos con enlaces a ResearchGate y Google Académico
 */
export default function Publications() {
  const { language } = useLanguage();

  return (
    <section id="publicaciones" className="py-20 bg-muted">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {language === 'es' ? 'Publicaciones Académicas' : 'Publicações Acadêmicas'}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-foreground/70 mt-6 text-lg">
            {language === 'es'
              ? 'Consulta mis investigaciones y publicaciones profesionales en psicología del trabajo y las organizaciones'
              : 'Consulte minhas pesquisas e publicações profissionais em psicologia do trabalho e das organizações'}
          </p>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {publications.map((pub) => (
            <Card
              key={pub.id}
              className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg md:text-xl text-primary mb-2">
                      {language === 'es' ? pub.title : pub.titlePt}
                    </CardTitle>
                    <CardDescription className="text-base text-foreground/70">
                      {pub.journal} • {pub.year}
                    </CardDescription>
                  </div>
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                    {pub.citations} {language === 'es' ? 'citas' : 'citações'}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-6">
                  {language === 'es' ? pub.description : pub.descriptionPt}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-primary text-primary hover:bg-primary/10"
                    onClick={() => window.open(pub.researchGateUrl, '_blank')}
                  >
                    <ExternalLink size={16} />
                    ResearchGate
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-primary text-primary hover:bg-primary/10"
                    onClick={() => window.open(pub.googleScholarUrl, '_blank')}
                  >
                    <ExternalLink size={16} />
                    Google Académico
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Profile Links */}
        <div className="mt-12 p-8 bg-white rounded-lg shadow-sm border-l-4 border-l-primary">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">
                {language === 'es' ? 'Perfil Completo' : 'Perfil Completo'}
              </h3>
              <p className="text-foreground/70">
                {language === 'es'
                  ? 'Accede a mi perfil completo con todas mis publicaciones y colaboraciones académicas'
                  : 'Acesse meu perfil completo com todas as minhas publicações e colaborações acadêmicas'}
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                onClick={() => window.open('https://www.researchgate.net/profile/Wilner-Riascos-2', '_blank')}
              >
                <ExternalLink size={18} />
                ResearchGate
              </Button>
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                onClick={() => window.open('https://scholar.google.com/citations?user=YaY98QQAAAAJ&hl=es', '_blank')}
              >
                <ExternalLink size={18} />
                Google Scholar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
