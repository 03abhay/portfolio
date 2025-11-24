import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { Reveal } from './Reveal';
import { PROFILE_IMAGE_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden min-h-[90vh] flex items-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mt-20 w-72 h-72 bg-blue-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -mb-20 w-96 h-96 bg-purple-400 rounded-full opacity-10 blur-3xl"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Column: Text */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <Reveal delay={100} width="fit-content">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium mb-8 animate-fade-in-up transition-colors hover:scale-105 duration-300 cursor-default">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2 animate-pulse"></span>
                Available for Hire
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6 transition-colors">
                Hi, I'm <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 hover:text-blue-700 transition-colors duration-300 cursor-default">Abhay Singh</span>
                <span className="block text-2xl md:text-4xl text-slate-500 dark:text-slate-400 font-semibold mt-4 transition-colors">
                  Data Scientist & ML Engineer
                </span>
              </h1>
            </Reveal>

            <Reveal delay={300}>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-10 transition-colors">
                Transforming complex data into actionable insights using Python, Machine Learning, and Interactive Visualizations. 
                Bridging the gap between raw numbers and business strategy.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a 
                  href="#projects"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-white font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1 hover:scale-105 active:scale-95"
                >
                  View Work <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 flex items-center justify-center hover:shadow-md transform hover:-translate-y-1 hover:scale-105 active:scale-95"
                >
                  Contact Me
                </a>
              </div>
            </Reveal>

            {/* Stats / Highlights Row */}
            <Reveal delay={600} width="100%">
              <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 mt-10 border-t border-slate-200/60 dark:border-slate-800 transition-colors">
                {[
                  { label: "Major Projects", value: "5+" },
                  { label: "Graduated", value: "2025" },
                  { label: "NCC Grade", value: "A" },
                  { label: "Reality Show", value: "Finalist" }
                ].map((stat, index) => (
                  <div key={index} className="text-center lg:text-left group hover:-translate-y-1 transition-transform duration-300 cursor-default">
                    <p className="text-2xl font-bold text-slate-900 dark:text-white transition-colors group-hover:text-primary">{stat.value}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide mt-1 transition-colors">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Column: Image */}
          <Reveal delay={300} className="mt-12 lg:mt-0 order-1 lg:order-2 flex justify-center">
             <div className="relative flex justify-center items-center">
                {/* Decorative Blob */}
                <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-gradient-to-r from-blue-300 to-purple-300 dark:from-blue-900 dark:to-purple-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30 animate-blob"></div>
                
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-[2rem] rotate-6 opacity-20 blur-lg transition-all duration-500 group-hover:rotate-12"></div>
                  <img 
                    src={PROFILE_IMAGE_URL} 
                    alt="Abhay Singh" 
                    className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl border-4 border-white dark:border-slate-800 transform transition-all duration-500 hover:scale-[1.02] hover:-rotate-2 hover:shadow-primary/20 z-10"
                    onError={(e) => {
                      // Fallback if image fails
                      e.currentTarget.src = "https://ui-avatars.com/api/?name=Abhay+Singh&background=0D8ABC&color=fff&size=512";
                    }}
                  />
                  
                  {/* Floating Interactive Badge */}
                  <a 
                    href="mailto:Abhay242singh@gmail.com?subject=Resume Request"
                    className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 animate-bounce-slow z-20 cursor-pointer hover:scale-105 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 group"
                  >
                     <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                           <Mail className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                           <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Request</p>
                           <p className="text-sm font-bold text-slate-900 dark:text-white">Resume</p>
                        </div>
                     </div>
                  </a>
                </div>
             </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;