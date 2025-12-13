
import React from 'react';
import { Project } from '../types';
import { TrendingUp, CloudRain, Twitter, Search, ExternalLink, Shield, Github, Sparkles } from 'lucide-react';
import { Reveal } from './Reveal';

const projects: Project[] = [
  {
    title: "ASTRaL Defense Logistics Intelligence",
    tech: ["Python", "NetworkX", "Reinforcement Learning", "Geospatial Analytics"],
    description: "Developing an autonomous logistics optimization engine for defense sectors. Utilizing graph algorithms for secure route planning and predictive supply chain resilience.",
    icon: "Shield",
    link: "https://github.com/03abhay/ASTRaL-Defense-Logistics-Intelligence",
    isCurrent: true
  },
  {
    title: "InvestIQ – Stock Market Analysis",
    tech: ["Python", "Streamlit", "yfinance", "Scikit-learn"],
    description: "Built regression models for stock price forecasts, implemented time-series analysis, and predictive analytics within an interactive dashboard.",
    icon: "TrendingUp",
    link: "https://investiq-9.streamlit.app/"
  },
  {
    title: "Environmental Monitoring",
    tech: ["Python", "Prophet", "Streamlit"],
    description: "Developed real-time monitoring and forecasting solutions. Visualized air quality, temperature, and rainfall metrics.",
    icon: "CloudRain",
    link: "https://envirotrack.streamlit.app/"
  },
  {
    title: "Twitter Data Analysis",
    tech: ["Power BI", "Excel", "NLP"],
    description: "Applied NLP techniques for sentiment classification, performed time-series trend analysis, and delivered actionable insights.",
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

const IconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  CloudRain: <CloudRain className="w-6 h-6" />,
  Twitter: <Twitter className="w-6 h-6" />,
  Search: <Search className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div 
                className={`rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border 
                  ${project.isCurrent 
                    ? 'bg-gradient-to-br from-white to-blue-50 dark:from-slate-900 dark:to-slate-800/60 border-primary/40 dark:border-primary/40 ring-2 ring-primary/10' 
                    : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800'
                  } 
                  group h-full hover:-translate-y-2 hover:border-primary/30 relative flex flex-col`}
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
                    <div className={`p-3 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm group-hover:shadow-md ${project.isCurrent ? 'bg-primary text-white shadow-primary/30' : 'bg-blue-50 dark:bg-slate-800 text-primary group-hover:bg-primary group-hover:text-white'}`}>
                      {IconMap[project.icon]}
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
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

