import React from 'react';
import { BookOpen, Award, Code, Palette } from 'lucide-react';
import { Reveal } from './Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white transition-colors hover:text-primary duration-300 cursor-default">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal delay={200}>
            <div className="space-y-6">
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed transition-colors">
                I am a detail-oriented and analytical <span className="font-semibold text-primary">Data Scientist</span> based in Mukerian, India. 
                I hold a B.Tech in Computer Science & Engineering from D.A.V. University, where I honed my skills in machine learning, statistical analysis, and data visualization.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed transition-colors">
                Beyond the code, I am an artist. Being a finalist on a TV Reality Show for painting has taught me that creativity and logic are not mutually exclusive—they are the perfect combination for innovative data storytelling.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30">
                  <h3 className="font-bold text-2xl text-primary mb-1">2025</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors">Graduated</p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30">
                  <h3 className="font-bold text-2xl text-primary mb-1">5+</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors">Major Projects</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Reveal delay={300}>
              <div className="p-6 bg-blue-50 dark:bg-slate-800 rounded-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full border border-transparent hover:border-blue-200 dark:hover:border-blue-900">
                <Code className="w-8 h-8 text-primary mb-4 transform group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-2 transition-colors">Development</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors">Python, SQL, Streamlit, Building interactive web apps.</p>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="p-6 bg-purple-50 dark:bg-slate-800 rounded-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full border border-transparent hover:border-purple-200 dark:hover:border-purple-900">
                <BookOpen className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-4" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-2 transition-colors">Research</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors">Hypothesis testing, Data distributions, Model evaluation.</p>
              </div>
            </Reveal>
            <Reveal delay={500}>
              <div className="p-6 bg-green-50 dark:bg-slate-800 rounded-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full border border-transparent hover:border-green-200 dark:hover:border-green-900">
                <Award className="w-8 h-8 text-green-600 dark:text-green-400 mb-4" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-2 transition-colors">Leadership</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors">NCC 'C' Certificate Grade A, Teamwork.</p>
              </div>
            </Reveal>
            <Reveal delay={600}>
              <div className="p-6 bg-orange-50 dark:bg-slate-800 rounded-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full border border-transparent hover:border-orange-200 dark:hover:border-orange-900">
                <Palette className="w-8 h-8 text-orange-600 dark:text-orange-400 mb-4" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-2 transition-colors">Creativity</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors">TV Reality Show Finalist (Painting).</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;