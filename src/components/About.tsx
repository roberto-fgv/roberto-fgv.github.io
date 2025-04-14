import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
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
        <h2 className="section-title">{t('about.title')}</h2>
        <p className="section-subtitle">
          {t('about.subtitle')}
        </p>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mt-12">
          <div className="glass-card rounded-2xl p-8 opacity-0 animate-on-scroll" style={{ animationDelay: "100ms" }} >
            <div className="mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-primary/10 text-primary/90 rounded-full flex items-center justify-center">
                  📚
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Trajetória Acadêmica</h3>
              <p className="text-muted-foreground">
                {t('about.academicPath')}
              </p>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-8 opacity-0 animate-on-scroll" style={{ animationDelay: "200ms" }}>
            <div className="mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-primary/10 text-primary/90 rounded-full flex items-center justify-center">
                  🔍
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Interesses de Pesquisa</h3>
              <p className="text-muted-foreground">
                {t('about.researchInterests')}
              </p>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-8 opacity-0 animate-on-scroll" style={{ animationDelay: "300ms" }}>
           <div className="mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-primary/10 text-primary/90 rounded-full flex items-center justify-center">
                  🏆
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Conquistas</h3>
              <p className="text-muted-foreground">
                {t('about.achievements')}
              </p>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-8 opacity-0 animate-on-scroll" style={{ animationDelay: "400ms" }}>
            <div className="mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-primary/10 text-primary/90 rounded-full flex items-center justify-center">
                  🌐
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Colaborações</h3>
              <p className="text-muted-foreground">
                {t('about.collaborations')}
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );

}

export default About;
