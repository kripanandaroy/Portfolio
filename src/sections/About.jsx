import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, Code, BrainCircuit, GraduationCap, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRef    = useRef(null);
  const cardsRef   = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-heading', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
      gsap.fromTo(textRef.current.children, { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.2,
        scrollTrigger: { trigger: textRef.current, start: 'top 85%' },
      });
      gsap.fromTo(cardsRef.current.children, { y: 50, opacity: 0, scale: 0.9 }, {
        y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.18, ease: 'back.out(1.5)',
        scrollTrigger: { trigger: cardsRef.current, start: 'top 85%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="about-section">
      <div className="about-orb about-orb-left" />
      <div className="about-orb about-orb-right" />

      <div className="about-container">
        <h2 className="about-heading">
          About <span className="section-accent">Me</span>
        </h2>

        <div className="about-layout">
          {/* Text Column */}
          <div ref={textRef} className="about-text-col">
            <p className="about-text-main">
              Hi, I'm <strong>Kripananda Roy</strong>, a passionate{' '}
              <span className="text-accent">MERN Stack Full Stack Developer</span>.
            </p>
            <p className="about-text-sub">
              I enjoy solving <strong>DSA</strong> problems and diving deep into modern technologies such as{' '}
              <span className="text-cyan">Machine Learning</span> and{' '}
              <span className="text-cyan">Artificial Intelligence</span>.
            </p>

            <div className="about-edu">
              <div className="about-edu-icon-wrap">
                <GraduationCap size={28} />
              </div>
              <div className="about-edu-details">
                <h3 className="about-edu-title">Education</h3>
                <p className="about-edu-degree">Bachelor of Computer Applications (BCA)</p>
                <a href="https://jaipur.manipal.edu/" target="_blank" rel="noopener noreferrer" className="about-edu-uni">
                  Manipal University Jaipur <ExternalLink size={14} className="inline ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Cards Column */}
          <div ref={cardsRef} className="about-cards-col">
            <div className="about-card">
              <div className="about-card-icon text-pink"><Code size={32} /></div>
              <h4 className="about-card-title">Full Stack Dev</h4>
              <p className="about-card-desc">Building responsive and scalable web applications using the MERN stack.</p>
            </div>

            <div className="about-card">
              <div className="about-card-icon text-cyan"><BrainCircuit size={32} /></div>
              <h4 className="about-card-title">AI &amp; ML Enthusiast</h4>
              <p className="about-card-desc">Exploring and learning Artificial Intelligence and Machine Learning models.</p>
            </div>

            <div className="about-card about-card-wide">
              <div className="about-card-icon text-pink"><BookOpen size={38} /></div>
              <div>
                <h4 className="about-card-title">Continuous Learner</h4>
                <p className="about-card-desc">Constantly updating skills with Data Structures, Algorithms, and the latest tech trends.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
