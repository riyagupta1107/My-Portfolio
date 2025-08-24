import React, { useState, useRef, useEffect } from 'react';
import ProjectCards from './ProjectCards'; 

// --- Project Data ---
const projects = [
    {
        title: 'Hospital Management System',
        techStack: 'React, TailwindCSS, Node.js, MySQL',
        description: 'A web app that manages hospital data like appointments, patient records, staff data & billing.',
        link: '#',
        imageUrl: '',
        bgColor: '#feeede',
    },
    {
        title: 'Portfolio Website',
        techStack: 'React, TailwindCSS, HTML, CSS, JavaScript',
        description: 'A personal portfolio website to showcase projects and skills, built with modern web technologies.',
        link: '#',
        imageUrl: '',
        bgColor: '#feeede',
    },
    {
        title: 'Car Price Predictor',
        techStack: 'Python, Flask, Scikit-learn',
        description: 'A machine learning model deployed as a web app to predict the resale value of used cars.',
        link: '#',
        imageUrl: '',
        bgColor: '#feeede',
    },
    {
        title: 'Personal Budget Tracker',
        techStack: 'React, JavaScript, Chart.js',
        description: 'An application to help users track their income and expenses with visual data representations.',
        link: '#',
        imageUrl: '',
        bgColor: '#feeede',
    }
];

function ProjectSection() {
    const scrollContainerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // This effect detects which card is in the center of the scroll container
    useEffect(() => {
        const handleScroll = () => {
            const container = scrollContainerRef.current;
            if (!container) return;

            const scrollLeft = container.scrollLeft;
            const containerCenter = container.offsetWidth / 2;
            
            let closestIndex = 0;
            let closestDistance = Infinity;

            // Find the card closest to the center
            for (let i = 0; i < container.children.length; i++) {
                const child = container.children[i];
                const childCenter = child.offsetLeft - scrollLeft + child.offsetWidth / 2;
                const distance = Math.abs(containerCenter - childCenter);
                
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = i;
                }
            }
            setActiveIndex(closestIndex);
        };

        const container = scrollContainerRef.current;
        container.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='bg-lightPink min-h-screen py-20 border-t border-black'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex flex-col items-center mb-16'>
                    <h1 className='font-tai text-4xl md:text-5xl text-center font-bold pb-6'>TAKE A LOOK AT MY PROJECTS</h1>
                    <p className='font-myFont text-base text-center w-full md:w-[60%]'>
                        Here are a few projects I've worked on recently. I love turning ideas into beautiful, functional, and user-friendly products.
                    </p>
                </div>

                {/* --- Horizontal Scrolling Container --- */}
                <div 
                ref={scrollContainerRef}
                className="flex w-full overflow-x-auto py-10 snap-x snap-mandatory px-[40%] hide-scrollbar"
                >
                {projects.map((project, index) => (
                    <ProjectCards 
                    key={index} 
                    project={project} 
                    isActive={index === activeIndex} 
                    />
                ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectSection;
