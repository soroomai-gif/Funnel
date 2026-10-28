import React from 'react';

interface LogoProps {
  className?: string;
  isMonochrome?: boolean;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ className = '', isMonochrome = false, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 font-bold tracking-tight select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#155EEF] rounded-lg transition-transform hover:opacity-95 text-start cursor-pointer ${className}`}
      aria-label="PixelTemplates Home"
    >
      {/* Distinctive Geometric P-inspired Mark */}
      <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform transition-transform hover:scale-105 duration-200"
        >
          {/* Dark Navy Base Vertical Stem */}
          <rect
            x="6"
            y="4"
            width="7"
            height="28"
            rx="3.5"
            fill={isMonochrome ? "currentColor" : "#0F172A"}
          />
          {/* Vibrant Primary Blue Upper Geometric Loop */}
          <path
            d="M13 4H23C27.4183 4 31 7.58172 31 12C31 16.4183 27.4183 20 23 20H13V4Z"
            fill={isMonochrome ? "currentColor" : "#155EEF"}
          />
          {/* Geometric Pixel Cutout / Accent */}
          <rect
            x="17"
            y="8.5"
            width="6.5"
            height="6.5"
            rx="1.5"
            fill={isMonochrome ? "#0F172A" : "#FFFFFF"}
          />
        </svg>
      </div>

      {/* Brand Text */}
      <span className={`text-lg sm:text-xl font-extrabold tracking-tight ${isMonochrome ? 'text-white' : 'text-[#0F172A]'}`}>
        Pixel<span className="text-[#155EEF]">Templates</span>
      </span>
    </button>
  );
};
