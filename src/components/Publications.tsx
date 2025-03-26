
import React, { useState } from 'react';

type Publication = {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi: string;
  abstract: string;
  category: 'article' | 'book' | 'conference';
};

const Publications = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [expandedPublication, setExpandedPublication] = useState<number | null>(null);

  // Example publications data
  const publications: Publication[] = [
    {
      id: 1,
      title: "Título da Publicação Científica 1",
      authors: "Seu Nome, Coautor A, Coautor B",
      journal: "Journal of Important Research, 12(3), 45-67",
      year: 2022,
      doi: "10.1234/abcd.5678",
      abstract: "Resumo da publicação, destacando os principais pontos da pesquisa, metodologia utilizada e resultados alcançados.",
      category: 'article'
    },
    {
      id: 2,
      title: "Proceedings da Conferência Internacional sobre Tema Relevante",
      authors: "Seu Nome, Coautor C",
      journal: "Proceedings of International Conference, pp. 123-135",
      year: 2021,
      doi: "10.5678/efgh.9012",
      abstract: "Resumo da apresentação realizada na conferência, incluindo os principais pontos discutidos e conclusões.",
      category: 'conference'
    },
    {
      id: 3,
      title: "Capítulo do Livro sobre Tema Específico",
      authors: "Seu Nome, Coautor D, Coautor E",
      journal: "Título do Livro, Editora, pp. 78-95",
      year: 2020,
      doi: "10.9012/ijkl.3456",
      abstract: "Resumo do capítulo de livro, apresentando o conteúdo abordado e suas contribuições para a área.",
      category: 'book'
    },
    {
      id: 4,
      title: "Título da Publicação Científica 2",
      authors: "Seu Nome, Coautor F",
      journal: "Another Important Journal, 8(2), 112-128",
      year: 2019,
      doi: "10.3456/mnop.7890",
      abstract: "Resumo detalhado da publicação, explicando a metodologia, resultados e implicações para a área de estudo.",
      category: 'article'
    },
  ];

  const filteredPublications = activeFilter === 'all' 
    ? publications 
    : publications.filter(pub => pub.category === activeFilter);

  const togglePublication = (id: number) => {
    setExpandedPublication(expandedPublication === id ? null : id);
  };

  return (
    <section id="publications" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <h2 className="section-title">Publicações</h2>
        <p className="section-subtitle">
          Artigos científicos, capítulos de livros e trabalhos apresentados em conferências.
        </p>
        
        <div className="flex justify-center mt-8 mb-12">
          <div className="inline-flex p-1 rounded-lg bg-secondary">
            {[
              { value: 'all', label: 'Todos' },
              { value: 'article', label: 'Artigos' },
              { value: 'book', label: 'Livros' },
              { value: 'conference', label: 'Conferências' },
            ].map((filter) => (
              <button
                key={filter.value}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  activeFilter === filter.value 
                    ? 'bg-white shadow-sm text-primary' 
                    : 'bg-transparent text-muted-foreground hover:text-primary/80'
                }`}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="space-y-4">
          {filteredPublications.map((publication) => (
            <div
              key={publication.id}
              className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => togglePublication(publication.id)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/5 text-primary/90 mb-3">
                      {publication.year} • {publication.category === 'article' ? 'Artigo' : publication.category === 'book' ? 'Livro' : 'Conferência'}
                    </span>
                    <h3 className="text-lg font-bold mb-2">{publication.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {publication.authors}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {publication.journal}
                    </p>
                  </div>
                  <div className="text-lg">
                    {expandedPublication === publication.id ? '−' : '+'}
                  </div>
                </div>
                
                {expandedPublication === publication.id && (
                  <div className="mt-4 pt-4 border-t border-primary/10 animate-fade-in">
                    <h4 className="text-sm font-semibold mb-2">Resumo</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {publication.abstract}
                    </p>
                    <div className="flex items-center">
                      <span className="text-xs font-medium">DOI:</span>
                      <a 
                        href={`https://doi.org/${publication.doi}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs ml-2 text-blue-600 hover:underline"
                      >
                        {publication.doi}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
