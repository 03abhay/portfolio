
import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div>
            <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-colors duration-300 cursor-default">Abhay Singh</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              A passionate Data Scientist leveraging machine learning to solve real-world problems. 
              Open to opportunities in Data Science, ML, and Analytics.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/03abhay" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/10">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/abhay03singh" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#0077b5] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#0077b5]/30">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:Abhay242singh@gmail.com" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/30">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3 hover:text-white transition-colors duration-300 group cursor-default">
                <MapPin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                Mukerian, India, 144222
              </li>
              <li>
                <a href="tel:+917658870955" className="flex items-center gap-3 hover:text-white transition-colors duration-300 group">
                  <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  +91 7658870955
                </a>
              </li>
              <li>
                <a href="mailto:Abhay242singh@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors duration-300 group">
                  <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  Abhay242singh@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#home" className="hover:text-primary transition-all duration-300 hover:pl-2 block">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-all duration-300 hover:pl-2 block">About</a></li>
              <li><a href="#projects" className="hover:text-primary transition-all duration-300 hover:pl-2 block">Projects</a></li>
              <li><a href="#experience" className="hover:text-primary transition-all duration-300 hover:pl-2 block">Experience</a></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Abhay Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
