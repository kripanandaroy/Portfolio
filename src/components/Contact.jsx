import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    setTimeout(() => {
        setSubmitStatus('success');
        setIsSubmitting(false);
        e.target.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
        
       {/* Background gradient flares */}
       <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-secondary rounded-full mix-blend-screen opacity-10 blur-[150px] pointer-events-none"></div>
       <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-primary rounded-full mix-blend-screen opacity-10 blur-[150px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="max-w-lg mx-auto"
        >
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 relative overflow-hidden shadow-2xl z-20">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="user_name" className="text-sm font-medium text-gray-300 ml-1">Name</label>
                        <input
                            type="text"
                            name="user_name"
                            id="user_name"
                            required
                            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="user_email" className="text-sm font-medium text-gray-300 ml-1">Email</label>
                        <input
                            type="email"
                            name="user_email"
                            id="user_email"
                            required
                            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                            placeholder="john@example.com"
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows={5}
                            required
                            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                            placeholder="How can I help you?"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-full bg-primary text-white font-medium hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 mt-4"
                    >
                        {isSubmitting ? (
                            <span className="flex items-center gap-2">
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                Sending...
                            </span>
                        ) : (
                            <>
                                Send Message
                                <Send size={18} />
                            </>
                        )}
                    </button>

                    {submitStatus === 'success' && (
                        <div className="flex items-center gap-2 text-emerald-400 bg-emerald-400/10 p-3 rounded-lg border border-emerald-400/20 mt-4">
                            <CheckCircle size={20} />
                            <span className="text-sm">Message sent successfully!</span>
                        </div>
                    )}
                </form>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
