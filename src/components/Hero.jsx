import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      
      {/* Background Floating Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         {/* Top Left */}
        <div className="absolute top-[20%] left-[10%] opacity-20 text-secondary text-6xl font-mono animate-float">
          {"{}"}
        </div>
        {/* Bottom Right */}
        <div className="absolute bottom-[20%] right-[15%] opacity-20 text-primary text-5xl font-mono font-bold animate-float-delayed">
           &lt;/&gt;
        </div>
        {/* Top Right */}
        <div className="absolute top-[30%] right-[10%] opacity-10 text-secondary text-5xl font-bold animate-float-slow">
           JS
        </div>
        {/* Bottom Left */}
        <div className="absolute bottom-[30%] left-[15%] opacity-15 text-primary text-4xl font-bold animate-float-delayed">
           React
        </div>

        {/* Subtle glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary rounded-full mix-blend-screen opacity-10 blur-[150px] animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary rounded-full mix-blend-screen opacity-10 blur-[120px] animate-float"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 w-24 h-24 rounded-full border border-white/20 bg-[#0f172a] flex items-center justify-center overflow-hidden shadow-xl"
        >
          <span className="text-4xl">👨‍💻</span>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium border border-primary/20"
        >
          Available For Hire
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight"
        >
          Become The Developer That <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Companies Want To Hire
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.3 }}
           className="text-gray-400 max-w-xl mx-auto mb-8 text-lg"
        >
          I am Kripananda Roy, a MERN Stack Developer passionate about AI & ML, building digital experiences that matter.
        </motion.p>

        {/* Buttons */}
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.4 }}
           className="flex gap-4 flex-wrap justify-center w-full"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 bg-primary px-6 py-3 rounded-full text-white font-medium hover:scale-105 transition-transform duration-300"
          >
            View Projects
            <ArrowRight size={18} />
          </a>
          
          <a
            href="/assets/Resume...kripananda.pdf"
            download="/assets/Resume...kripananda.pdf"
            className="flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full text-white font-medium hover:bg-white/5 transition-colors duration-300"
          >
            <Download size={18} />
            Download CV
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
