import React from 'react';

const ParallaxBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500/5 rounded-full translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-indigo-500/5 rounded-full translate-y-1/2 blur-3xl"></div>
    </div>
  );
};

export default ParallaxBackground;
