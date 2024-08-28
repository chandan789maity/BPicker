import React, { useState } from "react";
import { ImageComparision } from "../../../components/ImageComparision";
import bg1 from "../../../assets/Background/bg1.png"
import bg2 from "../../../assets/Background/bg2.png"

// Define a union type for the allowed keys
type ComparisonType = "people" | "statue";

export const ComparisonSection: React.FC = () => {
  // Use the union type for the state
  const [activeComparison, setActiveComparison] =
    useState<ComparisonType>("people");

  // Define the comparisons object with the allowed keys
  const comparisons: Record<
    ComparisonType,
    { beforeSrc: string; afterSrc: string }
  > = {
    people: {
      beforeSrc:bg1,
      
      afterSrc:bg2,
    },
    statue: {
      beforeSrc:
        "https://static6.depositphotos.com/1003434/607/i/450/depositphotos_6071465-stock-photo-student.jpg",
      afterSrc: "https://img-comparison-slider.sneas.io/demo/images/after.webp",
    },
  };

  return (
    <div className="bg-black text-white p-8 mt-28">
      <h1 className="text-4xl font-bold mb-4 animate-text-gradient text-fuchsia-900">Compare Sections</h1>
    
      <div className="flex gap-12 mb-8 justify-center mt-9">
        <button 
        onClick={() => setActiveComparison("people")}
        
        
        className="overflow-hidden w-32 p-2 h-12 bg-black text-white border-none rounded-full shadow-lg shadow-purple-400 text-xl font-bold cursor-pointer relative z-10 group">
          Cars
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
          <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
            Compare
          </span>
        </button>
        <button 
       onClick={() => setActiveComparison("statue")}
        
        
        className="overflow-hidden w-32 p-2 h-12 bg-black text-white border-none rounded-full shadow-lg shadow-purple-400 text-xl font-bold cursor-pointer relative z-10 group">
          People
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
          <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
            Compare
          </span>
        </button>

      </div>

      <div className="mt-4">
        <ImageComparision 
          beforeSrc={comparisons[activeComparison].beforeSrc}
          afterSrc={comparisons[activeComparison].afterSrc}
        />
      </div>
    </div>
  );
};
