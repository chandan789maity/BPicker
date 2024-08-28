import React from 'react';

interface ImageResultProps {
  resultImage: string | null;
  filename: string;
}

const ImageResult: React.FC<ImageResultProps> = ({ resultImage, filename }) => {
  if (!resultImage) return null;

  return (
    <div className='flex flex-col align-middle items-center bg-black mt-4'>
      <h2 className='text-white text-xl mb-5 mt-6'>Result:</h2>
      <img src={resultImage} alt="Processed" style={{ maxWidth: '30%', height: 'auto',borderRadius:'30px' }} />
      <a href={resultImage} download={filename} className='bg-purple-500 text-white py-2 px-4 rounded-xl mt-5'>Download Image</a>
    </div>
  );
};

export default ImageResult;
