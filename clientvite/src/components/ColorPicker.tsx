import React, { useState, useEffect, useRef } from 'react';
import { SketchPicker, ColorResult } from 'react-color';

interface ColorPickerProps {
  color: string;
  onChange: (color: ColorResult) => void;
  onToggle: () => void;
  showPicker: boolean;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChange, onToggle, showPicker }) => {
  const pickerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Close the color picker if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        onToggle();
      }
    };

    if (showPicker) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPicker, onToggle]);

  return (
    <div style={{ position: 'relative' }} ref={buttonRef} className="flex items-center">
      <label className="mr-2 bg-violet-800 text-white px-4 py-2 rounded-xl ">Background Color:</label>
      <div
        style={{
          width: '24px',
          height: '24px',
          backgroundColor: color,
          border: '1px solid #ccc',
          cursor: 'pointer',
          borderRadius: '4px',
        }}
        onClick={onToggle}
      />
      <input
        type="text"
        value={color}
        readOnly
        onClick={onToggle}
        style={{
          marginLeft: '10px',
          cursor: 'pointer',
          border: '1px solid blue',
          padding: '8px 10px',
          borderRadius: '10px',
        }}
      />
      {showPicker && (
        <div 
          ref={pickerRef} 
          style={{ 
            position: 'absolute', 
            top: '100%', 
            left: 0, 
            zIndex: 1000, 
            marginTop: '8px', 
          }}>
          <SketchPicker color={color} onChangeComplete={onChange} />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
