import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "AI Image Generator",
    description: "A full-stack application leveraging OpenAI's DALL-E model to generate high-quality images from text prompts. Built with MERN stack.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Express", "MongoDB", "OpenAI"],
    live: "#",
    github: "#"
  },
  {
    title: "E-Commerce Platform",
    description: "A comprehensive e-commerce solution with Redux state management, Stripe payment gateway integration, and an admin dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Tailwind", "Stripe", "Prisma"],
    live: "#",
    github: "#"
  },
  {
    title: "Machine Learning Dashboard",
    description: "Interactive dashboard visualizing complex machine learning models and data sets. Real-time inference using TensorFlow.js.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Python", "TensorFlow", "Chart.js"],
    live: "#",
    github: "#"
  },
  {
    title: "Real-time Chat App",
    description: "WebSockets based real-time chat application with end-to-end encryption, online presence, and media sharing capabilities.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Socket.io", "Node.js", "Redis"],
    live: "#",
    github: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 relative max-w-7xl mx-auto">
      
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ duration: 0.6 }}
         className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Projects</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          A selection of my recent work focusing on scalable architecture, intuitive interfaces, and AI integration.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col h-full bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:scale-105 transition-transform duration-300 overflow-hidden"
          >
            {/* Project Image */}
            <div className="relative aspect-video w-full overflow-hidden">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            {/* Project Details */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-sm text-gray-400 flex-grow mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-medium py-1 px-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 mt-4">
                <a href={project.live} className="flex items-center gap-1.5 text-sm font-medium text-white hover:text-secondary transition-colors">
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a href={project.github} className="flex items-center gap-1.5 text-sm font-medium text-white hover:text-primary transition-colors">
                  <Github size={16} /> Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Projects;
