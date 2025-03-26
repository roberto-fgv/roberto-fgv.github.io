
import React, { useEffect, useRef } from 'react';

type Skill = {
  category: string;
  items: { name: string; level: number }[];
};

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.skill-bar');
            bars.forEach((bar, index) => {
              setTimeout(() => {
                (bar as HTMLElement).style.width = (bar as HTMLElement).dataset.width || '0%';
              }, 100 * index);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  // Example skills data
  const skillsData: Skill[] = [
    {
      category: "Habilidades de Pesquisa",
      items: [
        { name: "Metodologia Científica", level: 90 },
        { name: "Análise de Dados", level: 85 },
        { name: "Revisão de Literatura", level: 95 },
        { name: "Escrita Acadêmica", level: 88 },
      ]
    },
    {
      category: "Ferramentas e Tecnologias",
      items: [
        { name: "SPSS/R/Python", level: 75 },
        { name: "LaTeX", level: 80 },
        { name: "Gestão de Referências", level: 92 },
        { name: "Plataformas de Pesquisa", level: 85 },
      ]
    },
    {
      category: "Competências Complementares",
      items: [
        { name: "Apresentações Acadêmicas", level: 88 },
        { name: "Idiomas", level: 82 },
        { name: "Trabalho em Equipe", level: 90 },
        { name: "Gestão de Projetos", level: 78 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="section-container">
        <h2 className="section-title">Habilidades</h2>
        <p className="section-subtitle">
          Competências técnicas e acadêmicas desenvolvidas ao longo da minha trajetória.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12" ref={skillsRef}>
          {skillsData.map((skillGroup, groupIndex) => (
            <div 
              key={groupIndex} 
              className="glass-card rounded-xl p-6 opacity-0 animate-fade-in"
              style={{ animationDelay: `${groupIndex * 150}ms` }}
            >
              <h3 className="text-lg font-bold mb-6">{skillGroup.category}</h3>
              
              <div className="space-y-5">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="skill-bar h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: '0%' }}
                        data-width={`${skill.level}%`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
