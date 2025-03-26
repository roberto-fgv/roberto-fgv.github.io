
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
      ref={heroRef}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white pointer-events-none"></div>
      
      {/* Animated shapes */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100/30 rounded-full filter blur-3xl opacity-70 animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-100/30 rounded-full filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container max-w-6xl mx-auto px-4 text-center opacity-0 transition-opacity duration-1000">
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="inline-block">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/5 text-primary/90 border border-primary/10">
              Currículo Acadêmico
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-tight">
            <span className="block">Seu Nome</span>
            <span className="text-3xl md:text-4xl lg:text-5xl text-muted-foreground mt-2 block">
              Pesquisador & Acadêmico
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Especialista em sua área acadêmica com experiência em pesquisa, ensino e publicações científicas relevantes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium shadow-sm hover:bg-primary/90 transition-colors"
            >
              Contato
            </a>
            <a 
              href="#about" 
              className="px-8 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors"
            >
              Saiba Mais
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/20 flex justify-center pt-1">
            <div className="w-1 h-2 bg-primary/40 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
