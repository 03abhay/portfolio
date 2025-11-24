import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { Experience as ExperienceType } from '../types';
import { Reveal } from './Reveal';

const experiences: ExperienceType[] = [
  {
    role: "Data Science Job Simulation",
    company: "BCG",
    period: "May 2025",
    details: [
      "Completed end-to-end data analysis and machine learning simulation projects.",
      "Built regression and classification models.",
      "Developed interactive dashboards for business insights."
    ]
  },
  {
    role: "Data Analyst",
    company: "Nullclass (Remote Internship)",
    period: "Jan - Feb 2025",
    details: [
      "Conducted extensive data manipulation and trend analysis.",
      "Used Python and Power BI to translate complex findings into business strategy.",
      "Reporting and visualization."
    ]
  },
  {
    role: "Data Science & ML Trainee",
    company: "O7 Services, Jalandhar",
    period: "Jun - Jul 2024",
    details: [
      "Worked on real-world datasets to build predictive models.",
      "Performed exploratory data analysis (EDA).",
      "Presented actionable insights to improve outcomes."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white transition-colors hover:text-primary duration-300 cursor-default">Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>
        </Reveal>

        <div className="space-y-12 relative before:content-[''] before:absolute before:left-4 md:before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800 transition-colors">
          {experiences.map((exp, idx) => (
            <Reveal key={idx} delay={idx * 100} width="100%">
              <div className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-slate-900 shadow-sm mt-1.5 transition-all duration-300 z-10 hover:scale-150"></div>

                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2 px-4">
                  <div className={`bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className={`flex flex-col ${idx % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                      <span className="inline-flex items-center text-sm font-semibold text-primary mb-2">
                        <Calendar className="w-4 h-4 mr-2" /> {exp.period}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors group-hover:text-primary">{exp.role}</h3>
                      <h4 className="text-lg text-slate-600 dark:text-slate-300 font-medium mb-4 flex items-center gap-2 transition-colors">
                        <Briefcase className="w-4 h-4" /> {exp.company}
                      </h4>
                      <ul className="space-y-2">
                        {exp.details.map((detail, i) => (
                          <li key={i} className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed list-none transition-colors">
                            • {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default Experience;