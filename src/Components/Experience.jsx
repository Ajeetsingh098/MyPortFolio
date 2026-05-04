import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Zap, Train } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Rayax Energy",
      role: "Project Engineer",
      period: "Present",
      location: "Gurugram, Haryana",
      description: "Leading solar PV initiatives, managing design workflows, and delivering high-performance energy solutions. Responsible for industrial site layouts and project management.",
      icon: <Zap className="text-blue-500" size={24} />,
      isCurrent: true
    },
    {
      company: "Indian Railway",
      role: "Summer Intern (Signal & Telecommunication)",
      period: "June 2025 – August 2025",
      location: "Gorakhpur, UP",
      description: "Worked within the Signal & Telecommunication (S&T) department. Gained hands-on experience in auditing interlocking systems and understanding railway signaling infrastructure.",
      icon: <Train className="text-blue-500" size={24} />,
      isCurrent: false
    }
  ];

  return (
    <section id="experience" className="relative py-24 px-[5%] md:px-[10%] bg-[#0a0a0a] text-white">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container relative z-10 mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-600/10 border border-blue-500/20"
          >
            <p className="text-[10px] font-bold tracking-[0.3em] text-blue-400 uppercase">Career Path</p>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-black tracking-tighter"
          >
            Professional <span className="text-blue-600">Journey</span>
          </motion.h2>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative">
          {/* Vertical Line for Timeline */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-white/5 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-0 md:pl-20 group"
            >
              {/* Icon Dot for Desktop */}
              <div className="absolute left-4 top-0 w-8 h-8 rounded-full bg-[#121212] border border-white/10  items-center justify-center z-20 group-hover:border-blue-600 transition-colors hidden md:flex">
                <div className={`w-2 h-2 rounded-full ${exp.isCurrent ? 'bg-blue-600 animate-pulse' : 'bg-gray-600'}`}></div>
              </div>

              {/* Experience Card */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl hover:border-blue-600/30 transition-all shadow-xl group-hover:shadow-blue-900/10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                      <p className="text-blue-500 font-medium">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 font-light leading-relaxed max-w-3xl">
                  {exp.description}
                </p>

                {exp.isCurrent && (
                  <div className="mt-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Active Role</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;