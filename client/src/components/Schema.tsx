import { useEffect } from 'react';

export default function Schema() {
  useEffect(() => {
    // LocalBusiness Schema
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://psicologo-wilner-riascos.manus.space',
      name: 'Wilner Riascos Sánchez - Psicólogo',
      description: 'Psicólogo profesional que ofrece acompañamiento en salud mental, orientación de carrera, parentalidad y migración. Atención 100% online disponible mundialmente.',
      url: 'https://psicologo-wilner-riascos.manus.space',
      telephone: '+5511966047554',
      email: 'wilner.riascos@gmail.com',
      image: 'https://psicologo-wilner-riascos.manus.space/images/hero-background.jpg',
      priceRange: '$$',
      areaServed: {
        '@type': 'GeoShape',
        description: 'Worldwide'
      },
      sameAs: [
        'https://www.linkedin.com/in/wilnerriascos',
        'https://www.youtube.com/@wilnerriascos',
        'https://scholar.google.com/citations?user=YaY98QQAAAAJ'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        telephone: '+5511966047554',
        email: 'wilner.riascos@gmail.com',
        areaServed: 'Worldwide',
        availableLanguage: ['es', 'pt']
      }
    };

    // ProfessionalService Schema
    const professionalServiceSchema = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': 'https://psicologo-wilner-riascos.manus.space',
      name: 'Wilner Riascos Sánchez - Psicólogo',
      description: 'Servicios de psicología profesional: terapia individual, salud mental, orientación de carrera, parentalidad y acompañamiento en migración.',
      url: 'https://psicologo-wilner-riascos.manus.space',
      telephone: '+5511966047554',
      email: 'wilner.riascos@gmail.com',
      image: 'https://psicologo-wilner-riascos.manus.space/images/hero-background.jpg',
      priceRange: '$$',
      areaServed: {
        '@type': 'GeoShape',
        description: 'Worldwide'
      },
      serviceType: [
        'Terapia Psicológica',
        'Orientación Profesional',
        'Salud Mental',
        'Acompañamiento en Migración',
        'Terapia Familiar',
        'Consultoría Psicológica'
      ],
      knowsAbout: [
        'Psicología Clínica',
        'Psicología del Trabajo',
        'Psicología Organizacional',
        'Salud Mental',
        'Bienestar Emocional',
        'Adaptación Cultural'
      ],
      sameAs: [
        'https://www.linkedin.com/in/wilnerriascos',
        'https://www.youtube.com/@wilnerriascos',
        'https://scholar.google.com/citations?user=YaY98QQAAAAJ'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        telephone: '+5511966047554',
        email: 'wilner.riascos@gmail.com',
        areaServed: 'Worldwide',
        availableLanguage: ['es', 'pt']
      }
    };

    // Person Schema (Author)
    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Wilner Riascos Sánchez',
      jobTitle: 'Psicólogo',
      url: 'https://psicologo-wilner-riascos.manus.space',
      email: 'wilner.riascos@gmail.com',
      telephone: '+5511966047554',
      image: 'https://psicologo-wilner-riascos.manus.space/images/hero-background.jpg',
      sameAs: [
        'https://www.linkedin.com/in/wilnerriascos',
        'https://www.youtube.com/@wilnerriascos',
        'https://scholar.google.com/citations?user=YaY98QQAAAAJ',
        'https://www.researchgate.net/profile/Wilner-Riascos-2'
      ],
      knowsAbout: [
        'Psicología Clínica',
        'Psicología del Trabajo',
        'Salud Mental',
        'Bienestar Emocional'
      ]
    };

    // Organization Schema
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Wilner Riascos Sánchez - Psicólogo',
      url: 'https://psicologo-wilner-riascos.manus.space',
      logo: 'https://psicologo-wilner-riascos.manus.space/images/hero-background.jpg',
      description: 'Servicios de psicología profesional online',
      sameAs: [
        'https://www.linkedin.com/in/wilnerriascos',
        'https://www.youtube.com/@wilnerriascos'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        telephone: '+5511966047554',
        email: 'wilner.riascos@gmail.com'
      }
    };

    // Add LocalBusiness Schema
    const localBusinessScript = document.createElement('script');
    localBusinessScript.type = 'application/ld+json';
    localBusinessScript.textContent = JSON.stringify(localBusinessSchema);
    document.head.appendChild(localBusinessScript);

    // Add ProfessionalService Schema
    const professionalServiceScript = document.createElement('script');
    professionalServiceScript.type = 'application/ld+json';
    professionalServiceScript.textContent = JSON.stringify(professionalServiceSchema);
    document.head.appendChild(professionalServiceScript);

    // Add Person Schema
    const personScript = document.createElement('script');
    personScript.type = 'application/ld+json';
    personScript.textContent = JSON.stringify(personSchema);
    document.head.appendChild(personScript);

    // Add Organization Schema
    const organizationScript = document.createElement('script');
    organizationScript.type = 'application/ld+json';
    organizationScript.textContent = JSON.stringify(organizationSchema);
    document.head.appendChild(organizationScript);

    return () => {
      // Cleanup scripts on unmount
      document.head.removeChild(localBusinessScript);
      document.head.removeChild(professionalServiceScript);
      document.head.removeChild(personScript);
      document.head.removeChild(organizationScript);
    };
  }, []);

  return null;
}
