import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

// Tech array for floating background
const techIcons = [
  { name: 'HTML',    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS',     src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JS',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React',   src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'Python',  src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Git',     src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub',  src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Java',    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' }
];

const Hero = () => {
  const headingRef   = useRef(null);
  const subRef       = useRef(null);
  const buttonsRef   = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(headingRef.current,  { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1,   ease: 'power3.out', delay: 0.2 })
      .fromTo(subRef.current,      { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .fromTo(buttonsRef.current.children, { y: 20, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.15, ease: 'back.out(1.7)' }, '-=0.4');
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      {/* CSS Floating Tech Background */}
      <div className="hero-float-bg">
        {techIcons.map((tech, i) => {
          // Semi-random initial positions and animation delays for pure CSS
          const style = {
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          };
          return (
            <img 
              key={i} 
              src={tech.src} 
              alt={tech.name} 
              className={`tech-float-icon icon-anim-${i % 3}`} 
              style={style} 
            />
          );
        })}
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-badge">👋 MERN Stack Developer</div>

        <h1 ref={headingRef} className="hero-title">
          Hi, I am <span className="hero-title-accent">Kripananda</span>
        </h1>

        <p ref={subRef} className="hero-subtitle">
          Full Stack Developer passionate about building modern web applications and learning advanced technologies like <span className="hero-highlight">AI</span> and <span className="hero-highlight">Machine Learning</span>.
        </p>

        <div ref={buttonsRef} className="hero-buttons">
          <a href="#projects" onClick={(e) => scrollTo(e, '#projects')} className="hero-btn-primary">
            View Projects
          </a>
          <a href="#contact"  onClick={(e) => scrollTo(e, '#contact')}  className="hero-btn-secondary">
            Contact Me
          </a>
          <a href="/assets/Kripananda_Roy_CV.pdf" download className="hero-btn-cv">
            CV
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about" onClick={(e) => scrollTo(e, '#about')} className="hero-scroll-btn" aria-label="Scroll to About">
        <div className="hero-scroll-mouse">
          <div className="hero-scroll-dot" />
        </div>
      </a>
    </section>
  );
};

export default Hero;
