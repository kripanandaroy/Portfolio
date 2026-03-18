import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with user authentication, product management, and Stripe payment integration.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
    github: 'https://github.com/kripanandaroy',
    live: '#',
  },
  {
    title: 'AI Image Generator',
    description: 'A web application that leverages OpenAI API to generate unique images based on user text prompts.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
    tech: ['React', 'OpenAI API', 'Tailwind CSS', 'Express'],
    github: 'https://github.com/kripanandaroy',
    live: '#',
  },
  {
    title: 'Netflix Clone',
    description: 'A Netflix UI clone built with React.js featuring responsive design, movie browsing, and a modern streaming interface.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
    tech: ['React', 'JavaScript', 'CSS', 'Vite'],
    github: 'https://github.com/kripanandaroy/Netflix-Clone',
    live: 'https://ketflix-clone-beta-jet-86.vercel.app/',
  },
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (window.innerWidth <= 768) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotX = ((y - rect.height / 2) / rect.height) * -8;
    const rotY = ((x - rect.width  / 2) / rect.width ) *  8;
    gsap.to(card, {
      rotateX: rotX, rotateY: rotY,
      duration: 0.3, ease: 'power2.out', transformPerspective: 1000,
      boxShadow: '0 20px 40px rgba(255, 46, 136, 0.2)'
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateX: 0, rotateY: 0,
      duration: 0.5, ease: 'power2.out',
      boxShadow: '0 0 0 rgba(255, 46, 136, 0)'
    });
  };

  return (
    <div
      ref={cardRef}
      className={`project-card project-anim-${index}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-image-wrap">
        <div className="project-image-overlay" />
        <img src={project.image} alt={project.title} className="project-image" />
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <div className="project-tech-list">
          {project.tech.map((tech, i) => (
            <span key={i} className="project-tech-tag">{tech}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-btn">
            <Github size={18} /> <span>Code</span>
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link-btn project-link-live">
            <ExternalLink size={18} /> <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.projects-heading', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
      gsap.fromTo('.project-card', { y: 70, opacity: 0, rotationX: -15 }, {
        y: 0, opacity: 1, rotationX: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="projects-section">
      <div className="projects-orb projects-orb-left" />
      <div className="projects-orb projects-orb-right" />

      <div className="projects-container">
        <h2 className="projects-heading">
          Featured <span className="section-accent">Projects</span>
        </h2>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
