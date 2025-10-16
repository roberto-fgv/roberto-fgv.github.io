import { Mail, ArrowRight, GraduationCap, Briefcase, Award, BookOpen } from "lucide-react";

// LinkedIn Icon Component
const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// GitHub Icon Component
const GithubIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

// ORCID Icon Component - Simple and Clean
const OrcidIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
  >
    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.022 0 2.578-2.016 5.019-5.325 5.019h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"/>
  </svg>
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-light tracking-wider">ROBERTO ROCHA</a>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#experience" className="text-sm text-gray-400 hover:text-white transition-colors">Experience</a>
            <a href="#education" className="text-sm text-gray-400 hover:text-white transition-colors">Education</a>
            <a 
              href="https://scholar.google.com/citations?user=7aSnMkQAAAAJ&hl=en" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Publications
            </a>
            <a href="mailto:rsantos.rocha@gmail.com" className="text-sm px-4 py-2 border border-white hover:bg-white hover:text-black transition-all">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/hero-background.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          {/* Very Light Overlay - Natural Colors */}
          <div className="absolute inset-0 bg-black/25"></div>
        </div>
        
        {/* Minimal Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-light mb-8 leading-tight tracking-tight">
            Advancing Knowledge
            <br />
            <span className="text-gray-500">Through Research</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
            Researcher, educator, and information systems specialist dedicated to innovation in higher education and agile methodologies.
          </p>
          <div className="flex gap-6 justify-center items-center flex-wrap">
            <a 
              href="https://www.linkedin.com/in/rsrocha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm border border-white px-6 py-3 hover:bg-white hover:text-black transition-all"
            >
              <LinkedinIcon size={18} />
              LinkedIn
            </a>
            <a 
              href="mailto:rsantos.rocha@gmail.com"
              className="flex items-center gap-2 text-sm bg-white text-black px-6 py-3 hover:bg-gray-200 transition-all"
            >
              <Mail size={18} />
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm text-gray-500 mb-6 tracking-widest uppercase">Who I Am</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-4xl font-light mb-6 leading-tight">
                A Visionary in Information Systems & Education
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                I am dedicated to advancing knowledge through qualitative and quantitative research, with extensive experience in information systems, agile methodologies, and higher education.
              </p>
              <p className="text-gray-400 leading-relaxed">
                As a Marie Curie Fellow with international research experience, I bring a unique perspective to managing accreditation processes and leveraging programming skills for data analysis.
              </p>
            </div>
            <div className="space-y-8">
              <div className="border-l-2 border-gray-700 pl-6">
                <h4 className="text-sm text-gray-500 mb-2 uppercase tracking-wider">Current Focus</h4>
                <p className="text-xl font-light">FGV EAESP</p>
                <p className="text-gray-400">Doctorate in Business Administration - Information Systems</p>
              </div>
              <div className="border-l-2 border-gray-700 pl-6">
                <h4 className="text-sm text-gray-500 mb-2 uppercase tracking-wider">Specialization</h4>
                <p className="text-gray-400">Agile Methodologies · Research · Programming · Accreditation</p>
              </div>
              <div className="border-l-2 border-gray-700 pl-6">
                <h4 className="text-sm text-gray-500 mb-2 uppercase tracking-wider">Skills</h4>
                <p className="text-gray-400">R · Python · JavaScript · NVivo · Git</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-32 px-6 border-t border-gray-800 bg-gray-900/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm text-gray-500 mb-12 tracking-widest uppercase">Featured Project</h2>
          <a href="/" className="block group">
            <div className="border border-gray-800 p-12 hover:border-gray-600 transition-all">
              <div className="flex items-start justify-between mb-8">
                <BookOpen size={48} className="text-gray-500" />
                <ArrowRight size={24} className="text-gray-500 group-hover:translate-x-2 transition-transform" />
              </div>
              <h3 className="text-4xl font-light mb-4">Experience Accelerator Notebook</h3>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed max-w-2xl">
                An AI-powered knowledge repository exploring cases and insights from Experience Accelerator I, II, and III. Ask questions and receive answers grounded in academic materials with direct source references.
              </p>
              <div className="flex gap-4 text-sm text-gray-500">
                <span>AI Research</span>
                <span>·</span>
                <span>NotebookLM</span>
                <span>·</span>
                <span>FGV EAESP</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm text-gray-500 mb-12 tracking-widest uppercase">Experience</h2>
          <div className="space-y-12">
            <div className="border-l-2 border-gray-700 pl-8 hover:border-white transition-colors">
              <p className="text-sm text-gray-500 mb-2">2022 — Present</p>
              <h3 className="text-2xl font-light mb-2">Teaching Assistant</h3>
              <p className="text-gray-500 mb-4">FGV EAESP</p>
              <p className="text-gray-400">Support for Executive MBA and MPGI programs. Courses include Customer Success Management, CEMS Business Project, and Research Methodology.</p>
            </div>
            
            <div className="border-l-2 border-gray-700 pl-8 hover:border-white transition-colors">
              <p className="text-sm text-gray-500 mb-2">2021 — 2022</p>
              <h3 className="text-2xl font-light mb-2">Tutor Professor</h3>
              <p className="text-gray-500 mb-4">UFBA</p>
              <p className="text-gray-400">Student support in distance learning, grading, and content production.</p>
            </div>
            
            <div className="border-l-2 border-gray-700 pl-8 hover:border-white transition-colors">
              <p className="text-sm text-gray-500 mb-2">2016</p>
              <h3 className="text-2xl font-light mb-2">Marie Curie Fellow</h3>
              <p className="text-gray-500 mb-4">European Research Center</p>
              <p className="text-gray-400">Participated in the NITIM ESR project under MSCA, focusing on Information Systems research.</p>
            </div>
            
            <div className="border-l-2 border-gray-700 pl-8 hover:border-white transition-colors">
              <p className="text-sm text-gray-500 mb-2">2006 — 2022</p>
              <h3 className="text-2xl font-light mb-2">Administrative Technician</h3>
              <p className="text-gray-500 mb-4">UFBA</p>
              <p className="text-gray-400">Administrative and academic support, report preparation, public service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm text-gray-500 mb-12 tracking-widest uppercase">Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-800 p-8 hover:border-gray-600 transition-all">
              <GraduationCap size={32} className="text-gray-500 mb-6" />
              <h3 className="text-2xl font-light mb-2">Doctorate</h3>
              <p className="text-gray-400 mb-2">Business Administration (Information Systems)</p>
              <p className="text-sm text-gray-500">FGV EAESP · 2022 - 2026</p>
            </div>
            
            <div className="border border-gray-800 p-8 hover:border-gray-600 transition-all">
              <GraduationCap size={32} className="text-gray-500 mb-6" />
              <h3 className="text-2xl font-light mb-2">Master's</h3>
              <p className="text-gray-400 mb-2">Information Systems</p>
              <p className="text-sm text-gray-500">USP · 2010 - 2012</p>
            </div>
            
            <div className="border border-gray-800 p-8 hover:border-gray-600 transition-all">
              <GraduationCap size={32} className="text-gray-500 mb-6" />
              <h3 className="text-2xl font-light mb-2">Specialization</h3>
              <p className="text-gray-400 mb-2">IS Administration</p>
              <p className="text-sm text-gray-500">UFLA · 2007 - 2009</p>
            </div>
            
            <div className="border border-gray-800 p-8 hover:border-gray-600 transition-all">
              <GraduationCap size={32} className="text-gray-500 mb-6" />
              <h3 className="text-2xl font-light mb-2">Bachelor's</h3>
              <p className="text-gray-400 mb-2">Business Administration</p>
              <p className="text-sm text-gray-500">FTC · 2002 - 2006</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-32 px-6 border-t border-gray-800 bg-gray-900/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm text-gray-500 mb-12 tracking-widest uppercase">Awards & Certifications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <Award size={32} className="text-gray-500 mx-auto mb-4" />
              <h3 className="text-lg font-light mb-2">Marie Curie Fellowship</h3>
              <p className="text-sm text-gray-500">MSCA Actions</p>
            </div>
            <div className="text-center p-6">
              <Award size={32} className="text-gray-500 mx-auto mb-4" />
              <h3 className="text-lg font-light mb-2">Azure Research Grant</h3>
              <p className="text-sm text-gray-500">Microsoft</p>
            </div>
            <div className="text-center p-6">
              <Award size={32} className="text-gray-500 mx-auto mb-4" />
              <h3 className="text-lg font-light mb-2">NCA Certification</h3>
              <p className="text-sm text-gray-500">Research Methods</p>
            </div>
            <div className="text-center p-6">
              <Award size={32} className="text-gray-500 mx-auto mb-4" />
              <h3 className="text-lg font-light mb-2">Case Writing</h3>
              <p className="text-sm text-gray-500">Management</p>
            </div>
            <div className="text-center p-6">
              <Award size={32} className="text-gray-500 mx-auto mb-4" />
              <h3 className="text-lg font-light mb-2">Psychometrics</h3>
              <p className="text-sm text-gray-500">Data Analysis</p>
            </div>
            <div className="text-center p-6">
              <Award size={32} className="text-gray-500 mx-auto mb-4" />
              <h3 className="text-lg font-light mb-2">Git & GitHub</h3>
              <p className="text-sm text-gray-500">Version Control</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500">© 2025 Roberto dos Santos Rocha</p>
          <div className="flex gap-6 items-center">
            <a 
              href="https://www.linkedin.com/in/rsrocha" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
              title="LinkedIn"
            >
              <LinkedinIcon size={22} />
            </a>
            <a 
              href="https://github.com/roberto-fgv" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-violet-400 transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(167,139,250,0.6)]"
              title="GitHub"
            >
              <GithubIcon size={22} />
            </a>
            <a 
              href="https://orcid.org/0000-0003-2013-2134" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-[#A6CE39] transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(166,206,57,0.6)]"
              title="ORCID"
            >
              <OrcidIcon size={22} />
            </a>
            <a 
              href="mailto:rsantos.rocha@gmail.com" 
              className="text-gray-500 hover:text-pink-400 transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(244,114,182,0.6)]"
              title="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
