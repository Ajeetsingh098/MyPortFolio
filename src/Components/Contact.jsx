import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'; 
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, CheckCircle } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    
    const SERVICE_ID = "Singh@098"; 
    const TEMPLATE_ID = "template_wjuhoya";
    const PUBLIC_KEY = "V-KYWTymZnCFp64F4";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setIsSuccess(true);
          setIsSending(false);
          form.current.reset(); 
          setTimeout(() => setIsSuccess(false), 5000); 
      }, (error) => {
          console.log(error.text);
          alert("Something went wrong, please try again.");
          setIsSending(false);
      });
  };

  return (
    <section id="contact" className="relative py-24 px-[5%] md:px-[10%] bg-[#0a0a0a] text-white overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container relative z-10 mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-600/10 border border-blue-500/20"
          >
            <p className="text-[10px] font-bold tracking-[0.3em] text-blue-400 uppercase">Get In Touch</p>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl tracking-tighter"
          >
            <span className="text-blue-600"> Let's Build Something Great</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side  */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="max-w-md">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Currently based in Gurugram, Haryana. I am open to discussing new 
                opportunities in Solar PV design, automation projects, or technical operations.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-600/50 transition-colors">
                  <Mail className="text-blue-500" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Email Me</p>
                  <p className="text-gray-200 font-medium">ajeetsingh.ece06@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-600/50 transition-colors">
                  <Phone className="text-blue-500" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Call Me</p>
                  <p className="text-gray-200 font-medium">+91 6306343402</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-600/50 transition-colors">
                  <MapPin className="text-blue-500" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Location</p>
                  <p className="text-gray-200 font-medium">Gurugram, Haryana-122003</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side:*/}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-xl shadow-2xl"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    name="name" 
                    type="text" 
                    required
                    placeholder="Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-blue-600 outline-none transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    name="email" 
                    type="email" 
                    required
                    placeholder="email@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-blue-600 outline-none transition-all" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Subject</label>
                <input 
                  name="title" 
                  type="text" 
                  required
                  placeholder="Inquiry about"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-blue-600 outline-none transition-all" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Your Message</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  required
                  placeholder="How can I help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-blue-600 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSending}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-900/20 group disabled:bg-gray-600"
              >
                {isSending ? "Sending..." : "Send Message"} 
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              {/* Success Message UI */}
              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center gap-2 text-green-400 font-bold bg-green-400/10 py-3 rounded-lg border border-green-400/20"
                >
                  <CheckCircle size={18} /> Message Sent Successfully!
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;