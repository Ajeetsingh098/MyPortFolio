
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="bg-[#0a0a0a] min-h-screen">
        <Navbar />
        
        <main className="pt-20"> 
          <Routes>
            {/* Home Page:  */}
            <Route path="/" element={<Hero />} />
            
            {/* About Page:  */}
            <Route path="/about" element={<About />} />
            
            {/* Experience Page */}
            <Route path="/experience" element={<Experience />} />
            
            {/* Contact Page */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;








// import React from 'react';
// import Navbar from './Components/Navbar';
// import Hero from './Components/Hero';
// import Contact from './Components/Contact';
// import Footer from './Components/Footer';
// import Experience from './Components/Experience';


// function App() {
//   return (
//     <div className="min-h-screen bg-[#1a1a1a] selection:bg-blue-600 selection:text-white">
//       <Navbar />
//       <div className="h-20 md:hidden"></div>
//       <Hero />
//       <Experience></Experience>
//       <Contact></Contact>
//       <Footer />
//     </div>
//   );
// }

// export default App;