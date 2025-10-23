import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-12 w-auto' }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Espaço Valore Logo"
  >
    <path
      d="M50 0C77.6142 0 100 22.3858 100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0Z"
      fill="url(#paint0_linear_1_2)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1_2"
        x1="0"
        y1="0"
        x2="100"
        y2="100"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D72638" />
        <stop offset="0.5" stopColor="#D72638" />
        <stop offset="0.5" stopColor="#0D2C54" />
        <stop offset="1" stopColor="#0D2C54" />
      </linearGradient>
    </defs>
  </svg>
);

const FullLogo: React.FC<{ className?: string }> = ({ className = 'h-14' }) => (
    <img src="https://i.imgur.com/tzkzd4w.png" alt="Espaço Valore Coworking Logo" className={className} />
);


export { Logo, FullLogo };