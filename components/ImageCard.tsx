import React from 'react';
import type { ImageFile } from '../types';

interface ImageCardProps {
  image: ImageFile;
}

export const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <div className="group relative break-inside-avoid overflow-hidden rounded-lg shadow-lg bg-surface">
      <img
        src={image.preview}
        alt={image.name}
        className="transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-base via-base/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-6 text-bright">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
          <h3 className="font-bold text-sm truncate">{image.name}</h3>
        </div>
      </div>
    </div>
  );
};
