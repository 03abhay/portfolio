import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Palette, Database, Code2, Cpu, BarChart3 } from 'lucide-react';
import { Reveal } from './Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300 overflow-hidden relative">
      {/* Background Vibrance */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          <div className="lg:col-span-5 space-y-8">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-950 dark:text-white tracking-tight">
                The Intersection of <br />
                <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">Precision & Intent.</span>
              </h2>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  As a <span className="text-slate-900 dark:text-slate-200 font-bold">Firmware Engineer</span> and <span className="text-slate-900 dark:text-slate-200 font-bold">Data/AI Practitioner</span>, my journey sits at a rare intersection — writing bare-metal C code at the register level for ARM Cortex microcontrollers, while building data pipelines, ML models, and business intelligence dashboards.
                </p>
                <p>
                  I specialize in <span className="text-slate-900 dark:text-slate-200 font-bold">low-level embedded systems</span> programming and <span className="text-slate-900 dark:text-slate-200 font-bold">high-level data storytelling</span> — giving me the ability to work from silicon to insight, from peripheral interfacing to Power BI.
                </p>
                <p>
                  With a foundation built in <span className="text-slate-900 dark:text-slate-200 font-semibold italic">NCC (Ex-Under Officer, 'C' Certificate, A Grade)</span>, I bring precision, discipline, and structured thinking to every system I build.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-slate-950 dark:text-white">A+</span>
                  <span className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-1">Accuracy</span>
                </div>
                <div className="w-px h-12 bg-slate-200 dark:bg-slate-800 mx-2 hidden sm:block"></div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-slate-950 dark:text-white">5+</span>
                  <span className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-1">Projects</span>
                </div>
                <div className="w-px h-12 bg-slate-200 dark:bg-slate-800 mx-2 hidden sm:block"></div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-slate-950 dark:text-white">4+</span>
                  <span className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-1">Tech Stacks</span>
                </div>
                <div className="w-px h-12 bg-slate-200 dark:bg-slate-800 mx-2 hidden sm:block"></div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-slate-950 dark:text-white">2+</span>
                  <span className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-1">Career Domains</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <div className="sm:col-span-2">
              <AboutCard 
                icon={<Cpu className="w-6 h-6" />}
                title="Firmware & Embedded Systems"
                desc="Bare-metal microcontroller programming in Embedded C. Peripheral configuration, register-level control, interrupt handling — using MPLAB X IDE and XC32 on ARM Cortex MCUs."
                delay={400}
                color="rose"
              />
            </div>
            <AboutCard 
              icon={<Code2 className="w-6 h-6" />}
              title="AI & Automation"
              desc="Designing automated workflows, evaluating LLM performance, and building low-latency intelligent systems."
              delay={500}
              color="emerald"
            />
            <AboutCard 
              icon={<Shield className="w-6 h-6" />}
              title="Process Optimization"
              desc="Streamlining workflow operations, reducing system friction, and designing high-integrity technical frameworks."
              delay={600}
              color="amber"
            />
            <AboutCard 
              icon={<Palette className="w-6 h-6" />}
              title="Data Storytelling"
              desc="Injecting visual clarity and creative engineering into complex data, turning telemetry into narratives."
              delay={700}
              color="blue"
            />
            <AboutCard 
              icon={<BarChart3 className="w-6 h-6" />}
              title="Data Analytics & BI"
              desc="End-to-end data pipelines, EDA, and executive-ready dashboards using Python, SQL, and Power BI. Turning raw data into decisions."
              delay={800}
              color="emerald"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutCard: React.FC<{ icon: React.ReactNode; title: string; desc: string; delay: number; color: string }> = ({ icon, title, desc, delay, color }) => {
  const colorMap: Record<string, string> = {
    blue: "text-blue-600 bg-blue-50 dark:bg-blue-900/20 group-hover:bg-blue-600",
    emerald: "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 group-hover:bg-emerald-600",
    amber: "text-amber-600 bg-amber-50 dark:bg-amber-900/20 group-hover:bg-amber-600",
    rose: "text-rose-600 bg-rose-50 dark:bg-rose-900/20 group-hover:bg-rose-600"
  };

  return (
    <Reveal delay={delay}>
      <motion.div 
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="p-8 rounded-[2rem] bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-500 group h-full"
      >
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:text-white ${colorMap[color]}`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-3 tracking-tight">{title}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
      </motion.div>
    </Reveal>
  );
};

export default About;
