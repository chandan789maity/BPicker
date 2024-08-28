import React from 'react';

interface CropCheckboxProps {
  crop: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CropCheckbox: React.FC<CropCheckboxProps> = ({ crop, onChange }) => {
  return (
    <div className=' bg-purple-600 w-24  py-3 ml-6 rounded-xl text-stone-50 flex items-center justify-center'>
    <label>
      Crop:
      <input
        type="checkbox"
        checked={crop}
        onChange={onChange}
        className="ml-2 border-indigo-800 px-6 rounded-full"
      />
    </label>
    </div>
  );
};

export default CropCheckbox;
