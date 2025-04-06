
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt-BR' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

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
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.education': 'Formação',
    'nav.publications': 'Publicações',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contato',
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
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.education': 'Education',
    'nav.publications': 'Publications',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt-BR');

  const translate = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translate }}>
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
