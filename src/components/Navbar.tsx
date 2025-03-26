
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
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

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "py-3 bg-white/80 backdrop-blur-lg shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="font-display font-bold text-xl">
          <a href="#" className="transition-colors hover:text-primary/80">
            Currículo Acadêmico
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
              className="text-sm font-medium hover:text-primary/80 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          {/* Mobile menu button - simplified for first version */}
          <button className="p-2 focus:outline-none">
            <span className="block w-6 h-0.5 bg-current mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-current mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-current"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
