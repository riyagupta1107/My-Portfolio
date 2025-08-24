import React from 'react';

// This component is now a "presentational" component.
// It receives props and renders UI based on them. No logic or state here.
function ProjectCards({ project, isActive }) {
    return (
      <div 
        className={`
          flex-shrink-0 w-72 md:w-80 mx-[-0.9rem] snap-center 
          transition-transform duration-500 ease-in-out relative
          ${isActive ? 'z-20 scale-110' : 'z-10 scale-90 opacity-70'}
        `}
      >
        <div 
          className="bg-white shadow-lg border border-black overflow-hidden"
          style={{
            backgroundColor: isActive ? '#f9fbee' : '#feeede',
            height: project.height || '32rem',
          }}
        >
            <div className='p-10'>
                <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-40 object-cover rounded-xl border border-black"
                />
            </div>
          
          <div className="px-10 text-center">
            <h3 className="text-xl font-tai font-bold mb-2">{project.title}</h3>
            <p className="text-xs font-myFont text-gray-500 mb-3"><strong>Tech Stack:</strong> {project.techStack}</p>
            <p className="text-gray-700 mb-4 font-myFont text-sm">{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block border border-black bg-orange-300 py-2 px-4 rounded-full hover:bg-gray-700 hover:text-white transition-colors font-myFont text-sm text-center mt-2"
            >
              GITHUB
            </a>
          </div>
        </div>
      </div>
    );
}
export default ProjectCards;