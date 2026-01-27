/**
 * Publicaciones Académicas de Wilner Riascos
 * Datos extraídos de ResearchGate y Google Académico
 */

export interface Publication {
  id: string;
  title: string;
  titlePt: string;
  journal: string;
  year: number;
  citations: number;
  researchGateUrl: string;
  googleScholarUrl: string;
  description: string;
  descriptionPt: string;
}

export const publications: Publication[] = [
  {
    id: "pub-1",
    title: "Sentidos del trabajo a partir de trayectorias y recursos personales para afrontar el mundo del trabajo",
    titlePt: "Sentidos do trabalho a partir de trajetórias e recursos pessoais para enfrentar o mundo do trabalho",
    journal: "Perspectivas en Psicología",
    year: 2007,
    citations: 39,
    researchGateUrl: "https://www.researchgate.net/profile/Wilner-Riascos-2",
    googleScholarUrl: "https://scholar.google.com/citations?user=YaY98QQAAAAJ&hl=es",
    description: "Investigación sobre los sentidos y significados del trabajo construidos a partir de la trayectoria laboral y los recursos personales para afrontar el mundo del trabajo.",
    descriptionPt: "Investigação sobre os sentidos e significados do trabalho construídos a partir da trajetória laboral e dos recursos pessoais para enfrentar o mundo do trabalho.",
  },
  {
    id: "pub-2",
    title: "Psicología de las organizaciones y del trabajo: apuestas de investigación",
    titlePt: "Psicologia das organizações e do trabalho: apostas de pesquisa",
    journal: "La Identidad de la Evaluación del Trabajo y las Clínicas del Trabajo",
    year: 2014,
    citations: 31,
    researchGateUrl: "https://www.researchgate.net/profile/Wilner-Riascos-2",
    googleScholarUrl: "https://scholar.google.com/citations?user=YaY98QQAAAAJ&hl=es",
    description: "Análisis de las apuestas y perspectivas de investigación en psicología de las organizaciones y del trabajo.",
    descriptionPt: "Análise das apostas e perspectivas de pesquisa em psicologia das organizações e do trabalho.",
  },
  {
    id: "pub-3",
    title: "Gramáticas actuales de la relación hombre-trabajo. Propuestas de lectura",
    titlePt: "Gramáticas atuais da relação homem-trabalho. Propostas de leitura",
    journal: "Editorial Bonaventuriana",
    year: 2012,
    citations: 12,
    researchGateUrl: "https://www.researchgate.net/profile/Wilner-Riascos-2",
    googleScholarUrl: "https://scholar.google.com/citations?user=YaY98QQAAAAJ&hl=es",
    description: "Libro que presenta propuestas de lectura sobre las gramáticas actuales de la relación entre el ser humano y el trabajo.",
    descriptionPt: "Livro que apresenta propostas de leitura sobre as gramáticas atuais da relação entre o ser humano e o trabalho.",
  },
  {
    id: "pub-4",
    title: "Contribuciones a la conceptualización de la cultura organizacional",
    titlePt: "Contribuições para a conceituação da cultura organizacional",
    journal: "Psicología de las organizaciones y el trabajo: Apuestas de investigación",
    year: 2014,
    citations: 6,
    researchGateUrl: "https://www.researchgate.net/profile/Wilner-Riascos-2",
    googleScholarUrl: "https://scholar.google.com/citations?user=YaY98QQAAAAJ&hl=es",
    description: "Artículo que presenta contribuciones teóricas a la conceptualización de la cultura organizacional.",
    descriptionPt: "Artigo que apresenta contribuições teóricas para a conceituação da cultura organizacional.",
  },
  {
    id: "pub-5",
    title: "Construcción del sujeto trabajador: el caso de cinco docentes universitarios",
    titlePt: "Construção do sujeito trabalhador: o caso de cinco docentes universitários",
    journal: "ECOS - Estudos Contemporâneos da Subjetividade",
    year: 2013,
    citations: 6,
    researchGateUrl: "https://www.researchgate.net/profile/Wilner-Riascos-2",
    googleScholarUrl: "https://scholar.google.com/citations?user=YaY98QQAAAAJ&hl=es",
    description: "Estudio descriptivo de la construcción del sujeto trabajador a través del análisis de cinco docentes universitarios.",
    descriptionPt: "Estudo descritivo da construção do sujeito trabalhador através da análise de cinco docentes universitários.",
  },
  {
    id: "pub-6",
    title: "Trabajo: inclusión y exclusión. Aproximación a los discursos y posicionamientos de representantes de sectores sociales",
    titlePt: "Trabalho: inclusão e exclusão. Aproximação aos discursos e posicionamentos de representantes de setores sociais",
    journal: "Universidad del Valle",
    year: 2012,
    citations: 4,
    researchGateUrl: "https://www.researchgate.net/profile/Wilner-Riascos-2",
    googleScholarUrl: "https://scholar.google.com/citations?user=YaY98QQAAAAJ&hl=es",
    description: "Investigación sobre los discursos y posicionamientos de representantes de diferentes sectores sociales frente al trabajo y la dinámica inclusión-exclusión.",
    descriptionPt: "Investigação sobre os discursos e posicionamentos de representantes de diferentes setores sociais frente ao trabalho e a dinâmica inclusão-exclusão.",
  },
  {
    id: "pub-7",
    title: "Significados e sentidos de trabalho e carreira de trabalhadores de seis países das Américas",
    titlePt: "Significados e sentidos de trabalho e carreira de trabalhadores de seis países das Américas",
    journal: "Universidade de São Paulo",
    year: 2017,
    citations: 2,
    researchGateUrl: "https://www.researchgate.net/profile/Wilner-Riascos-2",
    googleScholarUrl: "https://scholar.google.com/citations?user=YaY98QQAAAAJ&hl=es",
    description: "Tesis doctoral que examina los significados y sentidos del trabajo y la carrera de trabajadores en seis países de las Américas.",
    descriptionPt: "Tese de doutorado que examina os significados e sentidos do trabalho e da carreira de trabalhadores em seis países das Américas.",
  },
];
