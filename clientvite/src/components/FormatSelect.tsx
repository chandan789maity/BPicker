import React from 'react';

interface FormatSelectProps {
  format: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FormatSelect: React.FC<FormatSelectProps> = ({ format, onChange }) => {
  return (
    <div className=''>
    <select value={format} onChange={onChange} className='h-8 rounded-xl bg-black border-[1px] border-green-700 px-6 '>
      <option value="png">PNG</option>
      <option value="jpg">JPG</option>
    </select>
    </div>
  );
};

export default FormatSelect;
