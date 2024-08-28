import React from 'react';
import { ImgComparisonSlider } from '@img-comparison-slider/react';

interface ImageComparisionProps {
  beforeSrc: string;
  afterSrc: string;
}

export const ImageComparision: React.FC<ImageComparisionProps> = ({ beforeSrc, afterSrc }) => {
  return (
    <div className="rounded-3xl w-2/3  mx-auto shadow-xl">
      <ImgComparisonSlider className="rounded-3xl fit">
        <img 
          slot="first" 
          src={beforeSrc} 
          alt="Before" 
          className="object-cover w-full h-full rounded-3xl"
        />
        <img 
          slot="second" 
          src={afterSrc} 
          alt="After" 
          className="object-cover w-full h-full rounded-3xl"
        />
      </ImgComparisonSlider>
    </div>
  );
};
