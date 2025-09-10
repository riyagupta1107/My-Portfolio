import React, { useState, useEffect, useRef } from 'react';

// --- Education Data ---
const educationData = [
  {
    institution: 'Thapar Institute of Engineering and Technology',
    degree: 'B.E. COMPUTER ENGINEERING',
    period: 'AUGUST 2023 - 2027',
    description: 'Currently pursuing my undergraduate degree with a focus on concepts like Object-Oriented Programming, Operating Systems, DBMS, Computer Networks, Data Structures and Algorithms, and full stack development. My CGPA is 9.14.'
  },
  {
    institution: "St. Mary's Academy",
    degree: 'CLASS XII (CBSE)',
    period: '2023',
    description: 'Completed my senior secondary education with a focus on Physics, Chemistry, Computer Science and Mathematics, achieving a score of 95.6%.'
  },
  {
    institution: "Sophia Girls' Sr. Sec. School",
    degree: 'CLASS X (CBSE)',
    period: '2021',
    description: 'Built a strong academic foundation and developed a keen interest in computer science and logical reasoning, scoring 97.8%.'
  }
];

// --- A Reusable Component for Scroll-Triggered Animations ---
// We can add a 'delay' prop to this for staggering.
const AnimatedItem = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- The Main Education Page Component ---
function EducationPage() {
  return (
    <div className='bg-lightPink min-h-screen py-16'>
      <div className='max-w-7xl mx-auto px-4 md:px-8 mt-40 md:mt-0'>
        {/* We map over the data to create each section */}
        {educationData.map((edu, index) => (
          <div key={index} className='w-full min-h-[25rem] border-b-2 border-black p-10 flex flex-col justify-center'>
            {/* Each text element is wrapped in the AnimatedItem component with a different delay */}
            <AnimatedItem delay={0}>
              <h1 className='font-myFont1 text-4xl md:text-5xl py-4 text-gray-900'>{edu.institution}</h1>
            </AnimatedItem>
            <AnimatedItem delay={150}>
              <h3 className='font-textFont text-xl md:text-2xl'>{edu.degree}</h3>
            </AnimatedItem>
            <AnimatedItem delay={300}>
              <h3 className='font-textFont text-xl md:text-2xl text-gray-600'>{edu.period}</h3>
            </AnimatedItem>
            <AnimatedItem delay={450}>
              <p className='font-textFont text-lg pt-8 w-full md:w-[90%]'>{edu.description}</p>
            </AnimatedItem>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationPage;
