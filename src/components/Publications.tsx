
import React, { useState } from 'react';

type Publication = {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  abstract?: string;
  category: 'article' | 'book' | 'conference';
};

const Publications = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [expandedPublication, setExpandedPublication] = useState<number | null>(null);

  const publications: Publication[] = [
    {
      id: 1,
      title: "Potential of Collaborative Mapping for Disaster Relief: A Case Study of OpenStreetMap in the Nepal Earthquake 2015",
      authors: "TH Poiani, R dos Santos Rocha, LC Degrossi, JP de Albuquerque",
      journal: "Proceedings of the 49th Hawaii International Conference on System Sciences",
      year: 2016,
      category: 'conference'
    },
    {
      id: 2,
      title: "The use of software product lines for business process management: A systematic literature review",
      authors: "R dos Santos Rocha, M Fantinato",
      journal: "Information and Software Technology, 55(8), 1355-1373",
      year: 2013,
      category: 'article'
    },
    {
      id: 3,
      title: "A taxonomy of quality assessment methods for volunteered and crowdsourced geographic information",
      authors: "LC Degrossi, J Porto de Albuquerque, R Santos Rocha, A Zipf",
      journal: "Transactions in GIS, 22(2), 542-560",
      year: 2018,
      category: 'article'
    },
    {
      id: 4,
      title: "A survey on reuse in the business process management domain",
      authors: "M Fantinato, MBF Toledo, LH Thom, IMS Gimenes, RS Rocha",
      journal: "International Journal of Business Process Integration and Management, 6(1)",
      year: 2012,
      category: 'article'
    },
    {
      id: 5,
      title: "Dynamic product line for Business Process Management",
      authors: "RS Rocha, M Fantinato, LH Thom, MM Eler",
      journal: "Business Process Management Journal, 21(6), 1224-1256",
      year: 2015,
      category: 'article'
    },
    {
      id: 6,
      title: "Improving the Involvement of Digital Volunteers in Disaster Management",
      authors: "R dos Santos Rocha, A Widera, RP van den Berg, JP de Albuquerque",
      journal: "First IFIP Conference on Information Technology in Disaster Risk Reduction",
      year: 2016,
      category: 'book'
    }
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
        
        {/* Updated filter menu with colors from the image */}
        <div className="flex justify-center mt-8 mb-12">
          <div className="inline-flex p-1 rounded-lg bg-[#f0f0f8]">
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
                    ? 'bg-[#4E57CA] text-white shadow-sm' 
                    : 'bg-transparent text-[#4A4B65] hover:bg-[#4E57CA]/10 hover:text-[#4E57CA]'
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
                    {/* Updated badge styles to match color scheme */}
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#4E57CA]/10 text-[#4E57CA] mb-3">
                      {publication.year} • {publication.category === 'article' ? 'Artigo' : publication.category === 'book' ? 'Livro' : 'Conferência'}
                    </span>
                    <h3 className="text-lg font-bold mb-2">{publication.title}</h3>
                    <p className="text-sm text-[#4A4B65]">
                      {publication.authors}
                    </p>
                    <p className="text-sm text-[#4A4B65] mt-1">
                      {publication.journal}
                    </p>
                  </div>
                  <div className="text-lg text-[#4E57CA]">
                    {expandedPublication === publication.id ? '−' : '+'}
                  </div>
                </div>
                
                {expandedPublication === publication.id && (
                  <div className="mt-4 pt-4 border-t border-[#4E57CA]/10 animate-fade-in">
                    {publication.abstract && (
                      <>
                        <h4 className="text-sm font-semibold mb-2">Resumo</h4>
                        <p className="text-sm text-[#4A4B65] mb-4">
                          {publication.abstract}
                        </p>
                      </>
                    )}
                    {publication.doi && (
                      <div className="flex items-center">
                        <span className="text-xs font-medium">DOI:</span>
                        <a 
                          href={`https://doi.org/${publication.doi}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs ml-2 text-[#4E57CA] hover:text-[#6E77EA] hover:underline"
                        >
                          {publication.doi}
                        </a>
                      </div>
                    )}
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
