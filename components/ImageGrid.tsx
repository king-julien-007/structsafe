import React from 'react';
import { ImageCard } from './ImageCard';
import type { ImageFile } from '../types';

interface ImageGridProps {
  images: ImageFile[];
}

export const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className="w-full columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};
