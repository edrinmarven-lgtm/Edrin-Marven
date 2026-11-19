interface BrandLogoProps {
  variant?: 'header' | 'footer';
  tone?: 'dark' | 'ivory';
}

export function BrandLogo({ variant = 'header', tone = 'dark' }: BrandLogoProps) {
  const isIvory = tone === 'ivory';
  const strokeColor = '#A58A62';
  const primaryText = isIvory ? 'text-[#F5F2EC]' : 'text-[#1C1B19]';
  const secondaryText = isIvory ? 'text-[#C2AE98]' : 'text-[#645D55]';

  if (variant === 'header') {
    return (
      <span className="inline-flex items-center gap-3 whitespace-nowrap shrink-0 select-none">
        <svg
          width="26"
          height="26"
          viewBox="0 0 28 28"
          fill="none"
          aria-hidden="true"
          className="shrink-0"
        >
          <rect
            x="2"
            y="2"
            width="24"
            height="24"
            stroke={isIvory ? '#F5F2EC' : '#1C1B19'}
            strokeWidth="1.25"
          />
          <path
            d="M2 16H14V26"
            stroke={strokeColor}
            strokeWidth="1.25"
          />
          <path
            d="M14 2V10H26"
            stroke={isIvory ? '#F5F2EC' : '#1C1B19'}
            strokeWidth="1.25"
          />
          <rect
            x="17.5"
            y="13.5"
            width="5"
            height="5"
            stroke={strokeColor}
            strokeWidth="1.25"
          />
        </svg>
        <span className={`font-serif text-[19px] sm:text-[21px] font-medium tracking-[0.2em] uppercase leading-none ${primaryText}`}>
          AURELLE <span className={`font-sans text-[10px] tracking-[0.28em] font-medium align-middle ml-0.5 ${secondaryText}`}>STUDIO</span>
        </span>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-3.5 select-none">
      <svg
        width="32"
        height="32"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="2"
          y="2"
          width="24"
          height="24"
          stroke={isIvory ? '#F5F2EC' : '#1C1B19'}
          strokeWidth="1.25"
        />
        <path d="M2 16H14V26" stroke={strokeColor} strokeWidth="1.25" />
        <path
          d="M14 2V10H26"
          stroke={isIvory ? '#F5F2EC' : '#1C1B19'}
          strokeWidth="1.25"
        />
        <rect
          x="17.5"
          y="13.5"
          width="5"
          height="5"
          stroke={strokeColor}
          strokeWidth="1.25"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-[22px] font-medium tracking-[0.22em] uppercase ${primaryText}`}>
          AURELLE
        </span>
        <span className={`font-sans text-[10px] tracking-[0.34em] uppercase mt-1.5 ${secondaryText}`}>
          STUDIO
        </span>
      </span>
    </span>
  );
}
