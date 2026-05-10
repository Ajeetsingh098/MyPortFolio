import React from 'react';
import { motion } from 'framer-motion';
import Favpic from '../assets/FavPic.jpg';


import { Linkedin, Instagram, Mail, Phone, ArrowRight, Briefcase, Zap, Shield } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative flex items-center justify-center min-h-screen px-[5%] md:px-[10%] bg-[#0a0a0a] text-white overflow-hidden font-sans">

            {/* 1. Industrial Background  */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container relative z-10 flex flex-col items-center gap-16 mx-auto lg:flex-row lg:justify-between">

                {/* 2. Content Section  */}
                <div className="max-w-2xl text-center lg:text-left order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 rounded-lg bg-blue-500/5 border border-blue-500/20 backdrop-blur-md"
                    >
                        <Briefcase size={14} className="text-blue-500" />
                        <p className="text-[10px] font-bold tracking-[0.25em] text-blue-400 uppercase">
                            Project Engineer
                        </p>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-5 text-6xl md:text-8xl font-black tracking-tighter"
                    >
                        <span className="text-blue-600">Ajeet Singh</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mb-12 text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-xl"
                    >
                        "I lead solar PV initiatives, leveraging design workflows and IT-integrated management to deliver scalable,
                        high-performance energy solutions."
                    </motion.p>
                    <br />
                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row justify-center gap-5 lg:justify-start"
                    >
                        <span>  <a href='mailto:ajeetsingh.ece06@gmail.com' className="group px-12 cursor-pointer py-1 font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(37,99,235,0.2)]">
                            Hire Me
                        </a> </span>




                        {/**/}
                        <span>  <a
                            href="/Ajeet_Singh_CV.pdf"
                            download="Ajeet_Singh_CV_MJPRU.pdf"
                            className="px-12 py-1 cursor-pointer font-bold text-gray-300 border border-gray-800 rounded-xl hover:bg-white hover:text-black hover:border-white transition-all"
                        >
                            Download CV
                        </a>   </span>

                    </motion.div>

                    {/* Core Values */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-white/5">
                        <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
                            <Zap size={16} className="text-blue-500" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Automation</span>
                        </div>
                        <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
                            <Shield size={16} className="text-blue-500" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Management</span>
                        </div>
                    </div>
                </div>

                {/* 3. Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative order-1 lg:order-2"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-115 lg:h-115">
                        {/* Outer Soft Glow */}
                        <div className="absolute inset-0 bg-blue-600/5 rounded-full blur-[60px]"></div>

                        {/* Main Image Container */}
                        <div className="absolute inset-4 rounded-full border-12 md:border-18 border-[#121212] overflow-hidden shadow-2xl z-10 bg-[#121212]">
                            <img
                                src={Favpic}
                                alt="Ajeet Singh"
                                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 hover:scale-100"
                            />
                        </div>

                        {/* Social Floating Bar */}
                        <div className="absolute -right-2 top-1/2 -translate-y-1/2 flex-col gap-6 p-4 bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/5 rounded-2xl z-20 hidden md:flex shadow-xl">
                            <a href="https://www.linkedin.com/in/ajeet-singh-24399325b" target="_blank"
                                rel="noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors cursor-pointer"><Linkedin size={22} /></a>
                            <a href="https://www.instagram.com/ajeetsingh0406" target="_blank"
                                rel="noreferrer" className="text-gray-500 hover:text-pink-500 transition-colors cursor-pointer"><Instagram size={22} /></a>
                            <a href="mailto:ajeetsingh.ece06@gmail.com" className="text-gray-500 hover:text-red-400 transition-colors cursor-pointer"><Mail size={22} /></a>
                            <a href="tel:+916306343402" className="text-gray-500 hover:text-green-500 transition-colors cursor-pointer"><Phone size={22} /></a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;