
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', id: 'hero' },
    { name: 'About', path: '/about', id: 'about' },
    { name: 'Experience', path: '/experience', id: 'experience' },
    { name: 'Resume', path: '/Ajeet_Singh_CV.pdf', isResume: true }, 
    { name: 'Contact', path: '/contact', id: 'contact' },
  ];

 
  useEffect(() => {
    if (location.pathname !== '/') {
      
      const currentPath = navLinks.find(link => link.path === location.pathname);
      if (currentPath) setActiveSection(currentPath.id);
      return;
    }

    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', 
      threshold: 0, 
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    
    ['hero', 'about', 'experience', 'contact'].forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1a1a1a]/90 backdrop-blur-md border-b border-gray-800">
      <div className="flex items-center justify-between px-[5%] md:px-[10%] py-5 mx-auto max-w-7xl">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 text-xl font-bold text-white cursor-pointer">
          <span className="flex items-center justify-center w-10 h-10 text-white bg-blue-600 rounded-full shadow-lg shadow-blue-600/20 font-black">
            A
          </span> 
          <span className="tracking-tight">Ajeet Singh</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.name} className="relative">
              {link.isResume ? (
                <a 
                  href={link.path}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-all py-2"
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  to={link.path} 
                  className={`transition-all duration-300 py-2 ${
                    activeSection === link.id 
                    ? "text-blue-500" 
                    : "text-gray-400 hover:text-blue-400"
                  }`}
                >
                  {link.name}
                </Link>
              )}
              {/* Active Indicator Line */}
              {activeSection === link.id && !link.isResume && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white focus:outline-none cursor-pointer"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`absolute top-full left-0 w-full bg-[#1a1a1a] border-b border-gray-800 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
        <ul className="flex flex-col items-center gap-6 py-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.isResume ? (
                <a 
                  href={link.path}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-gray-400 hover:text-blue-500"
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className={`text-lg transition-colors ${
                    activeSection === link.id 
                    ? "text-blue-500 font-bold" 
                    : "text-gray-400 hover:text-blue-500"
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;















// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import { Link, useLocation } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');

//   const navLinks = [
//     { name: 'Home', href: '#hero', id: 'hero' },
//     { name: 'About', href: '#about', id: 'about' },
//     { name: 'Experience', href: '#experience', id: 'experience' },
//     { name: 'Resume', href: '/Ajeet_Singh_CV.pdf', isResume: true }, 
//     { name: 'Contact', href: '#contact', id: 'contact' },
//   ];

  
//   useEffect(() => {
//     const observers = [];
    
//     const observerOptions = {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0.6, 
//     };

//     const observerCallback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
//         }
//       });
//     };

//     const observer = new IntersectionObserver(observerCallback, observerOptions);

    
//     ['hero', 'about', 'experience', 'contact'].forEach((id) => {
//       const element = document.getElementById(id);
//       if (element) observer.observe(element);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-[#1a1a1a]/90 backdrop-blur-md border-b border-gray-800">
//       <div className="flex items-center justify-between px-[5%] md:px-[10%] py-5 mx-auto max-w-7xl">
        
//         {/* Logo Section */}
//         <div className="flex items-center gap-3 text-xl font-bold text-white">
//           <span className="flex items-center justify-center w-10 h-10 text-white bg-blue-600 rounded-full shadow-lg shadow-blue-600/20 font-black">
//             A
//           </span> 
//           <span className="tracking-tight">Ajeet Singh</span>
//         </div>

//         {/* Desktop Navigation */}
//         <ul className="hidden md:flex gap-8 font-medium">
//           {navLinks.map((link) => (
//             <li key={link.name} className="relative">
//               <a 
//                 href={link.href} 
//                 target={link.isResume ? "_blank" : "_self"}
//                 rel={link.isResume ? "noreferrer" : ""}
//                 className={`transition-all duration-300 cursor-pointer py-2 ${
//                   activeSection === link.id 
//                   ? "text-blue-500" 
//                   : "text-gray-400 hover:text-blue-400"
//                 }`}
//               >
//                 {link.name}
//               </a>
//               {/* Active Indicator Line */}
//               {activeSection === link.id && !link.isResume && (
//                 <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button 
//             onClick={() => setIsOpen(!isOpen)} 
//             className="text-white focus:outline-none cursor-pointer"
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       <div className={`absolute top-full left-0 w-full bg-[#1a1a1a] border-b border-gray-800 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
//         <ul className="flex flex-col items-center gap-6 py-8">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <a 
//                 href={link.href} 
//                 target={link.isResume ? "_blank" : "_self"}
//                 rel={link.isResume ? "noreferrer" : ""}
//                 onClick={() => setIsOpen(false)}
//                 className={`text-lg transition-colors cursor-pointer ${
//                   activeSection === link.id 
//                   ? "text-blue-500 font-bold" 
//                   : "text-gray-400 hover:text-blue-500"
//                 }`}
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;









// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

  
//   const navLinks = [
//     { name: 'Home', href: '#hero' },
//     { name: 'About', href: '#about' },
//     { name: 'Experience', href: '#experience' },
//     { name: 'Resume', href: '/Ajeet_Singh_CV.pdf', isResume: true }, 
//     { name: 'Contact', href: '#contact' },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-[#1a1a1a]/90 backdrop-blur-md border-b border-gray-800">
//       <div className="flex items-center justify-between px-[5%] md:px-[10%] py-5 mx-auto max-w-7xl">
        
//         {/* Logo Section */}
//         <div className="flex items-center gap-3 text-xl font-bold text-white">
//           <span className="flex items-center justify-center w-10 h-10 text-white bg-blue-600 rounded-full shadow-lg shadow-blue-600/20 font-black">
//             A
//           </span> 
//           <span className="tracking-tight">Ajeet Singh</span>
//         </div>

//         {/* Desktop Navigation */}
//         <ul className="hidden md:flex gap-8 text-gray-400 font-medium">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <a 
//                 href={link.href} 
    
//                 target={link.isResume ? "_blank" : "_self"}
//                 rel={link.isResume ? "noreferrer" : ""}
//                 className="transition-all duration-300 hover:text-blue-500 hover:tracking-wider cursor-pointer"
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button 
//             onClick={() => setIsOpen(!isOpen)} 
//             className="text-white focus:outline-none cursor-pointer"
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       <div className={`absolute top-full left-0 w-full bg-[#1a1a1a] border-b border-gray-800 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
//         <ul className="flex flex-col items-center gap-6 py-8 text-gray-400">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <a 
//                 href={link.href} 
//                 target={link.isResume ? "_blank" : "_self"}
//                 rel={link.isResume ? "noreferrer" : ""}
//                 onClick={() => setIsOpen(false)}
//                 className="text-lg hover:text-blue-500 transition-colors cursor-pointer"
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

















// // import React, { useState } from 'react';
// // import { Menu, X } from 'lucide-react';

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const navLinks = [
// //     { name: 'Home', href: '#home' },
// //     { name: 'About', href: '#about' },
// //     { name: 'Experience', href: '#experience' },
// //     { name: 'Resume', href: '#Ajeet_Singh_CV  target="_blank" rel="noreferrer"' },
// //     { name: 'Contact', href: '#contact' },
// //   ];

// //   return (
// //     <nav className="fixed top-0 left-0 w-full z-50 bg-[#1a1a1a]/90 backdrop-blur-md border-b border-gray-800">
// //       <div className="flex items-center justify-between px-[5%] md:px-[10%] py-5 mx-auto max-w-7xl">
        
// //         {/* Logo Section */}
// //         <div className="flex items-center gap-3 text-xl font-bold text-white">
// //           <span className="flex items-center justify-center w-10 h-10 text-white bg-blue-600 rounded-full shadow-lg shadow-blue-600/20">
// //             A
// //           </span> 
// //           <span className="tracking-tight">Ajeet Singh</span>
// //         </div>

// //         {/* Desktop Navigation */}
// //         <ul className="hidden md:flex gap-8 text-gray-400 font-medium">
// //           {navLinks.map((link) => (
// //             <li key={link.name}>
// //               <a 
// //                 href={link.href} 
// //                 className="transition-all duration-300 hover:text-blue-500 hover:tracking-wider"
// //               >
// //                 {link.name}
// //               </a>
// //             </li>
// //           ))}
// //         </ul>

// //         {/* Mobile Menu Button */}
// //         <div className="md:hidden">
// //           <button 
// //             onClick={() => setIsOpen(!isOpen)} 
// //             className="text-white focus:outline-none"
// //           >
// //             {isOpen ? <X size={28} /> : <Menu size={28} />}
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile Menu Dropdown */}
// //       <div className={`absolute top-full left-0 w-full bg-[#1a1a1a] border-b border-gray-800 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
// //         <ul className="flex flex-col items-center gap-6 py-8 text-gray-400">
// //           {navLinks.map((link) => (
// //             <li key={link.name}>
// //               <a 
// //                 href={link.href} 
// //                 onClick={() => setIsOpen(false)}
// //                 className="text-lg hover:text-blue-500 transition-colors"
// //               >
// //                 {link.name}
// //               </a>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;