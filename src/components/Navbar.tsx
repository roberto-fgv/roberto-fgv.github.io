
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "py-3 bg-white/90 backdrop-blur-lg shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="font-display font-bold text-xl flex items-center">
          <a href="#" className="transition-colors hover:text-primary flex items-center gap-2">
            <GraduationCap className="h-6 w-6" />
            <span className={cn(
              "transition-all duration-300",
              scrolled ? "text-gray-900" : "bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent"
            )}>
              Currículo Acadêmico
            </span>
          </a>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {[
            { name: 'Início', href: '#hero' },
            { name: 'Sobre', href: '#about' },
            { name: 'Formação', href: '#education' },
            { name: 'Publicações', href: '#publications' },
            { name: 'Habilidades', href: '#skills' },
            { name: 'Contato', href: '#contact' },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors relative py-2",
                "after:absolute after:w-full after:h-0.5 after:bg-primary after:bottom-0 after:left-0",
                "after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300",
                scrolled ? "text-gray-800 hover:text-primary" : "text-gray-800 hover:text-primary"
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button 
            className="p-2 focus:outline-none" 
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
        "md:hidden absolute w-full bg-white shadow-md transition-all duration-300 overflow-hidden",
        mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-4 py-2">
          {[
            { name: 'Início', href: '#hero' },
            { name: 'Sobre', href: '#about' },
            { name: 'Formação', href: '#education' },
            { name: 'Publicações', href: '#publications' },
            { name: 'Habilidades', href: '#skills' },
            { name: 'Contato', href: '#contact' },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-3 text-center font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
