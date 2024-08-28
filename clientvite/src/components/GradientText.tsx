import React from 'react';

const GradientText: React.FC = () => {
  return (
    <div>
      <h1 className="text-7xl font-bold pt-7 bg-gradient-to-r from-gemini-start to-gemini-end bg-clip-text text-transparent bg-[length:200%_200%] animate-text-gradient">
        Remove Image
      </h1>
      <h1 className="text-7xl font-bold bg-gradient-to-r from-gemini-start to-gemini-end bg-clip-text text-transparent bg-[length:200%_200%] animate-text-flip">
        Background
      </h1>
      <h1 className='text-2xl font-bold text-orange-400 mt-7'>100% free to use</h1>
      <a href='#file' className=''>
      <div className='h-20 bg-blue-600 w-1/2 mx-auto mt-11 rounded-full flex justify-center items-center hover:bg-violet-950 duration-500 shadow-2xl shadow-orange-500'>
      <h1 className='text-2xl font-bold text-white '>Upload Image</h1>
      </div>
      </a>

      
    </div>
  );
};

export default GradientText;
