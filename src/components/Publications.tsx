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
      title: "A taxonomy of quality assessment methods for volunteered and crowdsourced geographic information",
      authors: "LC Degrossi, J Porto de Albuquerque, R Santos Rocha, A Zipf",
      journal: "Transactions in GIS, 22(2), 542-560",
      year: 2018,
      doi: "10.1111/tgis.12329",
      abstract: "The growing use of crowdsourced geographic information (CGI) has prompted the employment of several methods for assessing information quality, which are aimed at addressing concerns on the lack of quality of the information provided by non-experts. In this work, we propose a taxonomy of methods for assessing the quality of CGI when no reference data are available, which is likely to be the most common situation in practice. Our taxonomy includes 11 quality assessment methods that were identified by means of a systematic literature review. These methods are described in detail, including their main characteristics and limitations. This taxonomy not only provides a systematic and comprehensive account of the existing set of methods for CGI quality assessment, but also enables researchers working on the quality of CGI in various sources (e.g., social media, crowd sensing, collaborative mapping) to learn from each other, thus opening up avenues for future work that combines and extends existing methods into new application areas and domains.",
      category: 'article'
    },
    {
      id: 2,
      title: "Improving the Involvement of Digital Volunteers in Disaster Management",
      authors: "R dos Santos Rocha, A Widera, RP van den Berg, JP de Albuquerque",
      journal: "First IFIP Conference on Information Technology in Disaster Risk Reduction",
      year: 2017,
      doi: "10.1007/978-3-319-68486-4_17",
      abstract: "Volunteered geographic information (VGI) has been seen as useful information in times of disasters. Several authors have shown that VGI is useful for coping with preparedness and response phases of disaster management. However, because it is still a young technology, the use of VGI remains uncertain, due to its lack of strong reliability and validity. It is our assumption that to improve reliability and validity the promotion of citizen engagement (CE) is needed. CE is not new topic, but in the digital humanitarian context, it involves important factors that are not yet considered by disaster managers, such as communication processes, motivation of volunteers, different media for production of information, etc. To fill this gap, we identified a set of preliminary factors which should be considered to promote the involvement of volunteers in disaster management. These factors were derived from critical review of CE literature and from an analysis of lessons learned from an experiment on interaction with citizens carried out in context of the EU-project \"DRIVER – Driving Innovation in Crisis Management for European Resilience\".",
      category: 'book'
    },
    {
      id: 3,
      title: "Potential of Collaborative Mapping for Disaster Relief: A Case Study of OpenStreetMap in the Nepal Earthquake 2015",
      authors: "TH Poiani, R dos Santos Rocha, LC Degrossi, JP de Albuquerque",
      journal: "Proceedings of the 49th Hawaii International Conference on System Sciences",
      year: 2016,
      doi: "10.1109/HICSS.2016.31",
      abstract: "In the aftermath of a disaster, there is an urgent need for base maps to support relief efforts, especially in developing countries. In response to this, the OpenStreetMap project has been leveraged to produce maps of disaster-affected areas in a collaborative way. However, there has been little investigation aimed at explaining the collaborative mapping activity itself. This study presents an exploratory case study on how the collaborative mapping activities that followed the Nepal Earthquake in 2015 were coordinated and structured, i.e. how volunteers were organized, and what were the main outcomes of their activity in the context of disaster management. The results show that a large number of remote contributors spread across the world carried out concerted efforts to support the relief work. Moreover, coordination mechanisms were used by local actors to share their knowledge with remote mappers, and, hence, to improve the accuracy of the map.",
      category: 'conference'
    },
    {
      id: 4,
      title: "Dynamic product line for Business Process Management",
      authors: "RS Rocha, M Fantinato, LH Thom, MM Eler",
      journal: "Business Process Management Journal, 21(6), 1224-1256",
      year: 2015,
      doi: "10.1108/BPMJ-09-2014-0091",
      abstract: "The purpose of this paper is to present the proposal of a Product Line (PL)-based approach for Business Process Management (BPM) projects that cover the entire BPM lifecycle and proposes integrating it with dynamic techniques still not used together. The authors carried out this work using the design science research methodology. The authors assessed the proposed approach using a classification procedure created through a series of specific attributes, which enables a comparison of the proposed integrated approach with related works selected from a systematic literature review. The comparative assessment has shown that the proposed approach presents the most comprehensive solution than any other similar one suggested for the same purpose, mainly in terms of the coverage of the entire BPM lifecycle and dynamic techniques. Due to the high-level conceptual nature of the proposed approach, the authors could not evaluate it also in terms of some controlled experiment or a case study. The proposed approach aims at improving the management of business processes in organizations in a systematic way using concepts and techniques that exist in other areas, but not widely used together yet, such as BPM, service-oriented computing, and Software PL.",
      category: 'article'
    },
    {
      id: 5,
      title: "The use of software product lines for business process management: A systematic literature review",
      authors: "R dos Santos Rocha, M Fantinato",
      journal: "Information and Software Technology, 55(8), 1355-1373",
      year: 2013,
      doi: "10.1016/j.infsof.2013.02.007",
      abstract: "Context: Business Process Management (BPM) is a potential domain in which Software Product Line (PL) can be successfully applied. Including the support of Service-oriented Architecture (SOA), BPM and PL may help companies achieve strategic alignment between business and IT. Objective: Presenting the results of a study undertaken to seek and assess PL approaches for BPM through a Systematic Literature Review (SLR). Moreover, identifying the existence of dynamic PL approaches for BPM. Method: A SLR was conducted with four research questions formulated to evaluate PL approaches for BPM. Results: 63 papers were selected as primary studies according to the criteria established. From these primary studies, only 15 papers address the specific dynamic aspects in the context evaluated. Moreover, it was found that PLs only partially address the BPM lifecycle since the last business process phase is not a current concern on the found approaches. Conclusions: The found PL approaches for BPM only cover partially the BPM lifecycle, not taking into account the last phase which restarts the lifecycle. Moreover, no wide dynamic PL proposal was found for BPM, but only the treatment of specific dynamic aspects. The results indicate that PL approaches for BPM are still at an early stage and gaining maturity.",
      category: 'article'
    },
    {
      id: 6,
      title: "A survey on reuse in the business process management domain",
      authors: "M Fantinato, MBF Toledo, LH Thom, IMS Gimenes, RS Rocha",
      journal: "International Journal of Business Process Integration and Management, 6(1)",
      year: 2012,
      doi: "10.1504/IJBPIM.2012.047913",
      abstract: "Business process management (BPM) is an important technological support to improve organisation competitiveness. BPM can benefit from reuse approaches and techniques at several stages of the business process life cycle in order to increase dynamism, flexibility and competitiveness. Existing reuse techniques from areas such as software engineering can be extended to this emerging domain. This paper presents the results of a literature review of reuse in the BPM domain. It aims to provide an overview and an overall discussion of most relevant research projects that have been developed applying reuse in BPM.",
      category: 'article'
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
                    ) }
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
