import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts, categories } from '@/data/blogPosts';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { useRoute } from 'wouter';

/**
 * Diseño: Minimalismo Cálido
 * Página Individual de Artículo: Contenido completo del artículo
 */
export default function BlogPost() {
  const { language, t } = useLanguage();
  const [, params] = useRoute('/blog/:id');
  const postId = params?.id;

  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">
            {language === 'es' ? 'Artículo no encontrado' : 'Artigo não encontrado'}
          </h1>
          <Button onClick={() => (window.location.href = '/blog')} className="gap-2">
            <ArrowLeft size={18} />
            {language === 'es' ? 'Volver al Blog' : 'Voltar ao Blog'}
          </Button>
        </div>
      </div>
    );
  }

  const getCategoryLabel = (categoryId: string) => {
    const category = categories.find((c) => c.id === categoryId);
    return language === 'es' ? category?.labelEs : category?.labelPt;
  };

  const title = language === 'es' ? post.titleEs : post.titlePt;
  const content = language === 'es' ? post.contentEs : post.contentPt;
  const categoryLabel = getCategoryLabel(post.category);

  // Obtener artículos relacionados
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="bg-white border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl py-4">
          <Button
            variant="ghost"
            onClick={() => (window.location.href = '/blog')}
            className="gap-2 text-primary hover:bg-primary/10"
          >
            <ArrowLeft size={18} />
            {language === 'es' ? 'Volver al Blog' : 'Voltar ao Blog'}
          </Button>
        </div>
      </div>

      {/* Article Header */}
      <section className="bg-white border-b border-border py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
              {categoryLabel}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{title}</h1>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-6 text-foreground/70 text-sm">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-primary" />
              <span>
                {new Date(post.date).toLocaleDateString(language === 'es' ? 'es-ES' : 'pt-BR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-primary" />
              <span>
                {post.readTime} {language === 'es' ? 'min de lectura' : 'min de leitura'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <User size={18} className="text-primary" />
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="text-foreground leading-relaxed space-y-6">
              {content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('**') && paragraph.endsWith(':**')) {
                  // Encabezado en negrita
                  return (
                    <h3 key={index} className="text-2xl font-bold text-primary mt-8 mb-4">
                      {paragraph.replace(/\*\*/g, '')}
                    </h3>
                  );
                } else if (paragraph.startsWith('- ')) {
                  // Lista de puntos
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 text-foreground/80">
                      {paragraph.split('\n').map((item, i) => (
                        <li key={i} className="ml-4">
                          {item.replace('- ', '')}
                        </li>
                      ))}
                    </ul>
                  );
                } else if (paragraph.match(/^\d+\./)) {
                  // Lista numerada
                  return (
                    <ol key={index} className="list-decimal list-inside space-y-2 text-foreground/80">
                      {paragraph.split('\n').map((item, i) => (
                        <li key={i} className="ml-4">
                          {item.replace(/^\d+\.\s*/, '')}
                        </li>
                      ))}
                    </ol>
                  );
                } else {
                  // Párrafo normal
                  return (
                    <p key={index} className="text-foreground/80 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Author Card */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-6">
                <div className="text-5xl">👨‍⚕️</div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{post.author}</h3>
                  <p className="text-foreground/70">
                    {language === 'es'
                      ? 'Psicólogo profesional dedicado a tu bienestar mental y emocional.'
                      : 'Psicólogo profissional dedicado ao seu bem-estar mental e emocional.'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-primary mb-8">
              {language === 'es' ? 'Artículos Relacionados' : 'Artigos Relacionados'}
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card
                  key={relatedPost.id}
                  className="bg-muted border-0 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                  onClick={() => {
                    window.location.href = `/blog/${relatedPost.id}`;
                  }}
                >
                  <div className="aspect-video bg-primary/10 flex items-center justify-center text-4xl">
                    {relatedPost.category === 'anxiety' && '😌'}
                    {relatedPost.category === 'depression' && '🌱'}
                    {relatedPost.category === 'relationships' && '💑'}
                    {relatedPost.category === 'stress' && '🧘'}
                    {relatedPost.category === 'self-esteem' && '💪'}
                    {relatedPost.category === 'sleep' && '😴'}
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-primary line-clamp-2">
                      {language === 'es' ? relatedPost.titleEs : relatedPost.titlePt}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/70 line-clamp-2">
                      {language === 'es' ? relatedPost.excerptEs : relatedPost.excerptPt}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'es'
              ? '¿Necesitas Ayuda Profesional?'
              : 'Precisa de Ajuda Profissional?'}
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            {language === 'es'
              ? 'Si identificas que necesitas apoyo profesional, no dudes en contactarme.'
              : 'Se você identificar que precisa de apoio profissional, não hesite em me contactar.'}
          </p>
          <Button
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
            onClick={() => {
              window.location.href = '/#contacto';
            }}
          >
            {language === 'es' ? 'Agendar Cita' : 'Agendar Consulta'}
          </Button>
        </div>
      </section>
    </div>
  );
}
