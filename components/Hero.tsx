import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Database, Brain, Code2, Terminal, BarChart3, Zap, Cloud, Server, Shield } from 'lucide-react';
import { Reveal } from './Reveal';
import { PROFILE_IMAGE_URL } from '../constants';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-48 md:pb-32 bg-white dark:bg-slate-950 overflow-hidden flex items-center min-h-[95vh]">
      {/* Sophisticated background pattern */}
      <motion.div 
        style={{ y: y1, opacity, backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
      />
      
      {/* Animated Background Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-[100px]"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.4, 0.3],
          x: [0, -30, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-400/10 dark:bg-indigo-600/5 rounded-full blur-[100px]"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            style={{ y: y2 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <Reveal delay={100} width="fit-content">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-100 dark:border-blue-800/50 cursor-default"
              >
                <Sparkles className="w-3 h-3 mr-2" />
                Creative Data Intelligence
              </motion.div>
            </Reveal>
            
            <Reveal delay={200}>
              <h1 className="text-6xl md:text-8xl font-display font-extrabold text-slate-950 dark:text-white leading-[1.1] mb-8 tracking-tight">
                Business Analyst & <br />
                <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">Data Intelligence.</span>
              </h1>
            </Reveal>

            <Reveal delay={300}>
              <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed mb-12 font-light">
                Hi, I'm <span className="font-semibold text-slate-900 dark:text-white">Abhay Singh</span>. 
                A <span className="text-primary font-medium">Business Analyst</span> & <span className="text-primary font-medium">AI Trainer</span> specializing in GenAI, process optimization, and data-driven strategy to drive operational excellence.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#projects"
                  className="group w-full sm:w-auto px-10 py-5 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-semibold transition-all duration-300 flex items-center justify-center shadow-xl shadow-slate-200 dark:shadow-none"
                >
                  View Work <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(0,0,0,0.02)" }}
                  whileTap={{ scale: 0.98 }}
                  href="#about"
                  className="w-full sm:w-auto px-10 py-5 rounded-full bg-transparent text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  About Me
                </motion.a>
              </div>
            </Reveal>
          </motion.div>

          {/* Profile Image Column */}
          <motion.div 
            style={{ y: y1 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <Reveal delay={500} width="fit-content" className="relative group">
              {/* Abstract decorative elements */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 bg-gradient-to-tr from-blue-200 to-indigo-200 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-[4rem] blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-700"
              ></motion.div>
              
              {/* Floating decorative cards - Distributed on both sides */}
              <motion.div
                animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-28 -left-48 glass p-4 rounded-2xl shadow-xl z-20 hidden md:block border border-white/20 dark:border-slate-800/50 min-w-[160px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Innovation</p>
                    <p className="text-sm font-bold text-slate-800 dark:text-white">AI Powered</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-28 -right-48 glass p-4 rounded-2xl shadow-xl z-20 hidden md:block border border-white/20 dark:border-slate-800/50 min-w-[160px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Growth</p>
                    <p className="text-sm font-bold text-slate-800 dark:text-white">Data Driven</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[35%] -left-64 glass p-4 rounded-2xl shadow-xl z-20 hidden md:block border border-white/20 dark:border-slate-800/50 min-w-[160px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Precision</p>
                    <p className="text-sm font-bold text-slate-800 dark:text-white">ML Models</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute top-[35%] -right-64 glass p-4 rounded-2xl shadow-xl z-20 hidden md:block border border-white/20 dark:border-slate-800/50 min-w-[160px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Strategy</p>
                    <p className="text-sm font-bold text-slate-800 dark:text-white">Agile Flow</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0], x: [0, 20, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-[5%] -left-64 glass p-4 rounded-2xl shadow-xl z-20 hidden md:block border border-white/20 dark:border-slate-800/50 min-w-[160px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-500">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Analytics</p>
                    <p className="text-sm font-bold text-slate-800 dark:text-white">Visual Story</p>
                  </div>
                </div>
              </motion.div>

              {/* New Floating Logs/Badges - Distributed on both sides */}
              <motion.div
                animate={{ y: [0, -20, 0], x: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="absolute top-[5%] -left-24 glass p-3 rounded-xl shadow-lg z-20 hidden md:block border border-white/10 dark:border-slate-800/30"
              >
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-300">SQL</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0], x: [0, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute top-[5%] -right-24 glass p-3 rounded-xl shadow-lg z-20 hidden md:block border border-white/10 dark:border-slate-800/30"
              >
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-300">MLOps</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0], x: [0, -15, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute bottom-[5%] -left-24 glass p-3 rounded-xl shadow-lg z-20 hidden md:block border border-white/10 dark:border-slate-800/30"
              >
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-300">Python</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0], x: [0, 15, 0] }}
                transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="absolute bottom-[5%] -right-24 glass p-3 rounded-xl shadow-lg z-20 hidden md:block border border-white/10 dark:border-slate-800/30"
              >
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-rose-400" />
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-300">Power BI</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0], x: [0, -10, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.0 }}
                className="absolute top-[25%] -left-36 glass p-3 rounded-xl shadow-lg z-20 hidden md:block border border-white/10 dark:border-slate-800/30"
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-300">PyTorch</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0], x: [0, 8, 0] }}
                transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
                className="absolute top-[25%] -right-36 glass p-3 rounded-xl shadow-lg z-20 hidden md:block border border-white/10 dark:border-slate-800/30"
              >
                <div className="flex items-center gap-2">
                  <Cloud className="w-4 h-4 text-sky-400" />
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-300">Cloud</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0], x: [0, -12, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="absolute bottom-[25%] -left-36 glass p-2 rounded-lg shadow-md z-20 hidden md:block border border-white/10 dark:border-slate-800/30"
              >
                <Server className="w-4 h-4 text-slate-400" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0], x: [0, 10, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
                className="absolute bottom-[25%] -right-36 glass p-2 rounded-lg shadow-md z-20 hidden md:block border border-white/10 dark:border-slate-800/30"
              >
                <Code2 className="w-4 h-4 text-blue-400" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute top-4 -right-16 glass p-2 rounded-lg shadow-md z-20 hidden lg:block border border-white/10 dark:border-slate-800/30"
              >
                <Terminal className="w-4 h-4 text-amber-400" />
              </motion.div>
              
              <motion.div 
                animate={{ 
                  y: [0, -15, 0],
                  x: [0, 5, 0],
                  rotate: [-2, 2, -2]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-[3rem] overflow-hidden border-8 border-white dark:border-slate-900 shadow-2xl transform lg:-rotate-3 group-hover:rotate-0 transition-transform duration-700"
              >
                <img 
                  src={PROFILE_IMAGE_URL} 
                  alt="Abhay Singh" 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=Abhay+Singh&background=0D8ABC&color=fff&size=512";
                  }}
                />
              </motion.div>
              
              {/* Mini Status Badge */}
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-10 glass border border-slate-200/50 dark:border-slate-700/50 px-6 py-4 rounded-2xl shadow-xl z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold tracking-tight text-slate-800 dark:text-slate-100">Ready to Collaborate</span>
                </div>
              </motion.div>
            </Reveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
