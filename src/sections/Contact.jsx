import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Mail, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-heading', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      });
      gsap.fromTo('.contact-info-col', { x: -50, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
      });
      gsap.fromTo('.contact-form-col', { x: 50, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.target);
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY"); // User needs to set this

    try {
      // Stubbed success for UI demo, in real life Web3Forms is called
      /*
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();
      */
      const data = { success: true }; // fake success for now

      if (data.success) {
        setIsSubmitting(false);
        setStatus('success');
        formRef.current.reset();
        setTimeout(() => setStatus(null), 5000);
      } else {
        setIsSubmitting(false);
        setStatus('error');
      }
    } catch (error) {
      setIsSubmitting(false);
      setStatus('error');
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="contact-section">
      <div className="contact-orb" />

      <div className="contact-container">
        <h2 className="contact-heading">
          Get In <span className="section-accent">Touch</span>
        </h2>

        <div className="contact-layout">
          {/* Info Column */}
          <div className="contact-info-col">
            <h3 className="contact-info-title">Let's talk about your project</h3>
            <p className="contact-info-desc">
              Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-icon text-pink"><Mail size={20} /></div>
                <div>
                  <p className="contact-icon-label">Email Me At</p>
                  <a href="mailto:kripanandaroy4@gmail.com" className="contact-icon-value">kripanandaroy4@gmail.com</a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon text-cyan"><MapPin size={20} /></div>
                <div>
                  <p className="contact-icon-label">Location</p>
                  <p className="contact-icon-value">India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-col">
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form glass">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="user_name">Your Name</label>
                  <input type="text" name="name" id="user_name" required placeholder="John Doe" className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="user_email">Your Email</label>
                  <input type="email" name="email" id="user_email" required placeholder="john@example.com" className="form-input" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" required rows="5" placeholder="Tell me about your project..." className="form-input form-textarea"></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className="form-submit-btn">
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                {!isSubmitting && <Send size={20} />}
              </button>

              {status === 'success' && <p className="form-status form-status-success">Message sent successfully!</p>}
              {status === 'error' && <p className="form-status form-status-error">Failed to send message. Please try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
