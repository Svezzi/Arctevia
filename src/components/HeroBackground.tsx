import Image from 'next/image';

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
      <Image 
        src="/PHOTOS/HeroBackground.png" 
        alt="Northern lights background" 
        fill 
        priority
        sizes="100vw"
        style={{objectFit: 'cover'}}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    </div>
  );
} 