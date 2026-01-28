import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traducciones
const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navegación
    'nav.inicio': 'Inicio',
    'nav.sobre': 'Sobre Mí',
    'nav.servicios': 'Servicios',
    'nav.videos': 'Videos',
    'nav.audios': 'Audios',
    'nav.publicaciones': 'Publicaciones',
    'nav.blog': 'Blog',
    'nav.contacto': 'Contacto',

    // Hero
    'hero.title': 'Wilner Riascos Sánchez',
    'hero.subtitle': 'Psicólogo',
    'hero.description': 'Ayudando a las personas a ser la mejor versión de sí mismas',
    'hero.cta': 'Agendar Cita',
    'hero.online_service': 'Atendimiento 100% Online',
    'hero.worldwide': 'Disponible Mundialmente',

    // Sobre Mí
    'about.title': 'Sobre Mí',
    'about.intro': 'Acompaño a personas que atraviesan preguntas importantes sobre su vida personal, su trabajo y sus decisiones. Mi trabajo como psicólogo se apoya en una formación sólida en salud mental, orientación profesional y de carrera, y psicología del trabajo, siempre desde una mirada comprensiva y situada en la realidad de cada persona.',
    'about.education': 'Soy psicólogo, con formación de pregrado y maestría en Psicología por la Universidad del Valle (Cali, Colombia), y doctorado en Psicología por la Universidad de São Paulo (Brasil), donde también realicé formación en orientación profesional y de carrera. Además, soy profesor e investigador de la Universidad de San Buenaventura, en Cali, Colombia.',
    'about.migration': 'Actualmente vivo en São Paulo. La experiencia de migrar me ha permitido comprender de manera cercana los procesos de adaptación, los cambios identitarios y los desafíos emocionales que implica vivir en otro país. Conozco también lo que significa trabajar de forma remota y equilibrar las exigencias laborales con la vida personal y familiar.',
    'about.personal': 'Soy esposo y padre de familia. Me gusta el fútbol, el cine y diversos ritmos musicales. Creo en una psicología que se ejerce con rigor, pero también con cercanía, y que reconoce a las personas en toda su complejidad, dentro y fuera del espacio terapéutico.',

    // Servicios
    'services.title': 'Servicios',
    'services.therapy': 'Terapia Individual',
    'services.therapy_desc': 'Sesiones personalizadas para abordar tus necesidades específicas',
    'services.couples': 'Terapia de Pareja',
    'services.couples_desc': 'Mejora la comunicación y fortalece tu relación',
    'services.family': 'Terapia Familiar',
    'services.family_desc': 'Trabajo con dinámicas familiares y resolución de conflictos',
    'services.consultation': 'Consultoría',
    'services.consultation_desc': 'Asesoramiento profesional en temas de salud mental',

    // Videos
    'videos.title': 'Videos',
    'videos.description': 'Accede a contenido educativo y recursos en video',

    // Audios
    'audios.title': 'Audios',
    'audios.description': 'Escucha meditaciones guiadas y contenido de audio',

    // Publicaciones
    'publications.title': 'Publicaciones Académicas',
    'publications.description': 'Consulta mis investigaciones y publicaciones profesionales',

    // Contacto
    'contact.title': 'Agendar Cita',
    'contact.description': 'Selecciona una fecha y hora disponible para tu cita',
    'contact.name': 'Nombre Completo',
    'contact.email': 'Correo Electrónico',
    'contact.phone': 'Teléfono',
    'contact.message': 'Mensaje (opcional)',
    'contact.date': 'Fecha',
    'contact.time': 'Hora',
    'contact.submit': 'Agendar Cita',
    'contact.success': 'Tu cita ha sido agendada exitosamente',
    'contact.error': 'Error al agendar la cita. Por favor intenta de nuevo',

    // Footer
    'footer.rights': 'Todos los derechos reservados',
    'footer.contact': 'Contacto',
    'footer.address': 'Dirección',
    'footer.phone': 'Teléfono',
    'footer.email': 'Correo',

    // Blog
    'blog.title': 'Blog de Bienestar',
    'blog.search': 'Buscar articulos...',
    'blog.categories': 'Categorias',
    'blog.all': 'Todos',
    'blog.back': 'Volver al Blog',
    'blog.relatedArticles': 'Articulos Relacionados',
  },
  pt: {
    // Navegação
    'nav.inicio': 'Início',
    'nav.sobre': 'Sobre Mim',
    'nav.servicios': 'Serviços',
    'nav.videos': 'Vídeos',
    'nav.audios': 'Áudios',
    'nav.publicaciones': 'Publicações',
    'nav.blog': 'Blog',
    'nav.contacto': 'Contato',

    // Hero
    'hero.title': 'Wilner Riascos Sánchez',
    'hero.subtitle': 'Psicólogo',
    'hero.description': 'Ajudando as pessoas a serem a melhor versão de si mesmas',
    'hero.cta': 'Agendar Consulta',
    'hero.online_service': 'Atendimento 100% Online',
    'hero.worldwide': 'Disponível Mundialmente',

    // Sobre Mim
    'about.title': 'Sobre Mim',
    'about.intro': 'Acompanho pessoas que atravessam perguntas importantes sobre sua vida pessoal, seu trabalho e suas decisões. Meu trabalho como psicólogo se apoia em uma formação sólida em saúde mental, orientação profissional e de carreira, e psicologia do trabalho, sempre a partir de um olhar compreensivo e situado na realidade de cada pessoa.',
    'about.education': 'Sou psicólogo, com formação de graduação e mestrado em Psicologia pela Universidade do Vale (Cali, Colômbia), e doutorado em Psicologia pela Universidade de São Paulo (Brasil), onde também realizei formação em orientação profissional e de carreira. Além disso, sou professor e pesquisador da Universidade de San Buenaventura, em Cali, Colômbia.',
    'about.migration': 'Atualmente vivo em São Paulo. A experiência de migrar me permitiu compreender de forma próxima os processos de adaptação, as mudanças identitárias e os desafios emocionais que implica viver em outro país. Conheço também o que significa trabalhar remotamente e equilibrar as exigências laborais com a vida pessoal e familiar.',
    'about.personal': 'Sou marido e pai de família. Gosto de futebol, cinema e diversos ritmos musicais. Acredito em uma psicologia que se exerce com rigor, mas também com proximidade, e que reconhece as pessoas em toda sua complexidade, dentro e fora do espaço terapêutico.',

    // Serviços
    'services.title': 'Serviços',
    'services.therapy': 'Terapia Individual',
    'services.therapy_desc': 'Sessões personalizadas para abordar suas necessidades específicas',
    'services.couples': 'Terapia de Casal',
    'services.couples_desc': 'Melhore a comunicação e fortaleça seu relacionamento',
    'services.family': 'Terapia Familiar',
    'services.family_desc': 'Trabalho com dinâmicas familiares e resolução de conflitos',
    'services.consultation': 'Consultoria',
    'services.consultation_desc': 'Aconselhamento profissional em questões de saúde mental',

    // Vídeos
    'videos.title': 'Vídeos',
    'videos.description': 'Acesse conteúdo educativo e recursos em vídeo',

    // Áudios
    'audios.title': 'Áudios',
    'audios.description': 'Ouça meditações guiadas e conteúdo de áudio',

    // Publicações
    'publications.title': 'Publicações Acadêmicas',
    'publications.description': 'Consulte minhas pesquisas e publicações profissionais',

    // Contato
    'contact.title': 'Agendar Consulta',
    'contact.description': 'Selecione uma data e hora disponível para sua consulta',
    'contact.name': 'Nome Completo',
    'contact.email': 'Email',
    'contact.phone': 'Telefone',
    'contact.message': 'Mensagem (opcional)',
    'contact.date': 'Data',
    'contact.time': 'Hora',
    'contact.submit': 'Agendar Consulta',
    'contact.success': 'Sua consulta foi agendada com sucesso',
    'contact.error': 'Erro ao agendar a consulta. Por favor, tente novamente',

    // Rodapé
    'footer.rights': 'Todos os direitos reservados',
    'footer.contact': 'Contato',
    'footer.address': 'Endereço',
    'footer.phone': 'Telefone',
    'footer.email': 'Email',

    // Blog
    'blog.title': 'Blog de Bem-estar',
    'blog.search': 'Procurar artigos...',
    'blog.categories': 'Categorias',
    'blog.all': 'Todos',
    'blog.back': 'Voltar ao Blog',
    'blog.relatedArticles': 'Artigos Relacionados',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
