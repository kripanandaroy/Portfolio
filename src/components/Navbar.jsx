import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home',     href: '#home'     },
    { name: 'About',    href: '#about'    },
    { name: 'Skills',   href: '#skills'   },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact',  href: '#contact'  },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${isScrolled ? ' navbar-scrolled' : ''}`}>
      <div className="navbar-container">

        {/* ── Logo ── */}
        <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="nav-logo">
          <span className="logo-white">Kripa</span>
          <span className="logo-accent">nanda</span>
          <span className="logo-dot">.</span>
        </a>

        {/* ── Desktop Nav ── */}
        <div className="nav-desktop">
          <ul className="nav-links-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="nav-link"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a href="/assets/Resume...kripananda.pdf" download className="nav-cv-btn">
            Download CV
          </a>

          <div className="nav-social">
            <a href="https://github.com/kripanandaroy" target="_blank" rel="noopener noreferrer" className="nav-social-link" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/kripananda-roy-132332335" target="_blank" rel="noopener noreferrer" className="nav-social-link" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* ── Mobile Toggle ── */}
        <button className="nav-mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <div className={`nav-mobile-menu${isMenuOpen ? ' nav-mobile-open' : ''}`}>
        <ul className="nav-mobile-list">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="nav-mobile-link">
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a href="/assets/Kripananda_Roy_CV.pdf" download className="nav-cv-btn nav-cv-mobile">
              Download CV
            </a>
          </li>
          <li className="nav-mobile-socials">
            <a href="https://github.com/kripanandaroy" target="_blank" rel="noopener noreferrer" className="nav-social-link"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/kripananda-roy-132332335" target="_blank" rel="noopener noreferrer" className="nav-social-link"><Linkedin size={24} /></a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
