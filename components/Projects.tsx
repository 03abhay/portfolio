
import React from 'react';
import { Project } from '../types';
import { motion } from 'framer-motion';
import { TrendingUp, CloudRain, Twitter, Search, ExternalLink, Shield, Github, Sparkles, Video } from 'lucide-react';
import { Reveal } from './Reveal';

const projects: Project[] = [
  {
    title: "YouTube Automation Pipeline",
    tech: ["n8n", "Ollama/llama3", "Qdrant", "ffmpeg", "Python"],
    description: "Architected a four-stage AI pipeline for daily video scripting, TTS voice generation, stock footage assembly, and automated YouTube upload. Demonstrates deep LLM orchestration.",
    icon: "Video",
    link: "https://github.com/03abhay",
    isCurrent: true
  },
  {
    title: "ASTRaL Defense Logistics",
    tech: ["Python", "Optimization Algorithms", "ML", "Supply Chain"],
    description: "Built an active defense logistics optimization model to minimize supply chain risks and improve resource allocation accuracy using operations research techniques.",
    icon: "Shield",
    link: "https://github.com/03abhay/ASTRaL-Defense-Logistics-Intelligence"
  },
  {
    title: "InvestIQ – Finance Analytics",
    tech: ["Python", "Pandas", "NLP", "Streamlit"],
    description: "Designed a financial data analytics tool providing market insights and investment signals, reducing manual research time by ~40% through automated forecasting.",
    icon: "TrendingUp",
    link: "https://investiq-9.streamlit.app/"
  },
  {
    title: "Environmental Monitoring",
    tech: ["Python", "Power BI", "IoT", "API Integration"],
    description: "Built a real-time environmental monitoring system integrating multiple data sources with automated alert thresholds based on predefined KPIs.",
    icon: "CloudRain",
    link: "https://envirotrack.streamlit.app/"
  },
  {
    title: "Twitter Sentiment Dashboard",
    tech: ["NLP", "Tableau", "Power BI", "Python"],
    description: "Developed an end-to-end NLP pipeline for Twitter sentiment classification using VADER and custom models, visualizing trends in an executive-style dashboard.",
    icon: "Twitter",
    link: "https://github.com/03abhay/Twitter-Data-Analysis"
  },
  {
    title: "EDA Studio",
    tech: ["Streamlit", "Python", "NLP"],
    description: "Interactive EDA tool. Applied NLP for sentiment classification and time-series trend analysis on custom datasets.",
    icon: "Search",
    link: "https://edastudio.streamlit.app/"
  }
];

const IconMap: Record<string, { icon: React.ReactNode, color: string }> = {
  TrendingUp: { icon: <TrendingUp className="w-6 h-6" />, color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 group-hover:bg-emerald-500" },
  CloudRain: { icon: <CloudRain className="w-6 h-6" />, color: "text-blue-500 bg-blue-50 dark:bg-blue-900/20 group-hover:bg-blue-500" },
  Twitter: { icon: <Twitter className="w-6 h-6" />, color: "text-sky-500 bg-sky-50 dark:bg-sky-900/20 group-hover:bg-sky-500" },
  Search: { icon: <Search className="w-6 h-6" />, color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 group-hover:bg-indigo-500" },
  Shield: { icon: <Shield className="w-6 h-6" />, color: "text-amber-500 bg-amber-50 dark:bg-amber-900/20 group-hover:bg-amber-500" },
  Video: { icon: <Video className="w-6 h-6" />, color: "text-rose-500 bg-rose-50 dark:bg-rose-900/20 group-hover:bg-rose-500" }
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background Vibrance */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white transition-colors hover:text-primary duration-300 cursor-default">Featured Projects</h2>
              <p className="mt-4 text-slate-600 dark:text-slate-400 transition-colors">Showcasing data-driven solutions and predictive modeling.</p>
            </div>
            <a href="https://github.com/03abhay" target="_blank" rel="noreferrer" className="hidden md:flex items-center text-primary font-semibold hover:underline mt-4 md:mt-0 transition-transform duration-300 hover:scale-105">
              View Github <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Reveal key={idx} delay={idx * 100} className={`${idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}>
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border h-full relative flex flex-col
                  ${project.isCurrent 
                    ? 'bg-gradient-to-br from-white to-blue-50 dark:from-slate-900 dark:to-slate-800/60 border-primary/40 dark:border-primary/40 ring-2 ring-primary/10' 
                    : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800'
                  } 
                  group hover:border-primary/20`}
              >
                
                {/* Current Project Badge */}
                {project.isCurrent && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 animate-pulse shadow-sm">
                      <Sparkles className="w-3 h-3 mr-1" /> Active Development
                    </span>
                  </div>
                )}

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm group-hover:shadow-md group-hover:text-white ${IconMap[project.icon].color}`}>
                      {IconMap[project.icon].icon}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                     <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                     </h3>
                     <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                        {project.description}
                     </p>
                  </div>

                  <div className="mt-auto pt-4 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 text-xs font-semibold rounded-md transition-all duration-300 group-hover:bg-slate-200 dark:group-hover:bg-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>

                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center text-sm font-medium text-primary hover:text-blue-700 transition-colors mt-2"
                      >
                        {project.link.includes('github.com') ? (
                          <><Github className="w-4 h-4 mr-2" /> View Code</>
                        ) : (
                          <><ExternalLink className="w-4 h-4 mr-2" /> Live Demo</>
                        )}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
