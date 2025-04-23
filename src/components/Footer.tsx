
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';


const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-12 bg-[#131A41]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-display font-bold text-white">Roberto Rocha</h3>
              <p className="text-sm text-gray-300 mt-1">{t('footer.phdCandidate')}</p>
              <div className="mt-4 flex flex-col md:items-start items-center gap-1">
                <a href="mailto:roberto.rocha@fgv.edu.br" className="text-sm text-[#4E57CA] hover:text-[#6E74D2] font-medium">roberto.rocha@fgv.edu.br</a>
                <div className="flex space-x-3 mt-1">
                  <a href="https://scholar.google.com/citations?user=7aSnMkQAAAAJ&hl=en" aria-label="Google Scholar" target="_blank" rel="noopener noreferrer" className="hover:text-[#F3B43C] text-gray-300 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5 12 0Z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/rsrocha/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-[#F3B43C] text-gray-300 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </a>
                  <a href="https://github.com/roberto-fgv" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-[#F3B43C] text-gray-300 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.285 3.438 9.78 8.207 11.385 0.6 0.113 0.82-0.26 0.82-0.577 0-0.285-0.01-1.04-0.015-2.04-3.34 0.726-4.042-1.61-4.042-1.61-0.546-1.385-1.332-1.754-1.332-1.754-1.09-0.746 0.083-0.73 0.083-0.73 1.205 0.085 1.84 1.238 1.84 1.238 1.07 1.834 2.805 1.305 3.49 0.997 0.107-0.775 0.42-1.305 0.76-1.605-2.665-0.305-5.467-1.332-5.467-5.93 0-1.31 0.468-2.382 1.235-3.22-0.135-0.303-0.54-1.523 0.115-3.173 0 0 1.005-0.322 3.3 1.23 0.955-0.266 1.98-0.4 3-0.405 1.02 0.005 2.045 0.14 3 0.405 2.295-1.552 3.3-1.23 3.3-1.23 0.655 1.65 0.25 2.87 0.115 3.173 0.77 0.838 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92 0.43 0.37 0.81 1.103 0.81 2.225 0 1.605-0.015 2.895-0.015 3.285 0 0.32 0.22 0.695 0.825 0.575C20.565 22.073 24 17.58 24 12.297c0-6.627-5.373-12-12-12z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
              <li>
                <a href="#hero" className="text-sm text-gray-300 hover:text-[#F3B43C] transition-colors">
                {t('footer.home')}
                </a>
              </li>
              <li><a href="#about" className="text-sm text-gray-300 hover:text-[#F3B43C] transition-colors">{t('footer.about')}</a></li>
              <li><a href="#education" className="text-sm text-gray-300 hover:text-[#F3B43C] transition-colors">{t('footer.education')}</a></li>
              <li><a href="#publications" className="text-sm text-gray-300 hover:text-[#F3B43C] transition-colors">{t('footer.publications')}</a></li>
              <li><a href="#skills" className="text-sm text-gray-300 hover:text-[#F3B43C] transition-colors">{t('footer.skills')}</a></li>

            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[#3E478C]/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-400">{t('footer.copyright')}</p>
          
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-xs text-gray-400 hover:text-[#F3B43C] transition-colors">{t('footer.privacy')}</a>
            <span className="text-[#3E478C]">|</span> 
            <a href="#" className="text-xs text-gray-400 hover:text-[#F3B43C] transition-colors">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};;
export default Footer;
