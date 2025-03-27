
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowDown, Award, BookOpen, GraduationCap } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animação no carregamento da página
    if (heroRef.current) {
      heroRef.current.classList.add('opacity-100');
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
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
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-gradient-to-b from-blue-50 to-white"
      ref={heroRef}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNCQkRFRkIiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTQtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNGMyLjIxIDAgNC0xLjc5IDQtNHptLTQgMTBjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDQgNC0xLjc5IDQtNC0xLjc5LTQtNC00em0wLTIwYzIuMjEgMCA0LTEuNzkgNC00cy0xLjc5LTQtNC00LTQgMS43OS00IDQgMS43OSA0IDQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20 pointer-events-none"></div>

      {/* Animated shapes */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/40 rounded-full filter blur-3xl opacity-70 animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-200/40 rounded-full filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-100/30 rounded-full filter blur-2xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container max-w-6xl mx-auto px-4 py-12 md:py-0 transition-opacity duration-1000 opacity-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-left md:text-left order-2 md:order-1 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary/90 border border-primary/10 inline-flex items-center">
                <Award className="w-4 h-4 mr-1" />
                <span>MSc. Information Systems</span>
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              <span className="block">Roberto Rocha</span>
              <span className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mt-2 block">
                Ph.D. Candidate
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground">
              Pesquisador experiente e acadêmico com formação em Administração e Sistemas de Informação, atualmente doutorando em Administração de Empresas pela FGV EAESP. Possuo mais de 15 anos de experiência em pesquisa, gestão de projetos e ensino superior, com sólida trajetória em avaliação de impacto, disseminação de pesquisa e colaboração com instituições nacionais e internacionais.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="group px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-medium shadow-lg hover:shadow-primary/20 hover:translate-y-[-2px] transition-all"
              >
                Contato
              </a>
              <a
                href="#about"
                className="group px-8 py-3 rounded-lg bg-white/90 border border-gray-200 shadow-sm text-secondary-foreground font-medium hover:shadow-lg hover:translate-y-[-2px] transition-all"
              >
                Saiba Mais
              </a>
            </div>

            <div className="flex gap-6 pt-2">
              {[
                { icon: <GraduationCap className="w-8 h-8 mb-2" />, label: "Educação", value: "Ph.D." },
                { icon: <BookOpen className="w-8 h-8 mb-2" />, label: "Publicações", value: "21+" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="glass-card p-4 rounded-lg text-center flex-1 animate-fade-in"
                  style={{ animationDelay: `${0.7 + i * 0.2}s` }}
                >
                  <div className="text-primary/80">{stat.icon}</div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative overflow-hidden rounded-xl shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10 rounded-xl"></div>
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <img
                  src="/lovable-uploads/bb9bc312-43a1-4129-aea3-35dfa5c7e68f.png"
                  alt="Gráfico de desempenho acadêmico"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <a href="#about" className="flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition-colors">
            <span className="mb-2">Role para baixo</span>
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
