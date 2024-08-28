import React from 'react';

interface TextInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className='pr-7 pl-2 m-3 py-3 bg-slate-950 rounded-xl border-[1px] border-indigo-800'
    />
  );
};

export default TextInput;
