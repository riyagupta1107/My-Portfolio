import React from 'react';

// Make sure you have a CSS file (e.g., index.css or App.css)
// imported in your project that contains the @keyframes for the animation.

function Scroller() {
  return (
    // 1. Parent Container: This hides the overflowing content.
    <div className='bg-myOrange h-[60px] w-full overflow-hidden flex items-center border border-y-black'>
      
      {/* 2. Animated Container: This div holds both copies and is the one that moves.
         - `whitespace-nowrap`: Prevents the text from wrapping to a new line.
         - `animate-scroll`: This is a custom class you'll create to apply the animation.
      */}
      <div className='flex whitespace-nowrap animate-scroll'>
        
        <div className='font-myFont flex items-center text-base'>
          <span className='mx-4'>Full Stack Developer</span>
          <span className=''>|</span>
          <span className='mx-4 te'>Problem Solving Enthusiast</span>
          <span className=''>|</span>
          <span className='mx-4 te'>Designer</span>
          <span className=''>|</span>
        </div>

        <div className='font-myFont flex items-center text-base'>
          <span className='mx-4'>Full Stack Developer</span>
          <span className=''>|</span>
          <span className='mx-4 '>Problem Solving Enthusiast</span>
          <span className=''>|</span>
          <span className='mx-4 '>Designer</span>
          <span className=''>|</span>
        </div>

        <div className='font-myFont flex items-center text-base'>
          <span className='mx-4 '>Full Stack Developer</span>
          <span className=''>|</span>
          <span className='mx-4 '>Problem Solving Enthusiast</span>
          <span className=''>|</span>
          <span className='mx-4 '>Designer</span>
          <span className=''>|</span>
        </div>

        <div className='font-myFont flex items-center text-base'>
          <span className='mx-4 '>Full Stack Developer</span>
          <span className=''>|</span>
          <span className='mx-4 '>Problem Solving Enthusiast</span>
          <span className=''>|</span>
          <span className='mx-4 '>Designer</span>
          <span className=''>|</span>
        </div>

      </div>
    </div>
  );
}

export default Scroller;