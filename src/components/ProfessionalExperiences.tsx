import React, { useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ProfessionalExperiences = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements =
        sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (sectionRef.current) {
        const elements =
          sectionRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section
      id="professional-experiences"
      className="bg-white py-16 md:py-24"
      ref={sectionRef} 
    >
      <div className="section-container">
        <h2 className="section-title">
          {t('about.professionalExperiencesTitle')}
        </h2>
        <p className="section-subtitle">
        {t('about.subtitle')}
      </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t('about.professionalExperiences').map(
            (experience: any, index: number) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 opacity-0 animate-on-scroll"
                style={{ animationDelay: `${100 * (index % 3 + 1)}ms` }}
              >
                <div className="mb-4">
                  <h3 className="text-lg font-bold">{experience.title}</h3>
                  <p className="text-muted-foreground">
                    {experience.company} - {experience.location}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {experience.duration}
                  </p>
                </div>
                <p className="text-muted-foreground">{experience.description}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}; 

export default ProfessionalExperiences;