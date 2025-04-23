import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt-BR' | 'en';

interface ProfessionalExperience {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
}

interface TranslationObject {
  [key: string]: string | ProfessionalExperience[];
}

type Translations = {
  [key in Language]: TranslationObject;
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string | ProfessionalExperience[];
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object
const translations = {

  'pt-BR': {
    // Hero section
    'hero.name': 'Roberto Rocha',
    'hero.title': 'Ph.D. Candidate',
    'hero.description': 'Sou pesquisador com formação em Administração e Sistemas de Informação, atualmente doutorando em Administração de Empresas pela FGV EAESP. Com mais de 15 anos de experiência, atuo em pesquisa, gestão de projetos e ensino superior.',
    'hero.contact': 'Contato',
    'hero.learnMore': 'Saiba Mais',
    'hero.scrollDown': 'Role para baixo',
    'hero.education': 'Educação',
    'hero.publications': 'Publicações',
    'hero.projects': 'Projetos',
    
    // Navbar
    'nav.title': 'Currículo Acadêmico',
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.education': 'Formação',
    'nav.publications': 'Publicações',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contato',

        'publications.title':'Publicações',
        // Footer
        'footer.phdCandidate': "Candidato a PhD | Sistemas de Informação",
        'footer.home': "Início",
        'footer.about': "Sobre",
        'footer.education': "Formação",
        'footer.publications': "Publicações",
        'footer.skills': "Habilidades",
        'footer.contact': "Contato",
        'footer.copyright': `© ${new Date().getFullYear()} Roberto Rocha. Todos os direitos reservados.`,
        'footer.privacy': "Política de Privacidade",
        'footer.terms': "Termos de Uso",
         // About section
         'about.title': 'Sobre',
         'about.subtitle': 'Conheça um pouco mais sobre minha carreira e interesses.',
         'about.academicPath': 'Tenho graduação em Administração de Empresas pela UniFTC em 2006. Tenho me dedicado à pesquisa em Sistemas de Informação e Administração de Empresas, com foco principal nos tópicos relacionados à agilidade organizacional e inovação. Durante o meu Mestrado na Universidade de São Paulo (USP), busquei contribuir significativamente para o avanço do conhecimento na área através da investigação de temas como Linha de Produto para Gestão de Processos de Negócio, aplicações de tecnologias para a gestão do risco de desastres. Atualmente curso o Doutorado em Administração de Empresas na Fundação Getulio Vargas (FGV EAESP).',
         'about.researchInterests': 'Meus interesses de pesquisa incluem Agilidade Organizacional, Sistemas de Informação e Estudos Organizacionais. Tenho aplicado metodologias qualitativas e quantitativas para investigar questões relacionadas à gestão de processos de negócio e à gestão do risco de desastres, com foco em aprimorar a tomada de decisões, promover a agilidade organizacional, e utilizar abordagens colaborativas e tecnologias de informação para resolver problemas complexos.',
         'about.achievements': 'Entre minhas principais conquistas acadêmicas, destaco a aprovação em primeiro lugar no processo seletivo do Edital 01/2020 para bolsas de pesquisa no Centro de Tecnologia da Informação Renato Archer e a aprovação em 1º lugar do Mestrado em Sistemas de Informação da Universidade de São Paulo (USP). Além disso, fui agraciado com a prestigiosa Marie Skłodowska-Curie Actions Research Fellowship da Comissão Europeia em 2016. Meus trabalhos também obtiveram reconhecimento, como a inclusão na ScienceDirect Top 25 List of Most Downloaded Articles e o Top 20 Most Downloaded Recent Papers da Transactions in GIS.',
         'about.collaborations': 'Tenho colaborado com pesquisadores de diversas instituições e países, incluindo a Universidade de São Paulo (USP), o European Research Center for Information Systems (ERCIS) e com a University Alliance Ruhr.',
         'about.professionalExperiencesTitle': 'Experiências Profissionais',
         'about.professionalExperiences': [
            {
              title: 'Teaching Assistant',
              company: 'FGV EAESP',
              location: 'São Paulo, SP',
              duration: '2022 - Presente',
              description: 'Atuação no Executive MBA e MPGI. Disciplinas: Customer Success Management, CEMS Business Project, Metodologia de Pesquisa. Assistência em cursos de graduação em Administração de TI e Estatística II.'
            },
            {
              title: 'Professor Tutor',
              company: 'Universidade Federal da Bahia',
              location: 'Salvador, BA',
              duration: '2021 - 2022',
              description: 'Suporte aos alunos, correção de avaliações e produção de conteúdo pedagógico para EAD.'
            },
            {
              title: 'Técnico Administrativo',
              company: 'UFBA',
              location: 'Salvador, BA',
              duration: '2006 - 2022',
              description: 'Atendimento ao público, elaboração de relatórios para coordenações e suporte às atividades acadêmicas.'
            },
            {
              title: 'First Stage Researcher',
              company: 'European Research Center',
              location: 'Europa',
              duration: '2016',
              description: 'Bolsista Marie Curie no Projeto NITIMesr.'
            }
          ],
          'about.skills': [
            'Pesquisa quantitativa e qualitativa',
            'Metodologias Ágeis',
            'R',
            'Python',
            'HTML',
            'JavaScript',
            'Git e controle de versão',
            'Elaboração de relatórios para acreditações (AMBA, CEMS, CAPES)'
          ],


        // Publications section
        'publications.subtitle': 'Artigos científicos, capítulos de livros e trabalhos apresentados em conferências.',
        'publications.filter.all': 'Todos',
        'publications.filter.article': 'Artigos',
        'publications.filter.book': 'Livros',
        'publications.filter.conference': 'Conferências',
  },
  'en': {
    // Hero section
    'hero.name': 'Roberto Rocha',
    'hero.title': 'Ph.D. Candidate',
    'hero.description': 'I am a researcher with a background in Business Administration and Information Systems, currently pursuing a PhD in Business Administration at FGV EAESP. With over 15 years of experience, I work in research, project management, and higher education.',
    'hero.contact': 'Contact',
    'hero.learnMore': 'Learn More',
    'hero.scrollDown': 'Scroll down',
    'hero.education': 'Education',
    'hero.publications': 'Publications',
    'hero.projects': 'Projects',
    
    // Navbar
    'nav.title': 'Academic CV',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.education': 'Education',
    'nav.publications': 'Publications',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

        // Footer
        'footer.phdCandidate': "PhD. Candidate | Information Systems",
        'footer.home': "Home",
        'footer.about': "About",
        'footer.education': "Education",
        'footer.publications': "Publications",
        'footer.skills': "Skills",
        'footer.contact': "Contact",
        'footer.copyright': `© ${new Date().getFullYear()} Roberto Rocha. All rights reserved.`,
        'footer.privacy': "Privacy Policy",
        'footer.terms': "Terms of Use",
           // About section
           'about.title': 'About',
           'about.subtitle': 'Learn more about my career and interests.',
           'about.academicPath': 'Academic path in English',
           'about.researchInterests': 'Research interests in English',
           'about.achievements': 'Achievements in English',
           'about.collaborations': 'Collaborations in English',

           'about.professionalExperiencesTitle': 'Professional Experiences',
           'about.professionalExperiences': [
            {
              title: 'Teaching Assistant',
              company: 'FGV EAESP',
              location: 'São Paulo, SP',
              duration: '2022 - Present',
              description: 'Teaching in Executive MBA and MPGI programs. Courses: Customer Success Management, CEMS Business Project, Research Methodology. Assistance in undergraduate courses in IT Management and Statistics II.'
            },
            {
              title: 'Tutor Professor',
              company: 'Federal University of Bahia',
              location: 'Salvador, BA',
              duration: '2021 - 2022',
              description: 'Student support, assessment grading, and development of pedagogical content for distance learning.'
            },
            {
              title: 'Administrative Technician',
              company: 'UFBA',
              location: 'Salvador, BA',
              duration: '2006 - 2022',
              description: 'Public service, report preparation for coordinators, and support for academic activities.'
            },
            {
              title: 'First Stage Researcher',
              company: 'European Research Center',
              location: 'Europe',
              duration: '2016',
              description: 'Marie Curie Fellow in the NITIMesr Project.'
            }
          ],
          'about.skills': [
            'Quantitative and qualitative research',
            'Agile Methodologies',
            'R',
            'Python',
            'HTML',
            'JavaScript',
            'Git and version control',
            'Accreditation report preparation (AMBA, CEMS, CAPES)'
          ],


           'publications.title':'Publications',

           // Publications section
           'publications.subtitle': 'Scientific articles, book chapters, and papers presented at conferences.',
           'publications.filter.all': 'All',
           'publications.filter.article': 'Articles',
           'publications.filter.book': 'Books',
           'publications.filter.conference': 'Conferences',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt-BR');

  const t = (key: string): string | ProfessionalExperience[] => {
    const value = translations[language][key];
    if (Array.isArray(value) && value.length > 0) {
      if (typeof value[0] === 'string') {
        return value.join(', ');
      }
    }
    return value;
  };

  const getLanguageData = (key: string): string | ProfessionalExperience[] => {
    return translations[language][key];
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
