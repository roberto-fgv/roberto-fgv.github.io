
import React, { useEffect, useRef } from 'react';

const Education = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );
    
    if (timelineRef.current) {
      const elements = timelineRef.current.querySelectorAll('.timeline-item');
      elements.forEach((el) => observer.observe(el));
    }
    
    return () => {
      if (timelineRef.current) {
        const elements = timelineRef.current.querySelectorAll('.timeline-item');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  // Example education data
  const educationData = [
    {
      degree: "Doutorado em Administração de Empresas",
      institution: "Fundação Getulio Vargas",
      location: "São Paulo, Brasil",
      date: "2022 - 2026",
      description: "Tese sobre [tema específico]. Orientador: Prof. Dr. Otávio P. Sanchez."
    },
    {
      degree: "Mestrado em Sistemas de Informação",
      institution: "Universidade de São Paulo",
      location: "São Paulo, Brasil",
      date: "2010 - 2012",
      description: "Dissertação sobre [tema específico]. Orientador: Prof. Dr. Marcelo Fantinato."
    },
    {
      degree: "Especialização em Administração de Sistemas de Informação",
      institution: "Universidade Federal de Lavras",
      location: "Lavras, Brasil",
      date: "2017 - 2019",
      description: "Trabalho de conclusão sobre [tema específico]. Orientador: Prof. Dr. André Luiz Zambalde."
    },
    {
      degree: "Bacharelado em Administração de Empresas",
      institution: "UniFTC",
      location: "Vitória da Conquista, Brasil",
      date: "2002 - 2006"
    },
    {
      degree: "Técnico em Informática",
      institution: "Instituto Federal de Educação, Ciência e Tecnologia da Bahia",
      location: "Vitória da Conquista, Brasil",
      date: "2000 - 2001"
    },
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50/50">
      <div className="section-container">
        <h2 className="section-title">Formação Acadêmica</h2>
        <p className="section-subtitle">
          Minha trajetória educacional e formação acadêmica ao longo dos anos.
        </p>
        
        <div className="relative mt-16" ref={timelineRef}>
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#4E57CA]/10 -translate-x-1/2"></div>
          
          {/* Timeline items */}
          {educationData.map((item, index) => (
            <div 
              key={index}
              className={`timeline-item relative flex flex-col md:flex-row gap-8 mb-12 opacity-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-[#4E57CA]/20 z-10">
                <div className="w-full h-full rounded-full bg-[#4E57CA]/10 animate-pulse"></div>
              </div>
              
              <div className="md:w-1/2 ml-12 md:ml-0 md:px-8">
                <div className="glass-card rounded-xl p-6 transition-all hover:shadow-md">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#4E57CA]/10 text-[#4E57CA] mb-4">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-bold">{item.degree}</h3>
                  <h4 className="text-base font-medium text-[#4A4B65] mb-2">
                    {item.institution}, {item.location}
                  </h4>
                  {item.description && (
                    <p className="text-sm text-[#4A4B65]">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
              <div className="md:w-1/2 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
