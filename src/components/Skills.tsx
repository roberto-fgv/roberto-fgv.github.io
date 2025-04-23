import React, { useEffect, useRef } from "react";
import ParallaxBackground from './ParallaxBackground';

interface Skill {
  name: string;
  description: string;
  category: string;
}

const skillsData: Skill[] = [
  { 
    name: "Pesquisa", 
    description: "Metodologias qualitativas e quantitativas, análise de dados, publicação científica",
    category: "Acadêmico"
  },
  { 
    name: "Análise de Dados", 
    description: "Análise estatística, visualização de dados, machine learning básico",
    category: "Técnico"
  },
  { 
    name: "Gestão de Projetos", 
    description: "Metodologias ágeis, liderança de equipes, gestão de stakeholders",
    category: "Gestão"
  },
  { 
    name: "Ensino", 
    description: "Preparação de aulas, mentoria, avaliação de alunos",
    category: "Acadêmico"
  },
  { 
    name: "Comunicação", 
    description: "Apresentações, redação técnica, comunicação interpessoal",
    category: "Soft Skills"
  },
];

const categoryColors: Record<string, string> = {
  'Análise de Dados': '#0EA5E9',
  'Programação': '#2563EB',
  'Web': '#6366F1',
  'DevOps': '#8B5CF6',
  'Acadêmico': '#0EA5E9',
  'Técnico': '#2563EB',
  'Gestão': '#6366F1',
  'Soft Skills': '#8B5CF6'
};

interface Tool {
  name: string;
  category: string;
  color: string;
}

const toolsData: Tool[] = [
  { name: "R", category: "Análise de Dados", color: categoryColors['Análise de Dados'] },
  { name: "Python", category: "Programação", color: categoryColors['Programação'] },
  { name: "SQL", category: "Análise de Dados", color: categoryColors['Análise de Dados'] },
  { name: "HTML", category: "Web", color: categoryColors['Web'] },
  { name: "JavaScript", category: "Web", color: categoryColors['Web'] },
  { name: "React", category: "Web", color: categoryColors['Web'] },
  { name: "Git", category: "DevOps", color: categoryColors['DevOps'] },
  { name: "Docker", category: "DevOps", color: categoryColors['DevOps'] },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            const elements = entry.target.querySelectorAll(".animate-item");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-up");
              }, 100 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden opacity-0 transition-opacity duration-700"
    >
      <ParallaxBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title animate-item">
            Habilidades e Competências
          </h2>
          <p className="section-subtitle animate-item">
            Conjunto de habilidades técnicas e profissionais desenvolvidas ao longo da carreira
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          {/* Ferramentas & Tecnologias - Ocupa 5 colunas em desktop */}
          <div className="col-span-12 lg:col-span-5">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 animate-item shadow-sm border border-gray-100 h-full">
              <h3 className="text-xl font-semibold mb-6">
                Ferramentas e Tecnologias
              </h3>
              <div className="space-y-8">
                {Object.entries(categoryColors).map(([category, color]) => {
                  const categoryTools = toolsData.filter(tool => tool.category === category);
                  if (categoryTools.length === 0) return null;
                  
                  return (
                    <div key={category} className="space-y-3">
                      <h4 className="font-semibold text-lg" style={{ color }}>
                        {category}
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {categoryTools.map((tool, index) => (
                          <div
                            key={index}
                            className="px-3 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 group flex items-center justify-center"
                            style={{
                              borderLeftColor: tool.color,
                              borderLeftWidth: '3px',
                              background: `linear-gradient(to right bottom, white, ${tool.color}08)`
                            }}
                          >
                            <h4 className="font-medium text-base group-hover:text-primary transition-colors text-center" 
                                style={{ color: tool.color }}>
                              {tool.name}
                            </h4>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Habilidades & Competências - Ocupa 7 colunas em desktop */}
          <div className="col-span-12 lg:col-span-7">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 animate-item shadow-sm border border-gray-100 h-full">
              <h3 className="text-xl font-semibold mb-6">
                Habilidades & Competências
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {skillsData.map((skill, index) => (
                  <div
                    key={index}
                    className="p-5 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
                    style={{
                      borderLeftColor: categoryColors[skill.category],
                      borderLeftWidth: '4px',
                      background: `linear-gradient(to right bottom, white, ${categoryColors[skill.category]}08)`
                    }}
                  >
                    <h4 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors" 
                        style={{ color: categoryColors[skill.category] }}>
                      {skill.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">{skill.description}</p>
                    <p className="text-sm font-medium text-muted-foreground bg-white/80 inline-block px-3 py-1.5 rounded-full shadow-sm">
                      {skill.category}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
