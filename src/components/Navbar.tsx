
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const navItems = [
  { key: 'nav.home', href: '#hero' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.education', href: '#education' },
  { key: 'nav.publications', href: '#publications' },
  { key: 'nav.skills', href: '#skills' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  
  const getNavText = (key: string): string => {
    const value = t(key);
    return typeof value === 'string' ? value : '';
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        "sticky top-0 w-full z-50 transition-all duration-300 h-16 bg-[#131A41]",
        scrolled 
          ? "shadow-md border-b border-white/0" 
          : "border-b border-white/10"
      )}
    >
      <div className="max-w-6xl mx-auto h-full px-4 flex justify-between items-center">
        <div className="font-display font-bold text-xl h-full flex items-center">
          <a href="#" className="transition-colors hover:text-primary h-full flex items-center gap-2 pt-1">
            <GraduationCap className="h-6 w-6 text-white" />
            <span className="text-white text-xl font-semibold">
              {getNavText('nav.title')}
            </span>
          </a>
        </div>
        
        <nav className="hidden h-full md:flex items-center space-x-8 pt-1">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors relative py-2 text-white",
                "after:absolute after:w-full after:h-0.5 after:bg-primary after:bottom-0 after:left-0",
                "after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300",
                "hover:text-primary"
              )}
            >
              {getNavText(item.key)}
            </a>
          ))}
          
          <LanguageSwitcher />
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          
          <button 
            className="p-2 focus:outline-none text-white" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={cn(
              "block w-6 h-0.5 bg-current mb-1.5 transition-transform duration-300",
              mobileMenuOpen && "transform rotate-45 translate-y-2"
            )}></span>
            <span className={cn(
              "block w-6 h-0.5 bg-current mb-1.5 transition-opacity duration-300",
              mobileMenuOpen && "opacity-0"
            )}></span>
            <span className={cn(
              "block w-6 h-0.5 bg-current transition-transform duration-300",
              mobileMenuOpen && "transform -rotate-45 -translate-y-2"
            )}></span>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "md:hidden absolute w-full bg-[#131A41]/90 backdrop-blur-lg shadow-md transition-all duration-300 overflow-hidden",
        mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-4 py-2">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="block py-3 text-center font-medium text-white hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {getNavText(item.key)}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
