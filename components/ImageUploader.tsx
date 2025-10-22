import React, { useCallback, useRef } from 'react';

interface ImageUploaderProps {
  onUpload: (files: File[]) => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onUpload }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      onUpload(Array.from(event.target.files));
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <>
      <input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
        multiple
      />
      <button
        onClick={handleClick}
        className="px-10 py-4 bg-transparent text-bright font-bold rounded-lg border-2 border-bright hover:bg-bright hover:text-base transition-all duration-300 ease-in-out"
      >
        UPLOAD IMAGE
      </button>
    </>
  );
};
