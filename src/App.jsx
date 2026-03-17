import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  useEffect(() => {
    /* ── 1. Fade-in-up on scroll ── */
    const fadeEls = document.querySelectorAll('.fade-in-up');
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    fadeEls.forEach((el) => fadeObserver.observe(el));

    /* ── 2. Active nav link on scroll ── */
    const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];
    const navLinks = document.querySelectorAll('nav ul li a');

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              const href = link.getAttribute('href');
              if (href === `#${id}`) {
                link.classList.add('nav-active');
              } else {
                link.classList.remove('nav-active');
              }
            });
          }
        });
      },
      { threshold: 0.4, rootMargin: '-10% 0px -50% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    /* ── 3. Skill progress bars animate on scroll ── */
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      const skillObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const fills = entry.target.querySelectorAll('.skill-progress-bar-fill');
              fills.forEach((fill) => {
                const target = fill.getAttribute('data-width') || '80%';
                setTimeout(() => { fill.style.width = target; }, 100);
              });
              skillObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 }
      );
      skillObserver.observe(skillsSection);
    }

    return () => {
      fadeObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#ff2e88]/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

