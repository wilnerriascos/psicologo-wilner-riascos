import { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts, categories } from '@/data/blogPosts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Calendar, Clock } from 'lucide-react';
import { useRoute } from 'wouter';

/**
 * Diseño: Minimalismo Cálido
 * Página de Blog: Listado de artículos con búsqueda y filtrado por categoría
 */
export default function Blog() {
  const { language, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filtrar artículos basado en búsqueda y categoría
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const title = language === 'es' ? post.titleEs : post.titlePt;
      const excerpt = language === 'es' ? post.excerptEs : post.excerptPt;
      const matchesSearch =
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, language]);

  const getCategoryLabel = (categoryId: string) => {
    const category = categories.find((c) => c.id === categoryId);
    return language === 'es' ? category?.labelEs : category?.labelPt;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {language === 'es' ? 'Blog de Bienestar' : 'Blog de Bem-estar'}
            </h1>
            <p className="text-lg text-primary-foreground/90">
              {language === 'es'
                ? 'Artículos sobre salud mental, bienestar emocional y crecimiento personal'
                : 'Artigos sobre saúde mental, bem-estar emocional e crescimento pessoal'}
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white py-12 border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-3 text-primary" size={20} />
              <Input
                type="text"
                placeholder={language === 'es' ? 'Buscar artículos...' : 'Procurar artigos...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 bg-muted border-border text-foreground"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <p className="text-sm font-medium text-foreground mb-4">
              {language === 'es' ? 'Categorías' : 'Categorias'}
            </p>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === null ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(null)}
                className={
                  selectedCategory === null
                    ? 'bg-primary text-primary-foreground'
                    : 'border-primary text-primary hover:bg-primary/10'
                }
              >
                {language === 'es' ? 'Todos' : 'Todos'}
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={
                    selectedCategory === category.id
                      ? 'bg-primary text-primary-foreground'
                      : 'border-primary text-primary hover:bg-primary/10'
                  }
                >
                  {language === 'es' ? category.labelEs : category.labelPt}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col cursor-pointer group"
                  onClick={() => {
                    window.location.href = `/blog/${post.id}`;
                  }}
                >
                  {/* Image */}
                  <div className="aspect-video bg-primary/10 overflow-hidden group-hover:bg-primary/20 transition-colors">
                    <div className="w-full h-full flex items-center justify-center text-4xl">
                      {post.category === 'anxiety' && '😌'}
                      {post.category === 'depression' && '🌱'}
                      {post.category === 'relationships' && '💑'}
                      {post.category === 'stress' && '🧘'}
                      {post.category === 'self-esteem' && '💪'}
                      {post.category === 'sleep' && '😴'}
                    </div>
                  </div>

                  {/* Content */}
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full whitespace-nowrap">
                        {getCategoryLabel(post.category)}
                      </span>
                      <span className="text-xs text-foreground/60 whitespace-nowrap">
                        {new Date(post.date).toLocaleDateString(language === 'es' ? 'es-ES' : 'pt-BR', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    <CardTitle className="text-lg text-primary line-clamp-2">
                      {language === 'es' ? post.titleEs : post.titlePt}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <CardDescription className="text-foreground/70 mb-4 line-clamp-2">
                      {language === 'es' ? post.excerptEs : post.excerptPt}
                    </CardDescription>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-foreground/60 mt-auto pt-4 border-t border-border">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime} min</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.author}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-foreground/60 text-lg">
                {language === 'es'
                  ? 'No se encontraron artículos que coincidan con tu búsqueda.'
                  : 'Nenhum artigo encontrado que corresponda à sua pesquisa.'}
              </p>
            </div>
          )}

          {/* Results Count */}
          <div className="mt-8 text-center text-foreground/60 text-sm">
            {language === 'es'
              ? `Mostrando ${filteredPosts.length} de ${blogPosts.length} artículos`
              : `Mostrando ${filteredPosts.length} de ${blogPosts.length} artigos`}
          </div>
        </div>
      </section>
    </div>
  );
}
