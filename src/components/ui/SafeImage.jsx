import React, { useState } from 'react';

const SafeImage = ({
  src,
  alt = '',
  className = '',
  fallback = '/fallback.svg',
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <img
      src={imageSrc || fallback}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => {
        if (imageSrc !== fallback) {
          setImageSrc(fallback);
        }
      }}
      {...props}
    />
  );
};

export default SafeImage;