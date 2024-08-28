import React from 'react';
import TextInput from './TextInput';

interface FilenameInputProps {
  filename: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilenameInput: React.FC<FilenameInputProps> = ({ filename, onChange }) => {
  return (
    
    <TextInput
      value={filename}
      onChange={onChange}
      placeholder="Output Filename"
    />
  );
};

export default FilenameInput;
