import React from 'react';

export const About: React.FC = () => {
  return (
    <main className="container mx-auto px-4 flex-grow flex flex-col justify-center animate-fade-in-up">
      <div className="max-w-3xl mx-auto text-center py-16">
        <h2 className="text-5xl md:text-7xl font-black mb-4 text-bright">
          About Structsafe
        </h2>
        <div className="text-muted text-lg max-w-2xl mx-auto space-y-6 text-left">
          <p>
            Structsafe is a cutting-edge web application designed to revolutionize structural integrity analysis. 
            Leveraging the power of advanced artificial intelligence, this tool provides engineers, architects, and maintenance professionals 
            with a high-precision method for detecting and analyzing cracks in building structures, bridges, and other critical infrastructure.
          </p>
          <p>
            Our mission is to enhance safety and efficiency in the construction and maintenance industries. By automating the tedious and often 
            error-prone process of manual inspection, Structsafe helps in identifying potential structural issues before they escalate, 
            saving time, resources, and potentially preventing catastrophic failures.
          </p>
          <p>
            The application features a dark, minimalist, Pinterest-style interface, focusing on a seamless and intuitive user experience. 
            Users can simply upload images of structures, and our AI model will process them to highlight cracks and provide analytical data. 
            The visual-first approach allows for quick assessment and management of a large number of assets.
          </p>
          <p>
            A key feature currently in development is 3D reconstruction. After analyzing an image for cracks, our system aims to generate a 3D model of the structure. 
            This will allow for a more immersive and detailed inspection, providing a comprehensive understanding of the structural integrity in a three-dimensional space.
          </p>
          <p>
            This project is built with modern web technologies including React, TypeScript, and Tailwind CSS, ensuring a responsive, performant, and scalable platform.
          </p>
        </div>
      </div>
    </main>
  );
};