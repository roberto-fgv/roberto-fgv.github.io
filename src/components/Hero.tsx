
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
      className="min-h-screen flex flex-col items-center justify-center pt-16 relative overflow-hidden bg-gradient-to-b from-[#1A1F2C] via-[#2D2A5F] to-[#1A1F2C]"
      ref={heroRef}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTQtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNGMyLjIxIDAgNC0xLjc5IDQtNHptLTQgMTBjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDQgNC0xLjc5IDQtNC0xLjc5LTQtNC00em0wLTIwYzIuMjEgMCA0LTEuNzktNC00cy0xLjc5LTQtNC00LTQgMS43OS00IDQgMS43OSA0IDQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40 pointer-events-none"></div>

      {/* Animated shapes */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl opacity-70 animate-pulse"></div>
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl opacity-70 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-300/10 rounded-full filter blur-2xl opacity-50 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container max-w-6xl mx-auto px-4 py-12 md:py-0 transition-opacity duration-1000 opacity-100 z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white border border-white/30 inline-flex items-center">
                <Award className="w-4 h-4 mr-1" />
                <span>MSc. Information Systems</span>
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-tight text-white">
              <span className="block">Roberto Rocha</span>
              <span className="text-2xl md:text-3xl lg:text-4xl text-white/80 mt-2 block">
                Ph.D. Candidate
              </span>
            </h1>

            <div className="w-20 h-1 bg-purple-400/80 mx-auto rounded-full"></div>

            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Sou pesquisador com formação em Administração e Sistemas de
              Informação, atualmente doutorando em Administração de Empresas
              pela FGV EAESP. Com mais de 15 anos de experiência, atuo em
              pesquisa, gestão de projetos e ensino superior.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button 
                className="px-8 group bg-white text-[#2D2A5F] hover:bg-white/80" 
                variant="default"
                asChild
              >
                <a href="#contact">
                  Contato
                </a>
              </Button>
              <Button 
                className="px-8 group bg-purple-600 border-purple-600 text-white hover:bg-purple-700 hover:border-purple-700" 
                variant="outline"
                asChild
              >
                <a href="#about">
                  Saiba Mais
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
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
                  className="glass-card p-4 rounded-lg text-center flex-1 shadow-md bg-white/10 backdrop-blur-sm border border-white/20 animate-fade-in hover:shadow-lg transition-shadow"
                  style={{ animationDelay: `${0.7 + i * 0.2}s` }}
                >
                  <div className="text-white flex justify-center">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/80">
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
            className="flex flex-col items-center text-sm text-white hover:text-white/80 transition-colors"
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
