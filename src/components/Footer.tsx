
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-primary/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-display font-bold">Roberto Rocha</h3>
              <p className="text-sm text-muted-foreground mt-1">PhD. Candidate | Sistemas de Informação</p>
            </div>
          </div>
          
          <div className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
              <li>
                <a href="#hero" className="text-sm hover:text-primary/90 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm hover:text-primary/90 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#education" className="text-sm hover:text-primary/90 transition-colors">
                  Formação
                </a>
              </li>
              <li>
                <a href="#publications" className="text-sm hover:text-primary/90 transition-colors">
                  Publicações
                </a>
              </li>
              <li>
                <a href="#skills" className="text-sm hover:text-primary/90 transition-colors">
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm hover:text-primary/90 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Roberto Rocha. Todos os direitos reservados.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary/90 transition-colors">
              Política de Privacidade
            </a>
            <span className="text-muted-foreground/30">|</span>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary/90 transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
