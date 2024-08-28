import React from 'react';
import TextInput from './TextInput';

interface BgImgFileInputProps {
  bgimgfile: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BgImgFileInput: React.FC<BgImgFileInputProps> = ({ bgimgfile, onChange }) => {
  return (
    <TextInput
      value={bgimgfile}
      onChange={onChange}
      placeholder="Background Image File"
    />
  );
};

export default BgImgFileInput;
