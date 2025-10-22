import React, { useState } from 'react';
import { FeatureCard } from './FeatureCard';
import { Modal } from './Modal';
import { AnalysisIcon } from './icons/AnalysisIcon';
import { ManagementIcon } from './icons/ManagementIcon';
import { ReconstructionIcon } from './icons/ReconstructionIcon';

const featuresData = [
  {
    icon: <AnalysisIcon className="w-10 h-10 mb-4 text-muted group-hover:text-bright transition-colors" />,
    title: 'High-Precision Detection',
    description: 'Utilizing state-of-the-art computer vision models, our AI meticulously scans every pixel of your uploaded images to identify cracks and fissures with unparalleled accuracy. It distinguishes between cosmetic blemishes and significant structural faults, providing you with actionable insights.',
  },
  {
    icon: <ManagementIcon className="w-10 h-10 mb-4 text-muted group-hover:text-bright transition-colors" />,
    title: 'Visual Asset Management',
    description: 'Organize and review your structural images in a clean, intuitive, Pinterest-style grid. Our platform is designed for managing large volumes of visual data, making it easy to track, compare, and monitor the condition of your assets over time.',
  },
  {
    icon: <ReconstructionIcon className="w-10 h-10 mb-4 text-muted group-hover:text-bright transition-colors" />,
    title: '3D Reconstruction',
    description: 'Go beyond 2D analysis. Our upcoming 3D reconstruction feature will generate interactive models from your images, offering a comprehensive, multi-dimensional view of structural integrity. Explore every angle and gain a deeper understanding of potential issues.',
  },
];


export const Features: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<typeof featuresData[0] | null>(null);

  const handleCardClick = (feature: typeof featuresData[0]) => {
    setSelectedFeature(feature);
  };

  const handleCloseModal = () => {
    setSelectedFeature(null);
  };

  return (
    <>
      <section className="w-full max-w-7xl mx-auto py-16 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              onClick={() => handleCardClick(feature)}
            />
          ))}
        </div>
      </section>
      <Modal 
        isOpen={!!selectedFeature} 
        onClose={handleCloseModal}
        title={selectedFeature?.title || ''}
      >
        <p className="text-muted">{selectedFeature?.description}</p>
      </Modal>
    </>
  );
};
