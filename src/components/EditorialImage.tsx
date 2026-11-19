import { useState } from 'react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fallbackLabel?: string;
}

export function EditorialImage({
  src,
  alt,
  className = '',
  priority = false,
  fallbackLabel,
}: EditorialImageProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (failed) {
    return (
      <div
        className={`w-full h-full bg-gradient-to-br from-[#EAE4DA] via-[#D6C8B7] to-[#C2AE98] flex flex-col items-center justify-center p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 28 28"
          fill="none"
          aria-hidden="true"
          className="mb-3 opacity-70"
        >
          <rect x="2" y="2" width="24" height="24" stroke="#302922" strokeWidth="1.25" />
          <path d="M2 16H14V26" stroke="#A58A62" strokeWidth="1.25" />
        </svg>
        <span className="font-serif text-lg text-[#302922] tracking-wide">
          {fallbackLabel || 'Aurelle Studio'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      referrerPolicy="no-referrer"
      onLoad={() => setLoaded(true)}
      onError={() => setFailed(true)}
      className={`w-full h-full object-cover transition-opacity duration-500 ${
        loaded ? 'opacity-100' : 'opacity-95'
      } ${className}`}
    />
  );
}
