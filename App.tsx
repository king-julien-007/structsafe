import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Header } from './components/Header';
import { ImageUploader } from './components/ImageUploader';
import { ImageGrid } from './components/ImageGrid';
import { Features } from './components/Features';
import { About } from './components/About';
import { Reconstruction } from './components/Reconstruction';
import type { ImageFile } from './types';

const App: React.FC = () => {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [page, setPage] = useState<'home' | 'about' | 'reconstruction'>('home');

  const handleUpload = (files: File[]) => {
    const newImageFiles: ImageFile[] = files.map((file) => ({
      id: uuidv4(),
      file,
      name: file.name,
      preview: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...newImageFiles]);
  };

  const handleClearAll = () => {
    images.forEach(image => URL.revokeObjectURL(image.preview));
    setImages([]);
  };

  const renderHomePage = () => (
    <main className="container mx-auto px-4 flex-grow flex flex-col items-center">
      <div className="max-w-3xl mx-auto text-center py-16">
        <h2 className="text-5xl md:text-7xl font-black mb-4 text-bright">
          <span
            className="inline-block opacity-0 animate-fade-in-up"
            style={{ animationDelay: '50ms' }}
          >
            Structural
          </span>{' '}
          <span
            className="inline-block opacity-0 animate-fade-in-up"
            style={{ animationDelay: '150ms' }}
          >
            Analysis,
          </span>
          <br />
          <span
            className="inline-block opacity-0 animate-fade-in-up"
            style={{ animationDelay: '250ms' }}
          >
            Reimagined.
          </span>
        </h2>
        <p
          className="text-muted text-lg max-w-2xl mx-auto opacity-0 animate-fade-in-up"
          style={{ animationDelay: '400ms' }}
        >
          Upload your structural images. This platform is designed for high-precision visual asset management and review.
        </p>
        <div
          className="mt-10 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '600ms' }}
        >
          <ImageUploader onUpload={handleUpload} />
        </div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto animate-fade-in-up pb-16" style={{animationDelay: '100ms'}}>
        {images.length > 0 && (
           <div className="flex justify-end mb-4">
            <button onClick={handleClearAll} className="text-muted hover:text-bright transition-colors text-sm">Clear All</button>
          </div>
        )}
        <ImageGrid images={images} />
      </div>

      <Features />

    </main>
  );
  
  const renderPage = () => {
    switch (page) {
      case 'home':
        return renderHomePage();
      case 'about':
        return <About />;
      case 'reconstruction':
        return <Reconstruction />;
      default:
        return null;
    }
  }

  return (
    <div className="min-h-screen bg-transparent flex flex-col">
      <Header currentPage={page} setPage={setPage} />
      {renderPage()}
    </div>
  );
};

export default App;
