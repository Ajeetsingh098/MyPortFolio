
import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] selection:bg-blue-600 selection:text-white">
      <Navbar />
      <div className="h-20 md:hidden"></div>
      <Hero />
      <Contact></Contact>
    </div>
  );
}

export default App;