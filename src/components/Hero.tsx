
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowDown, Award, BookOpen, GraduationCap, BookMarked } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animação no carregamento da página
    if (heroRef.current) {
      heroRef.current.classList.add("opacity-100");
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
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
      className="min-h-screen flex flex-col items-center justify-center pt-16 relative overflow-hidden bg-[#131A41] text-white"
      ref={heroRef}
    >
      {/* Background decorations - updated for dark theme */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMTM4NjAiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTQtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNGMyLjIxIDAgNC0xLjc5IDQtNHptLTQgMTBjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDQgNC0xLjc5IDQtNC0xLjc5LTQtNC00em0wLTIwYzIuMjEgMCA0LTEuNzktNC00cy0xLjc5LTQtNC00LTQgMS43OS00IDQgMS43OSA0IDQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20 pointer-events-none"></div>

      {/* Animated shapes - updated colors */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#252D65]/40 rounded-full filter blur-3xl opacity-40 animate-pulse"></div>
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#252D65]/40 rounded-full filter blur-3xl opacity-40 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#3E478C]/30 rounded-full filter blur-2xl opacity-30 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container max-w-6xl mx-auto px-4 py-12 md:py-0 opacity-100">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="space-y-8 animate-fade-in opacity-100" style={{ animationDelay: "0.5s" }}>
            {/* More harmonious name display with new colors */}
            <div className="name-container">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-2">
                Roberto Rocha
              </h1>
              <div className="text-xl md:text-2xl lg:text-3xl text-gray-200/80 font-light">
                Ph.D. Candidate
              </div>
            </div>

            <div className="w-20 h-1 bg-[#F3B43C] mx-auto rounded-full"></div>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Sou pesquisador com formação em Administração e Sistemas de
              Informação, atualmente doutorando em Administração de Empresas
              pela FGV EAESP. Com mais de 15 anos de experiência, atuo em
              pesquisa, gestão de projetos e ensino superior.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button 
                className="w-36 h-10 group bg-[#F3B43C] text-[#131A41] hover:bg-[#F3B43C]/90 font-medium" 
                variant="default"
                asChild
              >
                <a href="#contact">
                  Contato
                </a>
              </Button>
              <Button 
                className="w-36 h-10 group bg-[#252D65] text-white border border-[#3E478C] hover:bg-[#3E478C]" 
                variant="outline"
                asChild
              >
                <a href="#about">
                  Saiba Mais
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-8">
              {[
                {
                  icon: <GraduationCap className="w-8 h-8 mb-2" />,
                  label: "Educação",
                  value: "Ph.D.",
                },
                {
                  icon: <BookOpen className="w-8 h-8 mb-2" />,
                  label: "Publicações",
                  value: "21+",
                },
                {
                  icon: <BookMarked className="w-8 h-8 mb-2" />,
                  label: "Projetos",
                  value: "15+",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`glass-card p-4 rounded-lg text-center flex-1 shadow-md backdrop-blur-sm border transition-shadow animate-fade-in hover:shadow-lg ${
                    i === 0 ? "bg-[#7986CB]/90 border-[#7986CB]/30" : 
                    i === 1 ? "bg-[#FFCC80]/90 border-[#FFCC80]/30 text-[#5D4037]" : 
                    "bg-[#CE93D8]/90 border-[#CE93D8]/30 text-[#4A148C]"
                  }`}
                  style={{ animationDelay: `${0.7 + i * 0.2}s` }}
                >
                  <div className={`flex justify-center ${
                    i === 0 ? "text-[#E8EAF6]" : 
                    i === 1 ? "text-[#5D4037]" :
                    "text-[#4A148C]"
                  }`}>{stat.icon}</div>
                  <div className={`text-2xl font-bold ${
                    i === 0 ? "text-white" : 
                    i === 1 ? "text-[#5D4037]" :
                    "text-[#4A148C]"
                  }`}>{stat.value}</div>
                  <div className={`text-sm ${
                    i === 0 ? "text-[#E8EAF6]" : 
                    i === 1 ? "text-[#5D4037]/80" : 
                    "text-[#4A148C]/80"
                  }`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <a
            href="#about"
            className="flex flex-col items-center text-sm text-gray-300 hover:text-[#F3B43C] transition-colors"
          >
            <span className="mb-2">Role para baixo</span>
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
