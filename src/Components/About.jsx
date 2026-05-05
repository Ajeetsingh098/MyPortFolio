import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Wrench, Layout, User, Zap, CheckCircle2, MapPin, Home } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('bio');

  const skills = [
    { name: "Solar PV Design", category: "Core" },
    { name: "AutoCAD Layouts (SLD)", category: "Technical" },
    { name: "Project Management", category: "Soft Skill" },
    { name: "Industrial Automation (Scada)", category: "Technical" },
    { name: "PVsyst", category: "Technical" },
    { name: "MS Excel", category: "Technical" }
  ];

  

  const projects = [
    {
      title: "Solar PV Site Layout",
      company: "Rayax Energy",
      desc: "Designed single line diagrams and physical layouts for industrial solar projects."
    },
    {
      title: "Railway Signaling Audit",
      company: "N.E. Railway",
      desc: "Hands-on experience with fail-safe interlocking logic systems and railway infrastructure design during internship."
    }
  ];

  return (
    <section id="about" className="relative py-32 px-[5%] md:px-[10%] bg-[#0a0a0a] text-white min-h-screen">
      
      <div className="container mx-auto relative z-10">
        
        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-xl">
            {[
              { id: 'bio', label: 'My Bio', icon: <User size={16} /> },
              { id: 'projects', label: 'Projects', icon: <Layout size={16} /> },
              { id: 'skills', label: 'Skills', icon: <Zap size={16} /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 hover:text-white'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* --- BIO TAB --- */}
          {activeTab === 'bio' && (
            <motion.div
              key="bio"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto space-y-12"
            >
              <div className="space-y-6 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
                  <span className="text-blue-600">I'm Ajeet Singh</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed font-light">
                  I'm from Deoria, UP and currently working as a 
                  <span className="text-white"> Project Engineer at Rayax Energy</span> in Gurugram. 
                  I am a final-year ECE student at <span className="text-blue-500">MJPRU Bareilly</span>, 
                  passionate about smart infrastructure and renewable energy systems.
                </p>
                
                {/* Quick Info Tags */}
                <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                   <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">
                      <Home size={14} className="text-blue-500" /> Deoria, UP
                   </div>
                   <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">
                      <MapPin size={14} className="text-blue-500" /> Gurugram, Haryana
                   </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <GraduationCap size={120} />
                </div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <GraduationCap className="text-blue-500" /> Academic Background
                </h3>
                <div className="space-y-2">
                  <p className="text-lg text-gray-200 font-semibold">B.Tech in Electronics & Communication</p>
                  <p className="text-blue-400 font-medium">M.J.P. Rohilkhand University Bareilly</p>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5">
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Batch 2022 - 2026</span>
                    <span className="text-blue-500 font-black">CGPA: 8.0/10.0</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* --- PROJECTS TAB --- */}
          {activeTab === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {projects.map((p, i) => (
                <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:border-blue-600 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-500 transition-colors">{p.title}</h3>
                    <span className="text-[10px] bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full font-bold uppercase">{p.company}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
              <div className="p-8 border border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center text-gray-600 gap-2">
                <Layout size={24} />
                <span className="text-sm font-medium">Next project in progress...</span>
              </div>
            </motion.div>
          )}

          {/* --- SKILLS TAB */}
          {activeTab === 'skills' && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {skills.map((s, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 group hover:bg-blue-600/5 hover:border-blue-600/50 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <CheckCircle2 size={18} className="text-blue-500 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-gray-500 tracking-widest group-hover:text-blue-400">{s.category}</p>
                    <p className="text-white font-bold">{s.name}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default About;