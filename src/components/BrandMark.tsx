import { useState } from 'react';
import { Shield } from 'lucide-react';

interface BrandMarkProps {
  size?: 'sm' | 'lg';
}

export function BrandMark({ size = 'sm' }: BrandMarkProps) {
  const dimensions = size === 'lg' ? 'w-14 h-14' : 'w-9 h-9';
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${dimensions} shrink-0`}
      aria-hidden="true"
    >
      <path
        d="M32 4L56 14V32C56 46.5 45.6 56.8 32 60C18.4 56.8 8 46.5 8 32V14L32 4Z"
        fill="#0F2342"
        stroke="#F97316"
        strokeWidth="3"
      />
      <path
        d="M19 43V21L26.5 32L32 23.5L37.5 32L45 21V43"
        stroke="#FFFFFF"
        strokeWidth="4.2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path d="M24 48H40" stroke="#E62E2D" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle: string;
}

export function SafeImage({ src, alt, className = '', fallbackTitle }: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#0D1E38] via-[#13294B] to-[#0A1628] text-white p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Shield className="w-10 h-10 text-orange-500 mb-3" aria-hidden="true" />
        <p className="font-display text-lg font-bold tracking-wide uppercase">{fallbackTitle}</p>
        <p className="text-xs text-slate-300 mt-1">MAMBA METAL FABRICATION</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
