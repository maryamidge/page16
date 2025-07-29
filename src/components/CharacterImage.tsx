import React from 'react';

interface CharacterImageProps {
  src?: string;
  alt?: string;
}

export const CharacterImage: React.FC<CharacterImageProps> = ({ 
  src = "https://api.builder.io/api/v1/image/assets/TEMP/a3527624c8fb7e08d2a85433323a4999bc8e6a9b?width=397",
  alt = "Character illustration"
}) => {
  return (
    <figure className="w-[198px] h-[356px] shrink-0 absolute left-[115px] top-[371px] max-md:left-[calc(50%_-_99px)] max-sm:w-40 max-sm:h-72 max-sm:left-[calc(50%_-_80px)] max-sm:top-[400px]">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </figure>
  );
};
