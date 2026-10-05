import React from 'react';

const ImagePlaceholder = ({ className = '', text = 'IMAGE HERE' }) => {
  return (
    <div className={`relative bg-[#0B2119] flex flex-col items-center justify-center text-[#D8C49A] ${className} rounded-[16px] border border-[#D8C49A]/10 overflow-hidden group`}>
      {/* Subtle Noise/Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
        <span className="text-[10px] font-semibold tracking-[0.25em] uppercase opacity-70 mb-1">IMAGE HERE</span>
        {text && text !== 'IMAGE HERE' && (
          <span className="text-[9px] tracking-wider uppercase opacity-40 max-w-[200px] truncate">{text}</span>
        )}
      </div>
    </div>
  );
};

export default ImagePlaceholder;
