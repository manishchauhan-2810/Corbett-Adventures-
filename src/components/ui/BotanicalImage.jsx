import React from 'react';

const BotanicalImage = ({ src, className, ...props }) => {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute z-0 object-contain ${className}`}
      style={{
        filter: 'grayscale(1) saturate(0.15) contrast(0.85)',
      }}
      {...props}
    />
  );
};

export default BotanicalImage;
