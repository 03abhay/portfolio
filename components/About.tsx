import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Palette, Database, Code2 } from 'lucide-react';
import { Reveal } from './Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300 overflow-hidden relative">
      {/* Background Vibrance */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          <div className="space-y-8">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-950 dark:text-white tracking-tight">
                The Intersection of <br />
                <span className="text-primary">Precision & Intent.</span>
              </h2>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                <p>
                  As a Data Scientist and B.Tech graduate (2025), my journey has been defined by a simple realization: 
                  <span className="text-slate-900 dark:text-slate-200 font-medium italic"> data is merely raw material until it's shaped with purpose.</span>
                </p>
                <p>
                  I specialize in <span className="text-slate-900 dark:text-slate-200 font-bold">GenAI Powered Data Analytics</span> and <span className="text-slate-900 dark:text-slate-200 font-bold">Agile Project Management</span>, bridging the gap between complex data architectures and business strategy.
                </p>
                <p>
                  With a background as a national television painting finalist, I bring a unique visual intuition to data storytelling and machine learning interface design, ensuring every insight is as clear as it is powerful.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-slate-950 dark:text-white">A+</span>
                  <span className="text-sm uppercase tracking-widest text-slate-500 font-bold">NCC Grade</span>
                </div>
                <div className="w-px h-12 bg-slate-200 dark:bg-slate-800 mx-4 hidden sm:block"></div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-slate-950 dark:text-white">5+</span>
                  <span className="text-sm uppercase tracking-widest text-slate-500 font-bold">Key Projects</span>
                </div>
                <div className="w-px h-12 bg-slate-200 dark:bg-slate-800 mx-4 hidden sm:block"></div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-slate-950 dark:text-white">4+</span>
                  <span className="text-sm uppercase tracking-widest text-slate-500 font-bold">Certifications</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <AboutCard 
              icon={<Database className="w-6 h-6" />}
              title="Data Science"
              desc="Building robust pipelines and predictive models that drive decision making."
              delay={400}
              color="blue"
            />
            <AboutCard 
              icon={<Code2 className="w-6 h-6" />}
              title="GenAI & ML"
              desc="Implementing cutting-edge AI solutions and GenAI powered analytics."
              delay={500}
              color="emerald"
            />
            <AboutCard 
              icon={<Shield className="w-6 h-6" />}
              title="Agile Management"
              desc="Certified Agile Project Manager with experience in Scrum and Kanban workflows."
              delay={600}
              color="amber"
            />
            <AboutCard 
              icon={<Palette className="w-6 h-6" />}
              title="Artistic Vision"
              desc="TV reality show finalist, bringing painterly intuition to data visualization."
              delay={700}
              color="rose"
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
