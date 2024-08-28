import React from 'react';
import TextInput from './TextInput';

interface SizeInputProps {
  size: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SizeInput: React.FC<SizeInputProps> = ({ size, onChange }) => {
  return (
    <>
    <TextInput
      value={size}
      onChange={onChange}
      placeholder="Size of Image"
    />
    </>
  );
};

export default SizeInput;
