import React from 'react';
import { motion } from 'framer-motion';
import { SkillCategory } from '../types';
import { Reveal } from './Reveal';
import { Brain, Database, BarChart3, Settings } from 'lucide-react';

const skillsData = [
  {
    category: "Machine Learning & AI",
    icon: <Brain className="w-5 h-5" />,
    color: "text-purple-500",
    items: ["Scikit-learn", "Regression", "Clustering", "Prophet", "XGBoost", "GenAI", "NLP"]
  },
  {
    category: "Data Engineering & Analysis",
    icon: <Database className="w-5 h-5" />,
    color: "text-blue-500",
    items: ["Python", "SQL", "Pandas", "NumPy", "ETL", "Data Cleaning", "Feature Engineering"]
  },
  {
    category: "Visualization & BI",
    icon: <BarChart3 className="w-5 h-5" />,
    color: "text-emerald-500",
    items: ["Power BI", "Plotly", "Matplotlib", "Seaborn", "Tableau", "Data Storytelling"]
  },
  {
    category: "Management & Tools",
    icon: <Settings className="w-5 h-5" />,
    color: "text-amber-500",
    items: ["Agile (Scrum/Kanban)", "Git", "Streamlit", "Google Cloud", "Azure", "NetworkX"]
  }
];

const Skills: React.FC = () => {
  return (
    <section className="py-32 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background Vibrance */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Subtle background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="mb-20 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-950 dark:text-white tracking-tight mb-4">
              The Arsenal.
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-light">
              Tools and philosophies I use to build the future.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillsData.map((category, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div className="relative group h-full">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100"></div>
                <div className="relative space-y-6 p-2">
                  <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4 transition-colors group-hover:border-primary/20">
                    <div className={`p-2 rounded-lg bg-slate-50 dark:bg-slate-900 group-hover:bg-white dark:group-hover:bg-slate-800 transition-colors duration-300 ${category.color}`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xs uppercase tracking-[0.2em] font-black text-slate-400 dark:text-slate-600 transition-colors group-hover:text-primary">
                      {category.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {category.items.map((item, i) => (
                      <motion.span 
                        key={i} 
                        whileHover={{ scale: 1.1, color: "var(--primary)" }}
                        className="text-sm font-semibold tracking-tight transition-all duration-300 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white cursor-default"
                      >
                        {item}{i < category.items.length - 1 ? <span className="ml-2 text-slate-200 dark:text-slate-800">/</span> : ''}
                      </motion.span>
                    ))}
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

export default Skills;
