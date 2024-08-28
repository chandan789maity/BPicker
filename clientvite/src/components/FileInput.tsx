import React, { useState } from 'react';

interface FileInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput: React.FC<FileInputProps> = ({ onChange }) => {
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewSrc(null);
    }
    onChange(e);
  };

  return (
    <div className="flex items-center justify-center w-1/4 mx-auto shadow-xl shadow-blue-800 rounded-3xl mb-8 mt-6 ">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-36 rounded-3xl cursor-pointer dark:bg-violet-700 dark:shadow-xl"
      >
        {previewSrc ? (
          <img
            src={previewSrc}
            alt="Selected"
            className="w-full h-full object-cover rounded-3xl"
          />
        ) : (
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Upload Your Image</span> or drag
              and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              PNG, JPG (MAX. 800x400px)
            </p>
          </div>
        )}
        <input
          id="dropzone-file"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default FileInput;
