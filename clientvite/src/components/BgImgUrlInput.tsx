import React from 'react';
import TextInput from './TextInput';

interface BgImgUrlInputProps {
  bgimgurl: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BgImgUrlInput: React.FC<BgImgUrlInputProps> = ({ bgimgurl, onChange }) => {
  return (
    <TextInput
      value={bgimgurl}
      onChange={onChange}
      placeholder="your bg-image URL"
      
    />
    
  
  );
};

export default BgImgUrlInput;
