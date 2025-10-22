import React from 'react';
import { CrackIcon } from './icons/CrackIcon';

type Page = 'home' | 'about' | 'reconstruction';

interface HeaderProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, setPage }) => {
  const navLinkClasses = (page: Page) => 
    `px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
      currentPage === page 
        ? 'text-bright bg-overlay' 
        : 'text-muted hover:text-bright'
    }`;

  return (
    <header className="border-b border-surface sticky top-0 bg-base/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-start space-x-10">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setPage('home')}>
            <CrackIcon className="w-8 h-8 text-bright" />
            <h1 className="text-2xl font-bold tracking-wider text-bright">
              STRUCTSAFE
            </h1>
          </div>
          <nav className="flex items-center space-x-2">
            <button onClick={() => setPage('home')} className={navLinkClasses('home')}>
              Home
            </button>
            <button onClick={() => setPage('about')} className={navLinkClasses('about')}>
              About
            </button>
            <button onClick={() => setPage('reconstruction')} className={navLinkClasses('reconstruction')}>
              Reconstruction
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};