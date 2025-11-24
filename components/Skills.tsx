import React from 'react';
import { SkillCategory } from '../types';
import { Reveal } from './Reveal';

const skillsData: SkillCategory[] = [
  {
    category: "Machine Learning",
    items: ["Regression", "Classification", "Clustering", "Scikit-learn", "Prophet", "Supervised Learning"]
  },
  {
    category: "Programming & DB",
    items: ["Python", "SQL", "Pandas", "NumPy", "Streamlit", "Tkinter"]
  },
  {
    category: "Visualization",
    items: ["Power BI", "Matplotlib", "Seaborn", "Plotly", "Excel"]
  },
  {
    category: "Tools & Cloud",
    items: ["Google Cloud (Intermediate)", "Azure (Basic)", "Git", "Data Engineering", "ETL", "MS Office", "yfinance"]
  }
];

const Skills: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white transition-colors hover:text-primary duration-300 cursor-default">Technical Skills</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors">
              A comprehensive toolkit for extracting value from data.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skillSet, idx) => (
            <Reveal key={idx} delay={idx * 100} className="h-full">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 transition-all duration-300 h-full hover:shadow-xl hover:-translate-y-2 hover:border-primary/50 group">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4 border-b pb-2 border-slate-100 dark:border-slate-800 transition-colors group-hover:text-primary">
                  {skillSet.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillSet.items.map((item, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm rounded-full font-medium transition-all duration-300 hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white hover:scale-105 hover:shadow-md cursor-default"
                    >
                      {item}
                    </span>
                  ))}
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