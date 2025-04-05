
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus('success');
      console.log('Form submitted:', formState);

      // Reset form after success
      setTimeout(() => {
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <h2 className="section-title">Contato</h2>
        <p className="section-subtitle">
          Entre em contato para colaborações, consultas ou outras informações.
        </p>

        <div className="grid md:grid-cols-5 gap-8 mt-12">
          <div className="md:col-span-2 space-y-6">
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#4E57CA]/10 flex items-center justify-center mr-3 mt-1">
                    <svg className="w-5 h-5 text-[#4E57CA]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#4A4B65]">Email</p>
                    <a href="mailto:roberto.rocha@fgv.edu.br" className="text-sm text-[#4E57CA] hover:text-[#6E74D2] transition-colors">roberto.rocha@fgv.edu.br</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#4E57CA]/10 flex items-center justify-center mr-3 mt-1">
                    <svg className="w-5 h-5 text-[#4E57CA]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#4A4B65]">Site</p>
                    <a href="https://roberto-rocha.tech" target="_blank" rel="noopener noreferrer" className="text-sm text-[#4E57CA] hover:text-[#6E74D2] transition-colors">https://roberto-rocha.tech</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#4E57CA]/10 flex items-center justify-center mr-3 mt-1">
                    <svg className="w-5 h-5 text-[#4E57CA]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#4A4B65]">Localização</p>
                    <p className="text-sm text-[#4A4B65]">FGV EAESP<br />Av. 9 de Julho, 2029, Bela Vista, São Paulo - SP | CEP 01313-902</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="text-sm font-medium text-[#4A4B65] mb-3">Redes Sociais</h4>
                  <div className="flex space-x-3">
                    {/* Academic social profiles */}
                    <a href="https://scholar.google.com/citations?user=7aSnMkQAAAAJ&hl=en" className="w-10 h-10 rounded-full bg-[#4E57CA]/10 flex items-center justify-center transition-colors hover:bg-[#4E57CA]/20" aria-label="Google Scholar">
                      <svg className="w-5 h-5 text-[#4E57CA]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5 12 0Z" />
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/rsrocha/" className="w-10 h-10 rounded-full bg-[#4E57CA]/10 flex items-center justify-center transition-colors hover:bg-[#4E57CA]/20" aria-label="LinkedIn">
                      <svg className="w-5 h-5 text-[#4E57CA]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a href="https://github.com/roberto-fgv" className="w-10 h-10 rounded-full bg-[#4E57CA]/10 flex items-center justify-center transition-colors hover:bg-[#4E57CA]/20" aria-label="GitHub">
                      <svg className="w-5 h-5 text-[#4E57CA]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.285 3.438 9.78 8.207 11.385 0.6 0.113 0.82-0.26 0.82-0.577 0-0.285-0.01-1.04-0.015-2.04-3.34 0.726-4.042-1.61-4.042-1.61-0.546-1.385-1.332-1.754-1.332-1.754-1.09-0.746 0.083-0.73 0.083-0.73 1.205 0.085 1.84 1.238 1.84 1.238 1.07 1.834 2.805 1.305 3.49 0.997 0.107-0.775 0.42-1.305 0.76-1.605-2.665-0.305-5.467-1.332-5.467-5.93 0-1.31 0.468-2.382 1.235-3.22-0.135-0.303-0.54-1.523 0.115-3.173 0 0 1.005-0.322 3.3 1.23 0.955-0.266 1.98-0.4 3-0.405 1.02 0.005 2.045 0.14 3 0.405 2.295-1.552 3.3-1.23 3.3-1.23 0.655 1.65 0.25 2.87 0.115 3.173 0.77 0.838 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92 0.43 0.37 0.81 1.103 0.81 2.225 0 1.605-0.015 2.895-0.015 3.285 0 0.32 0.22 0.695 0.825 0.575C20.565 22.073 24 17.58 24 12.297c0-6.627-5.373-12-12-12z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className={cn(
                "glass-card rounded-xl p-6",
                formStatus === 'success' && "ring-2 ring-green-500/30",
                formStatus === 'error' && "ring-2 ring-red-500/30"
              )}
            >
              {formStatus === 'success' && (
                <div className="bg-green-50 border border-green-100 text-green-800 rounded-lg p-4 mb-6 animate-fade-in">
                  <div className="flex">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p>Sua mensagem foi enviada com sucesso!</p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#4A4B65] mb-2">Nome</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#4E57CA]/30 focus:border-[#4E57CA]/30"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#4A4B65] mb-2">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#4E57CA]/30 focus:border-[#4E57CA]/30"
                    placeholder="Seu email"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-[#4A4B65] mb-2">Assunto</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#4E57CA]/30 focus:border-[#4E57CA]/30"
                    placeholder="Assunto da mensagem"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-[#4A4B65] mb-2">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#4E57CA]/30 focus:border-[#4E57CA]/30"
                    placeholder="Sua mensagem"
                    required
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full py-3 px-4 bg-[#4E57CA] text-white font-medium rounded-lg transition-all",
                      isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-[#4E57CA]/90"
                    )}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
