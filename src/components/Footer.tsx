
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-[#131A41]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-display font-bold text-white">Roberto Rocha</h3>
              <p className="text-sm text-gray-300 mt-1">PhD. Candidate | Sistemas de Informação</p>
            </div>
          </div>
          
          <div className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
              <li>
                <a href="#hero" className="text-sm text-gray-300 hover:text-[#F3B43C] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-gray-300 hover:text-[#F3B43C] transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#education" className="text-sm text-gray-300 hover:text-[#F3B43C] transition-colors">
                  Formação
                </a>
              </li>
              <li>
                <a href="#publications" className="text-sm text-gray-300 hover:text-[#F3B43C] transition-colors">
                  Publicações
                </a>
              </li>
              <li>
                <a href="#skills" className="text-sm text-gray-300 hover:text-[#F3B43C] transition-colors">
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-300 hover:text-[#F3B43C] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[#3E478C]/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-400">
            &copy; {currentYear} Roberto Rocha. Todos os direitos reservados.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-xs text-gray-400 hover:text-[#F3B43C] transition-colors">
              Política de Privacidade
            </a>
            <span className="text-[#3E478C]">|</span>
            <a href="#" className="text-xs text-gray-400 hover:text-[#F3B43C] transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
