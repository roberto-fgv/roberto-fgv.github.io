import React, { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements =
        sectionRef.current.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (sectionRef.current) {
        const elements =
          sectionRef.current.querySelectorAll(".animate-on-scroll");
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section id="about" className="bg-white py-16 md:py-24" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">Sobre</h2>
        <p className="section-subtitle">
          Um breve resumo sobre minha carreira acadêmica e interesses de
          pesquisa.
        </p>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mt-12">
          <div className="glass-card rounded-2xl p-8 opacity-0 animate-on-scroll">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-primary/10 text-primary/90 rounded-full flex items-center justify-center">
                  📚
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Trajetória Acadêmica</h3>
              <p className="text-muted-foreground">
                Minha jornada acadêmica começou na graduação em Administração de
                Empresas pela Faculdade de Tecnologia e Ciências (FTC) em 2006.
                Ao longo dos anos, tenho me dedicado à pesquisa em Sistemas de
                Informação e Administração de Empresas, com foco principal nos
                tópicos relacionados à gestão da inovação, gestão de processos e
                sistemas de informação geográfica para suporte à tomada de
                decisões. Durante o meu Mestrado na Universidade de São Paulo
                (USP), busquei contribuir significativamente para o avanço do
                conhecimento na área através da investigação de temas como Linha
                de Produto para Gestão de Processos de Negócio, aplicações de
                tecnologias para a gestão do risco de desastres, e agilidade
                organizacional. Atualmente curso o Doutorado em Administração de
                Empresas na Fundação Getulio Vargas (FGV EAESP).
              </p>
            </div>
          </div>

          <div
            className="glass-card rounded-2xl p-8 opacity-0 animate-on-scroll"
            style={{ animationDelay: "100ms" }}
          >
            <div className="mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-primary/10 text-primary/90 rounded-full flex items-center justify-center">
                  🔍
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Interesses de Pesquisa</h3>
              <p className="text-muted-foreground">
                Meus interesses de pesquisa incluem Agilidade Organizacional,
                Sistemas de Informação e Estudos Organizacionais. Tenho aplicado
                metodologias qualitativas e quantitativas para investigar
                questões relacionadas à gestão de processos de negócio e à
                gestão do risco de desastres, com foco em aprimorar a tomada de
                decisões, promover a agilidade organizacional, e utilizar
                abordagens colaborativas e tecnologias de informação para
                resolver problemas complexos.
              </p>
            </div>
          </div>

          <div
            className="glass-card rounded-2xl p-8 opacity-0 animate-on-scroll"
            style={{ animationDelay: "200ms" }}
          >
            <div className="mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-primary/10 text-primary/90 rounded-full flex items-center justify-center">
                  🏆
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Conquistas</h3>
              <p className="text-muted-foreground">
                Entre minhas principais conquistas acadêmicas, destaco a
                aprovação em primeiro lugar no processo seletivo do Edital
                01/2020 para bolsas de pesquisa no Centro de Tecnologia da
                Informação Renato Archer e a aprovação em 1º lugar do Mestrado
                em Sistemas de Informação da Universidade de São Paulo (USP).
                Além disso, fui agraciado com a prestigiosa Marie
                Skłodowska-Curie Actions Research Fellowship da Comissão
                Europeia em 2016. Meus trabalhos também obtiveram
                reconhecimento, como a inclusão na ScienceDirect Top 25 List of
                Most Downloaded Articles e o Top 20 Most Downloaded Recent
                Papers da Transactions in GIS.
              </p>
            </div>
          </div>

          <div
            className="glass-card rounded-2xl p-8 opacity-0 animate-on-scroll"
            style={{ animationDelay: "300ms" }}
          >
            <div className="mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-primary/10 text-primary/90 rounded-full flex items-center justify-center">
                  🌐
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Colaborações</h3>
              <p className="text-muted-foreground">
                Tenho colaborado com pesquisadores de diversas instituições e
                países, incluindo a Fundação Getulio Vargas (FGV), a
                Universidade de São Paulo (USP), a Universidade Federal de
                Lavras (UFLA) e a Universidade de Münster (Alemanha).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
