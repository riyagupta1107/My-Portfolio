import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar({ projectRef, skillsRef, expRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false); // Close the menu after a link is clicked
  };
  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    // The 'relative' class is important for positioning the absolute mobile menu
    <nav className='sticky top-0 bg-lightGreen border border-black z-50'>
      <div className=' w-full '>
        <div className='flex justify-around items-center h-[80px]'>

          {/* Primary Nav: Hidden on mobile, visible on desktop */}
          <div className='hidden md:flex w-[80%] justify-around items-center text-lg font-textFont'>
            <button onClick={() => handleNavigate("/")} className='hover:text-gray-500'>Home</button>
            <button onClick={() => scrollToSection(skillsRef)}>Skills</button>
            <button onClick={() => handleNavigate("/education")} className='hover:text-gray-500'>Education</button>
            <button onClick={() => scrollToSection(expRef)} className='hover:text-gray-500'>Experience</button>
            <button onClick={() => scrollToSection(projectRef)} className='hover:text-gray-500'>Projects</button>
            <button onClick={() => handleNavigate("/contact")} className='hover:text-gray-500'>Connect with me</button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className='md:hidden flex items-center ml-auto px-10'>
            <button onClick={() => setIsOpen(!isOpen)} className='z-50'>
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* mobile menu
        This div is positioned absolutely and its visibility is toggled by 'isOpen'.
      */}
      <div 
        className={`md:hidden absolute top-[80px] left-0 w-full bg-lightGreen border-t border-black text-md font-myFont transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className='flex flex-col items-center p-5 space-y-4'>
          <button onClick={() => handleNavigate("/")} className='w-full text-center'>Home</button>
          <button onClick={() => scrollToSection(skillsRef)} className='w-full text-center'>Skills</button>
          <button onClick={() => handleNavigate("/education")} className='w-full text-center'>Education</button>
          <button onClick={() => scrollToSection(expRef)} className='w-full text-center'>Experience</button>
          <button onClick={() => scrollToSection(projectRef)} className='w-full text-center'>Projects</button>
          <button onClick={() => handleNavigate("/contact")} className='w-full text-center'>Connect with me</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;