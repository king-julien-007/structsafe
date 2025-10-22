import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group bg-surface/50 border border-overlay rounded-lg p-8 text-center cursor-pointer
                 hover:bg-overlay hover:border-muted/50 transform hover:-translate-y-2 transition-all duration-300 ease-in-out"
    >
      {icon}
      <h3 className="text-xl font-bold text-subtle">{title}</h3>
    </div>
  );
};
