import React from 'react';
import TextInput from './TextInput';

interface TypeInputProps {
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TypeInput: React.FC<TypeInputProps> = ({ type, onChange }) => {
  return (
    <TextInput
      value={type}
      onChange={onChange}
      placeholder="File Type"
    />
  );
};

export default TypeInput;
