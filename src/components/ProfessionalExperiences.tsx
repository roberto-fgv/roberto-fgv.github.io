import React, { useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ParallaxBackground from './ParallaxBackground';

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
      className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24 relative overflow-hidden"
      ref={sectionRef}
    >
      <ParallaxBackground />
      <div className="section-container relative">
        <h2 className="section-title">
          {t('about.professionalExperiencesTitle') as string}
        </h2>
        <p className="section-subtitle">
          {t('about.subtitle') as string}
        </p>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#4E57CA]/10 -translate-x-1/2"></div>
          <div>
            {(t('about.professionalExperiences') as Array<{
              title: string;
              company: string;
              location: string;
              duration: string;
              description: string;
            }>).map((experience, index) => (
              <div
                key={index}
                className={`timeline-item relative flex flex-col md:flex-row gap-8 mb-12 opacity-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-[#4E57CA]/20 z-10">
                  <div className="w-full h-full rounded-full bg-[#4E57CA]/10 animate-pulse"></div>
                </div>
                <div className="md:w-1/2 ml-12 md:ml-0 md:px-8">
                  <div className="glass-card rounded-xl p-6 transition-all hover:shadow-md">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#4E57CA]/10 text-[#4E57CA] mb-4">
                      {experience.duration}
                    </span>
                    <h3 className="text-xl font-bold">{experience.title}</h3>
                    <h4 className="text-base font-medium text-[#4A4B65] mb-2">
                      {experience.company}, {experience.location}
                    </h4>
                    <p className="text-sm text-[#4A4B65]">{experience.description}</p>
                  </div>
                </div>
                <div className="md:w-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperiences;