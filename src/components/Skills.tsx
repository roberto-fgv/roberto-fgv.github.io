
import React, { useEffect, useRef } from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const skillsData = [
  { name: 'Pesquisa Acadêmica', value: 90 },
  { name: 'Publicações', value: 75 },
  { name: 'Ensino', value: 85 },
  { name: 'Análise de Dados', value: 80 },
  { name: 'Metodologia Científica', value: 95 },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            const elements = entry.target.querySelectorAll('.animate-item');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-up');
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
      className="py-20 bg-gray-50 relative overflow-hidden opacity-0 transition-opacity duration-700"
    >
      <div className="section-container">
        <h2 className="section-title text-center animate-item">Competências Acadêmicas</h2>
        <p className="section-subtitle text-center animate-item">
          Áreas de conhecimento e expertise desenvolvidas ao longo da carreira acadêmica
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div className="glass-card rounded-xl p-6 animate-item">
            <h3 className="text-xl font-semibold mb-4">Análise de Desempenho</h3>
            <p className="text-muted-foreground mb-6">
              Crescimento contínuo nas métricas acadêmicas e índices de impacto das publicações
            </p>
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/bb9bc312-43a1-4129-aea3-35dfa5c7e68f.png" 
                alt="Gráfico de desempenho acadêmico" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-6 animate-item">
            <h3 className="text-xl font-semibold mb-4">Habilidades & Competências</h3>
            <ChartContainer className="h-64 w-full" config={{
              research: { color: "#0EA5E9" },
              publications: { color: "#33C3F0" },
              teaching: { color: "#1EAEDB" },
              data: { color: "#D3E4FD" },
              methodology: { color: "#2563EB" },
            }}>
              <BarChart
                data={skillsData}
                layout="vertical"
                margin={{ top: 10, right: 30, left: 100, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" domain={[0, 100]} tickCount={6} />
                <YAxis type="category" dataKey="name" width={90} />
                <Bar dataKey="value" fill="var(--color-research)" radius={[0, 4, 4, 0]} />
                <ChartTooltip
                  content={
                    <ChartTooltipContent formatter={(value) => [`${value}%`, 'Nível']} />
                  }
                />
              </BarChart>
            </ChartContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
