export interface BlogPost {
  id: string;
  titleEs: string;
  titlePt: string;
  excerptEs: string;
  excerptPt: string;
  contentEs: string;
  contentPt: string;
  categoryEs: string;
  categoryPt: string;
  category: 'anxiety' | 'depression' | 'relationships' | 'stress' | 'self-esteem' | 'sleep';
  author: string;
  date: string;
  readTime: number;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    titleEs: 'Técnicas de Respiración para Controlar la Ansiedad',
    titlePt: 'Técnicas de Respiração para Controlar a Ansiedade',
    excerptEs:
      'Descubre cómo técnicas simples de respiración pueden ayudarte a manejar la ansiedad en momentos de estrés.',
    excerptPt:
      'Descubra como técnicas simples de respiração podem ajudá-lo a lidar com a ansiedade em momentos de estresse.',
    contentEs: `La ansiedad es una respuesta natural del cuerpo ante situaciones de estrés. Sin embargo, cuando se vuelve excesiva, puede afectar significativamente nuestra calidad de vida.

Una de las técnicas más efectivas y accesibles para controlar la ansiedad es la respiración consciente. La forma en que respiramos tiene un impacto directo en nuestro sistema nervioso.

**Técnica de Respiración 4-7-8:**

1. Inhala por la nariz contando hasta 4
2. Mantén la respiración contando hasta 7
3. Exhala lentamente por la boca contando hasta 8

Esta técnica ayuda a activar el sistema nervioso parasimpático, que es responsable de la relajación.

**Beneficios de la Respiración Consciente:**

- Reduce la frecuencia cardíaca
- Disminuye la presión arterial
- Calma la mente
- Mejora la concentración
- Reduce los síntomas de pánico

Practica estas técnicas diariamente, incluso cuando no sientas ansiedad, para que tu cuerpo las asimile mejor. Con la práctica regular, podrás utilizarlas como herramienta efectiva en momentos de crisis.`,
    contentPt: `A ansiedade é uma resposta natural do corpo ante situações de estresse. No entanto, quando se torna excessiva, pode afetar significativamente nossa qualidade de vida.

Uma das técnicas mais eficazes e acessíveis para controlar a ansiedade é a respiração consciente. A forma como respiramos tem um impacto direto em nosso sistema nervoso.

**Técnica de Respiração 4-7-8:**

1. Inspire pelo nariz contando até 4
2. Mantenha a respiração contando até 7
3. Expire lentamente pela boca contando até 8

Esta técnica ajuda a ativar o sistema nervoso parassimpático, que é responsável pelo relaxamento.

**Benefícios da Respiração Consciente:**

- Reduz a frequência cardíaca
- Diminui a pressão arterial
- Acalma a mente
- Melhora a concentração
- Reduz os sintomas de pânico

Pratique estas técnicas diariamente, mesmo quando não sentir ansiedade, para que seu corpo as assimile melhor. Com a prática regular, você poderá utilizá-las como ferramenta eficaz em momentos de crise.`,
    categoryEs: 'Ansiedad',
    categoryPt: 'Ansiedade',
    category: 'anxiety',
    author: 'Wilner Riascos Sánchez',
    date: '2026-01-20',
    readTime: 5,
    image: '/images/blog-anxiety.jpg',
  },
  {
    id: '2',
    titleEs: 'Cómo Mejorar tu Autoestima: Pasos Prácticos',
    titlePt: 'Como Melhorar sua Autoestima: Passos Práticos',
    excerptEs:
      'La autoestima es fundamental para nuestro bienestar. Aprende estrategias prácticas para fortalecer tu confianza en ti mismo.',
    excerptPt:
      'A autoestima é fundamental para nosso bem-estar. Aprenda estratégias práticas para fortalecer sua confiança em si mesmo.',
    contentEs: `La autoestima es la valoración que hacemos de nosotros mismos. Una autoestima saludable es esencial para alcanzar nuestros objetivos y mantener relaciones satisfactorias.

**Pasos para Mejorar tu Autoestima:**

**1. Identifica tus Fortalezas**
Haz una lista de tus habilidades, logros y cualidades positivas. Revísala regularmente para recordarte tu valor.

**2. Práctica de Afirmaciones Positivas**
Utiliza afirmaciones como "Soy capaz", "Merezco lo mejor" o "Estoy en constante crecimiento". Repítelas diariamente.

**3. Establece Límites Saludables**
Aprende a decir "no" cuando sea necesario. Proteger tu energía es un acto de amor propio.

**4. Cuida tu Cuerpo**
El ejercicio regular, una buena alimentación y suficiente descanso mejoran significativamente cómo nos sentimos con nosotros mismos.

**5. Rodéate de Personas Positivas**
Las relaciones que mantenemos influyen en nuestra autoestima. Busca personas que te apoyen y valoren.

**6. Celebra tus Logros**
No importa cuán pequeños sean. Cada paso hacia adelante merece reconocimiento.

Recuerda que mejorar la autoestima es un proceso gradual. Sé paciente y compasivo contigo mismo en este camino.`,
    contentPt: `A autoestima é a avaliação que fazemos de nós mesmos. Uma autoestima saudável é essencial para alcançar nossos objetivos e manter relacionamentos satisfatórios.

**Passos para Melhorar sua Autoestima:**

**1. Identifique suas Fortalezas**
Faça uma lista de suas habilidades, realizações e qualidades positivas. Revise-a regularmente para se lembrar de seu valor.

**2. Prática de Afirmações Positivas**
Use afirmações como "Sou capaz", "Mereço o melhor" ou "Estou em constante crescimento". Repita-as diariamente.

**3. Estabeleça Limites Saudáveis**
Aprenda a dizer "não" quando necessário. Proteger sua energia é um ato de amor próprio.

**4. Cuide do seu Corpo**
O exercício regular, uma boa alimentação e sono suficiente melhoram significativamente como nos sentimos conosco mesmos.

**5. Cerque-se de Pessoas Positivas**
Os relacionamentos que mantemos influenciam nossa autoestima. Procure pessoas que o apoiem e valorizem.

**6. Celebre suas Realizações**
Não importa quão pequenas sejam. Cada passo para frente merece reconhecimento.

Lembre-se de que melhorar a autoestima é um processo gradual. Seja paciente e compassivo consigo mesmo nesta jornada.`,
    categoryEs: 'Autoestima',
    categoryPt: 'Autoestima',
    category: 'self-esteem',
    author: 'Wilner Riascos Sánchez',
    date: '2026-01-18',
    readTime: 6,
    image: '/images/blog-self-esteem.jpg',
  },
  {
    id: '3',
    titleEs: 'Manejo del Estrés: Estrategias para una Vida Equilibrada',
    titlePt: 'Gestão do Estresse: Estratégias para uma Vida Equilibrada',
    excerptEs:
      'El estrés es parte de la vida, pero aprender a manejarlo es clave para mantener nuestro bienestar mental y físico.',
    excerptPt:
      'O estresse faz parte da vida, mas aprender a gerenciá-lo é fundamental para manter nosso bem-estar mental e físico.',
    contentEs: `El estrés es una respuesta adaptativa de nuestro cuerpo ante desafíos. Sin embargo, cuando el estrés es crónico, puede afectar nuestra salud física y mental.

**Estrategias Efectivas para Manejar el Estrés:**

**1. Identificar las Fuentes de Estrés**
El primer paso es reconocer qué situaciones te generan estrés. Esto te permite desarrollar estrategias específicas.

**2. Técnicas de Relajación**
- Meditación: 10-15 minutos diarios
- Yoga: Combina movimiento y respiración
- Masajes: Relaja la tensión muscular

**3. Actividad Física Regular**
El ejercicio es uno de los mejores antídotos contra el estrés. Libera endorfinas y mejora el estado de ánimo.

**4. Establecer Rutinas**
Las rutinas crean estabilidad y reducen la incertidumbre, ambas fuentes de estrés.

**5. Tiempo para ti**
Dedica tiempo a actividades que disfrutes: leer, caminar, hobbies, etc.

**6. Apoyo Social**
Hablar con amigos, familia o un terapeuta puede ayudarte a procesar el estrés.

**7. Límites Laborales**
Aprende a desconectarte del trabajo. Tu bienestar es más importante que cualquier tarea.

Recuerda que el manejo del estrés es un proceso continuo. Lo importante es encontrar las estrategias que funcionen mejor para ti.`,
    contentPt: `O estresse é uma resposta adaptativa de nosso corpo ante desafios. No entanto, quando o estresse é crônico, pode afetar nossa saúde física e mental.

**Estratégias Eficazes para Gerenciar o Estresse:**

**1. Identificar as Fontes de Estresse**
O primeiro passo é reconhecer quais situações geram estresse. Isso permite desenvolver estratégias específicas.

**2. Técnicas de Relaxamento**
- Meditação: 10-15 minutos diários
- Yoga: Combina movimento e respiração
- Massagens: Relaxa a tensão muscular

**3. Atividade Física Regular**
O exercício é um dos melhores antídotos contra o estresse. Libera endorfinas e melhora o humor.

**4. Estabelecer Rotinas**
As rotinas criam estabilidade e reduzem a incerteza, ambas fontes de estresse.

**5. Tempo para si**
Dedique tempo a atividades que desfrute: ler, caminhar, hobbies, etc.

**6. Apoio Social**
Conversar com amigos, família ou um terapeuta pode ajudá-lo a processar o estresse.

**7. Limites Laborais**
Aprenda a se desconectar do trabalho. Seu bem-estar é mais importante do que qualquer tarefa.

Lembre-se de que a gestão do estresse é um processo contínuo. O importante é encontrar as estratégias que funcionam melhor para você.`,
    categoryEs: 'Estrés',
    categoryPt: 'Estresse',
    category: 'stress',
    author: 'Wilner Riascos Sánchez',
    date: '2026-01-15',
    readTime: 7,
    image: '/images/blog-stress.jpg',
  },
  {
    id: '4',
    titleEs: 'Relaciones Saludables: Comunicación Efectiva',
    titlePt: 'Relacionamentos Saudáveis: Comunicação Eficaz',
    excerptEs:
      'La comunicación es la base de cualquier relación saludable. Descubre cómo mejorar tu forma de comunicarte.',
    excerptPt:
      'A comunicação é a base de qualquer relacionamento saudável. Descubra como melhorar sua forma de se comunicar.',
    contentEs: `Las relaciones saludables son fundamentales para nuestro bienestar. La comunicación efectiva es la clave para construir y mantener conexiones significativas.

**Elementos de una Comunicación Efectiva:**

**1. Escucha Activa**
No se trata solo de oír, sino de entender realmente lo que la otra persona está diciendo. Presta atención completa sin interrumpir.

**2. Expresión Asertiva**
Comunica tus necesidades, sentimientos y límites de forma clara y respetuosa, sin ser agresivo ni pasivo.

**3. Empatía**
Intenta entender los sentimientos y perspectivas de la otra persona. Esto crea conexión y comprensión mutua.

**4. Validación Emocional**
Reconoce y valida los sentimientos del otro, aunque no estés de acuerdo con sus acciones.

**5. Resolución de Conflictos**
Los conflictos son normales. Lo importante es abordarlos con respeto y disposición a encontrar soluciones.

**6. Tiempo de Calidad**
Dedica tiempo exclusivo a las personas importantes en tu vida, sin distracciones.

**Consejos Prácticos:**

- Usa "yo" en lugar de "tú" para evitar culpabilizar
- Mantén contacto visual
- Respeta el espacio personal
- Sé honesto pero considerado
- Aprende a pedir disculpas sinceras

Una comunicación efectiva es una habilidad que se desarrolla con práctica. Invierte en mejorar tus relaciones.`,
    contentPt: `Os relacionamentos saudáveis são fundamentais para nosso bem-estar. A comunicação eficaz é a chave para construir e manter conexões significativas.

**Elementos de uma Comunicação Eficaz:**

**1. Escuta Ativa**
Não se trata apenas de ouvir, mas de entender realmente o que a outra pessoa está dizendo. Preste atenção completa sem interromper.

**2. Expressão Assertiva**
Comunique suas necessidades, sentimentos e limites de forma clara e respeitosa, sem ser agressivo nem passivo.

**3. Empatia**
Tente entender os sentimentos e perspectivas da outra pessoa. Isso cria conexão e compreensão mútua.

**4. Validação Emocional**
Reconheça e valide os sentimentos do outro, mesmo que não concorde com suas ações.

**5. Resolução de Conflitos**
Os conflitos são normais. O importante é abordá-los com respeito e disposição de encontrar soluções.

**6. Tempo de Qualidade**
Dedique tempo exclusivo às pessoas importantes em sua vida, sem distrações.

**Dicas Práticas:**

- Use "eu" em vez de "você" para evitar culpar
- Mantenha contato visual
- Respeite o espaço pessoal
- Seja honesto mas considerado
- Aprenda a pedir desculpas sinceras

Uma comunicação eficaz é uma habilidade que se desenvolve com prática. Invista em melhorar seus relacionamentos.`,
    categoryEs: 'Relaciones',
    categoryPt: 'Relacionamentos',
    category: 'relationships',
    author: 'Wilner Riascos Sánchez',
    date: '2026-01-12',
    readTime: 6,
    image: '/images/blog-relationships.jpg',
  },
  {
    id: '5',
    titleEs: 'Depresión: Reconocer los Síntomas y Buscar Ayuda',
    titlePt: 'Depressão: Reconhecer os Sintomas e Buscar Ajuda',
    excerptEs:
      'La depresión es una condición seria que requiere atención profesional. Aprende a reconocer los síntomas.',
    excerptPt:
      'A depressão é uma condição séria que requer atenção profissional. Aprenda a reconhecer os sintomas.',
    contentEs: `La depresión es más que sentirse triste. Es un trastorno del estado de ánimo que afecta cómo pensamos, sentimos y funcionamos en la vida diaria.

**Síntomas Comunes de la Depresión:**

- Tristeza persistente
- Pérdida de interés en actividades
- Cambios en el apetito o el sueño
- Fatiga o falta de energía
- Dificultad para concentrarse
- Sentimientos de culpa o inutilidad
- Pensamientos de muerte o suicidio

**Factores que Pueden Contribuir:**

- Eventos traumáticos o pérdidas
- Estrés crónico
- Cambios hormonales
- Genética
- Problemas de salud física
- Aislamiento social

**Pasos para Buscar Ayuda:**

1. **Habla con tu Médico**: Realiza un chequeo médico para descartar causas físicas.

2. **Busca un Terapeuta**: Un profesional de salud mental puede ayudarte a entender y tratar la depresión.

3. **Considera Medicamentos**: En algunos casos, los antidepresivos pueden ser beneficiosos.

4. **Crea una Red de Apoyo**: Comparte tus sentimientos con personas de confianza.

5. **Adopta Hábitos Saludables**: Ejercicio, nutrición adecuada y sueño son fundamentales.

**Importante:** La depresión es tratable. Buscar ayuda es un signo de fortaleza, no de debilidad. No dudes en contactar a un profesional si experimentas síntomas de depresión.`,
    contentPt: `A depressão é mais do que se sentir triste. É um transtorno do humor que afeta como pensamos, sentimos e funcionamos na vida diária.

**Sintomas Comuns de Depressão:**

- Tristeza persistente
- Perda de interesse em atividades
- Mudanças no apetite ou sono
- Fadiga ou falta de energia
- Dificuldade de concentração
- Sentimentos de culpa ou inutilidade
- Pensamentos de morte ou suicídio

**Fatores que Podem Contribuir:**

- Eventos traumáticos ou perdas
- Estresse crônico
- Mudanças hormonais
- Genética
- Problemas de saúde física
- Isolamento social

**Passos para Buscar Ajuda:**

1. **Fale com seu Médico**: Faça um check-up médico para descartar causas físicas.

2. **Procure um Terapeuta**: Um profissional de saúde mental pode ajudá-lo a entender e tratar a depressão.

3. **Considere Medicamentos**: Em alguns casos, antidepressivos podem ser benéficos.

4. **Crie uma Rede de Apoio**: Compartilhe seus sentimentos com pessoas de confiança.

5. **Adote Hábitos Saudáveis**: Exercício, nutrição adequada e sono são fundamentais.

**Importante:** A depressão é tratável. Buscar ajuda é um sinal de força, não de fraqueza. Não hesite em contactar um profissional se experimentar sintomas de depressão.`,
    categoryEs: 'Depresión',
    categoryPt: 'Depressão',
    category: 'depression',
    author: 'Wilner Riascos Sánchez',
    date: '2026-01-10',
    readTime: 7,
    image: '/images/blog-depression.jpg',
  },
  {
    id: '6',
    titleEs: 'Mejora tu Sueño: Consejos para Dormir Mejor',
    titlePt: 'Melhore seu Sono: Dicas para Dormir Melhor',
    excerptEs:
      'El sueño de calidad es esencial para nuestra salud física y mental. Descubre cómo mejorar tus hábitos de sueño.',
    excerptPt:
      'O sono de qualidade é essencial para nossa saúde física e mental. Descubra como melhorar seus hábitos de sono.',
    contentEs: `El sueño es uno de los pilares fundamentales de la salud. Sin embargo, muchas personas luchan con problemas de sueño que afectan su bienestar general.

**Importancia del Sueño de Calidad:**

- Fortalece el sistema inmunológico
- Mejora la memoria y concentración
- Regula el estado de ánimo
- Reduce el riesgo de enfermedades crónicas
- Favorece la recuperación física

**Consejos para Dormir Mejor:**

**1. Establece una Rutina**
Acuéstate y levántate a la misma hora todos los días, incluso los fines de semana.

**2. Crea un Ambiente Propicio**
- Oscuridad total
- Temperatura fresca (16-19°C)
- Silencio o sonidos relajantes
- Cama cómoda

**3. Limita la Cafeína**
Evita la cafeína después de las 2 PM. Reduce gradualmente si eres muy dependiente.

**4. Evita Pantallas Antes de Dormir**
La luz azul de los dispositivos interfiere con la producción de melatonina. Apaga pantallas 1 hora antes de dormir.

**5. Ejercicio Regular**
El ejercicio mejora la calidad del sueño, pero evita hacerlo cerca de la hora de dormir.

**6. Técnicas de Relajación**
- Meditación
- Respiración profunda
- Progresiva relajación muscular

**7. Cuida tu Alimentación**
Evita comidas pesadas antes de dormir. Opta por alimentos ligeros y nutritivos.

**Cuándo Buscar Ayuda:**

Si los problemas de sueño persisten por más de 2 semanas, consulta a un profesional. El insomnio crónico puede tratarse efectivamente.

Recuerda: dormir bien es invertir en tu salud.`,
    contentPt: `O sono é um dos pilares fundamentais da saúde. No entanto, muitas pessoas lutam com problemas de sono que afetam seu bem-estar geral.

**Importância do Sono de Qualidade:**

- Fortalece o sistema imunológico
- Melhora a memória e concentração
- Regula o humor
- Reduz o risco de doenças crônicas
- Favorece a recuperação física

**Dicas para Dormir Melhor:**

**1. Estabeleça uma Rotina**
Deite-se e levante-se no mesmo horário todos os dias, inclusive nos fins de semana.

**2. Crie um Ambiente Propício**
- Escuridão total
- Temperatura fresca (16-19°C)
- Silêncio ou sons relaxantes
- Cama confortável

**3. Limite a Cafeína**
Evite a cafeína após as 2 PM. Reduza gradualmente se for muito dependente.

**4. Evite Telas Antes de Dormir**
A luz azul dos dispositivos interfere na produção de melatonina. Desligue as telas 1 hora antes de dormir.

**5. Exercício Regular**
O exercício melhora a qualidade do sono, mas evite fazê-lo perto da hora de dormir.

**6. Técnicas de Relaxamento**
- Meditação
- Respiração profunda
- Relaxamento muscular progressivo

**7. Cuide da sua Alimentação**
Evite refeições pesadas antes de dormir. Opte por alimentos leves e nutritivos.

**Quando Buscar Ajuda:**

Se os problemas de sono persistirem por mais de 2 semanas, consulte um profissional. A insônia crônica pode ser tratada efetivamente.

Lembre-se: dormir bem é investir em sua saúde.`,
    categoryEs: 'Sueño',
    categoryPt: 'Sono',
    category: 'sleep',
    author: 'Wilner Riascos Sánchez',
    date: '2026-01-08',
    readTime: 6,
    image: '/images/blog-sleep.jpg',
  },
];

export const categories = [
  { id: 'anxiety', labelEs: 'Ansiedad', labelPt: 'Ansiedade' },
  { id: 'depression', labelEs: 'Depresión', labelPt: 'Depressão' },
  { id: 'relationships', labelEs: 'Relaciones', labelPt: 'Relacionamentos' },
  { id: 'stress', labelEs: 'Estrés', labelPt: 'Estresse' },
  { id: 'self-esteem', labelEs: 'Autoestima', labelPt: 'Autoestima' },
  { id: 'sleep', labelEs: 'Sueño', labelPt: 'Sono' },
];
