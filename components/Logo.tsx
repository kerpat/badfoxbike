import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center font-extrabold text-2xl tracking-tighter ${className}`}>
        <span className="text-white mr-1">BAD</span>
        <span className="text-primary uppercase">FOX</span>
    </div>
  );
};