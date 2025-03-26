
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Publications from '@/components/Publications';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // Initialize animations and scroll behavior
  useEffect(() => {
    // Animate hero section on page load
    const heroSection = document.querySelector('#hero');
    if (heroSection) {
      heroSection.classList.add('opacity-100');
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Publications />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
