import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Wrench, MapPin, Home, Layout, BookText, User } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('bio');

  const skills = [
    { name: "Solar PV Design", category: "Core" },
    { name: "AutoCAD Layouts", category: "Technical" },
    { name: "Railway Signaling", category: "Core" },
    { name: "Industrial Automation", category: "Technical" }
  ];

  // Future Projects yahan add honge
  const projects = [
    {
      title: "Solar PV Site Layout",
      company: "Rayax Energy",
      desc: "Designed single line diagrams and physical layouts for industrial solar projects."
    },
    {
      title: "Railway Signaling Audit",
      company: "N.E. Railway",
      desc: "Hands-on experience with fail-safe interlocking logic systems during internship."
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
              { id: 'blogs', label: 'Blogs', icon: <BookText size={16} /> }
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
              className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            >
              <div className="lg:col-span-7 space-y-8">
                <h2 className="text-4xl font-black tracking-tighter">
                  Ajeet Singh <span className="text-blue-600">/ Engineer</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed font-light">
                  Originally from **Gorakhpur, UP**, and currently working as a 
                  **Project Engineer at Rayax Energy** in Gurugram. I am finishing 
                  my ECE degree at **MJPRU** with a focus on smart infrastructure 
                  and clean energy.
                </p>
                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                  <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                    <GraduationCap className="text-blue-500" /> Education
                  </h3>
                  <p className="text-sm text-gray-300 font-semibold">B.Tech in Electronics & Communication</p>
                  <p className="text-xs text-gray-500 mt-1">M.J.P. Rohilkhand University | 2022 - 2026</p>
                  <p className="text-blue-400 text-xs font-bold mt-2">CGPA: 8.0/10.0</p>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                  <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                    <Wrench className="text-blue-500" /> Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((s, i) => (
                      <span key={i} className="px-4 py-2 bg-[#121212] border border-white/5 rounded-xl text-xs text-gray-400">
                        {s.name}
                      </span>
                    ))}
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
              <div className="p-8 border border-dashed border-white/10 rounded-3xl flex items-center justify-center text-gray-600">
                Next project in progress...
              </div>
            </motion.div>
          )}

          {/* --- BLOGS TAB --- */}
          {activeTab === 'blogs' && (
            <motion.div
              key="blogs"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookText className="text-gray-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">No Blogs Yet</h3>
              <p className="text-gray-500 max-w-sm mx-auto">
                I'll be sharing insights on Solar PV design and engineering trends here soon. Stay tuned!
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default About;