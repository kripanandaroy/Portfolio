import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <h3 className="footer-logo">
              <span className="logo-white">Kripa</span>
              <span className="logo-accent">nanda</span>
              <span className="logo-dot">.</span>
            </h3>
            <p className="footer-brand-desc">
              MERN Stack Full Stack Developer passionate about building modern web applications and exploring AI &amp; ML.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-link-list">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} onClick={(e) => scrollTo(e, `#${item.toLowerCase()}`)} className="footer-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="footer-col">
            <h4 className="footer-col-title">Connect</h4>
            <div className="footer-social-row">
              <a href="https://github.com/kripanandaroy" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/kripananda-roy-132332335" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:kripanandaroy4@gmail.com" className="footer-social-icon" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {year} Kripananda Roy. All rights reserved.</p>
          <p className="footer-credit">
            Built with <Heart size={13} className="footer-heart" /> in React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
