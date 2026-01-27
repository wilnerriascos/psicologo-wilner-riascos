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
    'nav.contacto': 'Contacto',

    // Hero
    'hero.title': 'Wilner Riascos Sánchez',
    'hero.subtitle': 'Psicólogo Profesional',
    'hero.description': 'Acompañamiento profesional en tu camino hacia el bienestar emocional y personal',
    'hero.cta': 'Agendar Cita',

    // Sobre Mí
    'about.title': 'Sobre Mí',
    'about.intro': 'Soy un psicólogo dedicado a proporcionar atención profesional y compasiva a mis pacientes.',
    'about.experience': 'Con años de experiencia en psicología clínica, he trabajado con diversos grupos poblacionales y problemas de salud mental.',

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
  },
  pt: {
    // Navegação
    'nav.inicio': 'Início',
    'nav.sobre': 'Sobre Mim',
    'nav.servicios': 'Serviços',
    'nav.videos': 'Vídeos',
    'nav.audios': 'Áudios',
    'nav.publicaciones': 'Publicações',
    'nav.contacto': 'Contato',

    // Hero
    'hero.title': 'Wilner Riascos Sánchez',
    'hero.subtitle': 'Psicólogo Profissional',
    'hero.description': 'Acompanhamento profissional em seu caminho para o bem-estar emocional e pessoal',
    'hero.cta': 'Agendar Consulta',

    // Sobre Mim
    'about.title': 'Sobre Mim',
    'about.intro': 'Sou um psicólogo dedicado a fornecer atendimento profissional e compassivo aos meus pacientes.',
    'about.experience': 'Com anos de experiência em psicologia clínica, trabalhei com diversos grupos populacionais e problemas de saúde mental.',

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
