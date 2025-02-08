'use client';

// Next
import Image from 'next/image';

export const SectionMedia = ({ src }) => {
  return (
    <div className="section-media">
      <Image src={src} height={src.height} width={src.width} alt="description" />
    </div>
  );
};
