import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { Experience as ExperienceType } from '../types';
import { Reveal } from './Reveal';

const experiences: ExperienceType[] = [
  {
    role: "GenAI Powered Data Analytics Job Simulation",
    company: "Tata (via Forage)",
    period: "March 2026",
    details: [
      "Conducted exploratory data analysis and risk profiling for financial datasets.",
      "Developed AI models for predicting delinquency using advanced machine learning techniques.",
      "Created comprehensive business reports and data storytelling for collections strategy.",
      "Implemented an AI-driven collections strategy to optimize recovery processes."
    ]
  },
  {
    role: "Data Science Job Simulation",
    company: "BCG",
    period: "May 2025",
    details: [
      "Completed end-to-end data analysis and machine learning simulation projects.",
      "Built regression and classification models to solve business use cases.",
      "Developed interactive dashboards to communicate insights to stakeholders."
    ]
  },
  {
    role: "Data Analyst Intern",
    company: "Nullclass Edutech",
    period: "Jan - Feb 2025",
    details: [
      "Conducted extensive data manipulation, trend analysis, and reporting using Python and Power BI.",
      "Translated complex data findings into actionable business strategies.",
      "Improved data visualization efficiency by 30% through optimized dashboard design."
    ]
  },
  {
    role: "Data Science & ML Trainee",
    company: "O7 Services, Jalandhar",
    period: "Jun - Jul 2024",
    details: [
      "Worked on real-world datasets to build and evaluate predictive models.",
      "Performed exploratory data analysis (EDA) to identify patterns and anomalies.",
      "Presented actionable insights to improve project outcomes and model accuracy."
    ]
  }
];

const Experience: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white transition-colors hover:text-primary duration-300 cursor-default">Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>
        </Reveal>

        <div className="space-y-12 relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 transform -translate-x-1/2"></div>
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary transform -translate-x-1/2 z-0"
          ></motion.div>

          {experiences.map((exp, idx) => (
            <Reveal key={idx} delay={idx * 100} width="100%">
              <div className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-slate-900 shadow-sm mt-1.5 transition-all duration-300 z-10 hover:scale-125"></div>

                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2 px-4">
                  <div className={`bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 transition-all duration-500 hover:shadow-lg hover:-translate-y-0.5 hover:border-primary/30 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
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
