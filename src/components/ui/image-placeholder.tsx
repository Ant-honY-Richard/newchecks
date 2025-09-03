import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  aspectRatio: string;
  description: string;
  className?: string;
  fill?: boolean;
}

export function ImagePlaceholder({
  src,
  alt,
  width,
  height,
  aspectRatio,
  description,
  className,
  fill = false,
}: ImagePlaceholderProps) {
  // Calculate width and height from aspect ratio if not provided
  const calculateDimensions = () => {
    if (width && height) {
      return { width, height };
    }
    
    const [ratioWidth, ratioHeight] = aspectRatio.split('/').map(Number);
    const baseWidth = width || 800; // Default base width
    const calculatedHeight = (baseWidth * ratioHeight) / ratioWidth;
    
    return {
      width: baseWidth,
      height: Math.round(calculatedHeight)
    };
  };

  const dimensions = calculateDimensions();

  return (
    <div className={cn("relative group overflow-hidden rounded-lg", className)}>
      {/* Aspect ratio container */}
      <div 
        className="relative w-full"
        style={{ aspectRatio }}
      >
        <Image
          src={src}
          alt={alt}
          width={dimensions.width}
          height={dimensions.height}
          fill={fill}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Image description overlay (visible on hover) */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <div className="text-white text-center">
            <p className="text-xs font-medium mb-1">Aspect Ratio: {aspectRatio}</p>
            <p className="text-sm font-normal">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}