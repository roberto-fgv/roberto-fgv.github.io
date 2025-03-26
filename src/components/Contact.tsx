
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
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mr-3 mt-1">
                    <svg className="w-5 h-5 text-primary/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <a href="mailto:seuemail@exemplo.com" className="text-sm text-primary hover:underline">seuemail@exemplo.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mr-3 mt-1">
                    <svg className="w-5 h-5 text-primary/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Site</p>
                    <a href="https://seusite.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">seusite.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mr-3 mt-1">
                    <svg className="w-5 h-5 text-primary/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Localização</p>
                    <p className="text-sm text-muted-foreground">Departamento, Universidade<br />Cidade, Estado, País</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h4 className="text-sm font-medium mb-3">Redes Sociais</h4>
                  <div className="flex space-x-3">
                    {/* Academic social profiles */}
                    <a href="#" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center transition-colors hover:bg-primary/10" aria-label="Google Scholar">
                      <svg className="w-5 h-5 text-primary/80" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5 12 0Z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center transition-colors hover:bg-primary/10" aria-label="ResearchGate">
                      <svg className="w-5 h-5 text-primary/80" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .078.53h0a3.334 3.334 0 0 0 .112.436c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.142-.142h-3.146v.858h2.08v.142c0 .094 0 .297-.021.568a2.22 2.22 0 0 1-.092.605c-.052.147-.152.318-.32.488-.168.17-.376.254-.663.254a1.2 1.2 0 0 1-.651-.182 1.306 1.306 0 0 1-.466-.55 2.555 2.555 0 0 1-.21-.786 8.417 8.417 0 0 1-.064-.92c0-.932.074-1.653.224-2.167.149-.513.446-.769.89-.769.783 0 1.183.538 1.183 1.614v.263h.933v-.284c0-.772-.215-1.374-.639-1.799-.424-.425-1.01-.639-1.758-.639Zm-9.634.076h-6.07v12.069h.933v-4.867h5.137c.59 0 1.052-.224 1.654-.672.603-.448 1.012-1.04 1.229-1.799.097-.19.173-.395.25-.605.077-.21.133-.435.17-.672.058-.41.09-.776.101-1.358.011-.582-.01-.947-.052-1.358-.021-.248-.065-.489-.122-.733a3.775 3.775 0 0 0-.192-.67 2.935 2.935 0 0 0-.319-.633A2.28 2.28 0 0 0 11.95.384a3.278 3.278 0 0 0-.43-.203 2.383 2.383 0 0 0-.466-.105H9.952Zm15.752 0v12.069h.792V.076h-.792Zm-9.286.913h.85c.354 0 .657.095.859.284.201.19.36.479.484.87.076.26.132.531.162.814.03.282.047.693.047 1.232 0 .538-.024.98-.071 1.327-.047.346-.122.628-.224.848-.181.414-.45.621-.901.621H16.418V.989Zm-12.133 0h4.878c.327 0 .605.065.832.193.168.103.399.32.624.644.16.233.295.559.417.995.123.435.184.929.184 1.482 0 .576-.044 1.055-.122 1.437-.078.381-.193.712-.348.995-.118.21-.282.367-.533.527-.251.16-.553.25-.89.25h-5.042V.988Zm2.742 7.424v3.605h1.015c.315 0 .535-.271.651-.773.043-.2.075-.558.095-.858.02-.3.035-.717.035-1.219 0-.2-.008-.376-.024-.579a3.961 3.961 0 0 0-.071-.518 1.162 1.162 0 0 0-.142-.407c-.072-.116-.174-.188-.343-.188H7.027v-.039h-.142l-.142.039h-.142l.142-.039v.039h.284v-.077l-.142.038h.142v.039h-.142l-.142.038h.426v-.038h-.142v-.039h.142v.039h.142v-.039h-.142v-.038h-.142v.038h-.142v-.038h-.142v.077h.426v-.039H6.87Z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center transition-colors hover:bg-primary/10" aria-label="LinkedIn">
                      <svg className="w-5 h-5 text-primary/80" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
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
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Nome</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30"
                    placeholder="Seu email"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Assunto</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30"
                    placeholder="Assunto da mensagem"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30"
                    placeholder="Sua mensagem"
                    required
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full py-3 px-4 bg-primary text-primary-foreground font-medium rounded-lg transition-all",
                      isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-primary/90"
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
