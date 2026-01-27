import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

/**
 * Diseño: Minimalismo Cálido
 * Sección de Servicios: 5 áreas específicas de acompañamiento profesional
 */
export default function Services() {
  const { language } = useLanguage();

  const servicesData = [
    {
      icon: '🎯',
      titleEs: 'Orientación profesional y de carrera',
      titlePt: 'Orientação profissional e de carreira',
      descEs: 'Acompañamiento en procesos de elección, cambio o redefinición de carrera, integrando intereses, valores personales, trayectorias previas y condiciones reales del contexto laboral.',
      descPt: 'Acompanhamento em processos de escolha, mudança ou redefinição de carreira, integrando interesses, valores pessoais, trajetórias anteriores e condições reais do contexto laboral.',
    },
    {
      icon: '🧠',
      titleEs: 'Salud mental y bienestar psicológico',
      titlePt: 'Saúde mental e bem-estar psicológico',
      descEs: 'Espacio de acompañamiento psicológico orientado a la comprensión y abordaje del malestar emocional, el estrés y las dificultades adaptativas, desde una mirada clínica, preventiva y contextual.',
      descPt: 'Espaço de acompanhamento psicológico orientado à compreensão e abordagem do mal-estar emocional, estresse e dificuldades adaptativas, a partir de uma perspectiva clínica, preventiva e contextual.',
    },
    {
      icon: '💼',
      titleEs: 'Salud mental en el trabajo',
      titlePt: 'Saúde mental no trabalho',
      descEs: 'Intervención psicológica centrada en el análisis del impacto del trabajo en la salud mental, incluyendo estrés laboral, desgaste emocional y riesgos psicosociales.',
      descPt: 'Intervenção psicológica focada na análise do impacto do trabalho na saúde mental, incluindo estresse ocupacional, esgotamento emocional e riscos psicossociais.',
    },
    {
      icon: '👨‍👩‍👧‍👦',
      titleEs: 'Parentalidad',
      titlePt: 'Parentalidade',
      descEs: 'Acompañamiento a madres, padres y cuidadores en los desafíos emocionales, vinculares y subjetivos que atraviesan los procesos de crianza.',
      descPt: 'Acompanhamento a mães, pais e cuidadores nos desafios emocionais, vinculares e subjetivos que atravessam os processos de criação.',
    },
    {
      icon: '🌍',
      titleEs: 'Migración y procesos de adaptación',
      titlePt: 'Migração e processos de adaptação',
      descEs: 'Apoyo psicológico para personas migrantes, abordando procesos de adaptación cultural, construcción de identidad, vínculos y bienestar emocional en contextos de cambio.',
      descPt: 'Apoio psicológico para pessoas migrantes, abordando processos de adaptação cultural, construção de identidade, vínculos e bem-estar emocional em contextos de mudança.',
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-muted">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {language === 'es' ? 'Servicios' : 'Serviços'}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Services List */}
        <div className="space-y-6 mb-16">
          {servicesData.map((service, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-l-primary overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="flex gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 text-5xl">{service.icon}</div>

                  {/* Content */}
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-primary mb-3">
                      {language === 'es' ? service.titleEs : service.titlePt}
                    </CardTitle>
                    <p className="text-foreground/80 text-lg leading-relaxed">
                      {language === 'es' ? service.descEs : service.descPt}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Professional Approach */}
        <div className="p-8 bg-white rounded-lg shadow-sm border-l-4 border-l-primary">
          <h3 className="text-2xl font-bold text-primary mb-6">
            {language === 'es' ? 'Mi Compromiso Profesional' : 'Meu Compromisso Profissional'}
          </h3>

          <div className="space-y-6">
            {/* Commitment */}
            <div>
              <p className="text-foreground/80 text-lg leading-relaxed">
                {language === 'es'
                  ? 'Mi ejercicio profesional se orienta por un compromiso claro: comprender en profundidad la experiencia humana y acompañar a las personas con criterios psicológicos sólidos, actualizados y éticamente responsables.'
                  : 'Meu exercício profissional é orientado por um compromisso claro: compreender profundamente a experiência humana e acompanhar as pessoas com critérios psicológicos sólidos, atualizados e eticamente responsáveis.'}
              </p>
            </div>

            {/* Approach */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">
                {language === 'es' ? 'Mi Forma de Trabajar' : 'Minha Forma de Trabalhar'}
              </h4>
              <p className="text-foreground/80 text-lg leading-relaxed">
                {language === 'es'
                  ? 'Integro una escucha cuidadosa, claridad conceptual y herramientas psicológicas con respaldo en el conocimiento científico contemporáneo. El objetivo no es ofrecer soluciones rápidas, sino favorecer comprensión, fortalecer recursos personales y acompañar procesos de cambio de manera consciente y sostenible.'
                  : 'Integro uma escuta cuidadosa, clareza conceitual e ferramentas psicológicas com respaldo no conhecimento científico contemporâneo. O objetivo não é oferecer soluções rápidas, mas favorecer compreensão, fortalecer recursos pessoais e acompanhar processos de mudança de forma consciente e sustentável.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
