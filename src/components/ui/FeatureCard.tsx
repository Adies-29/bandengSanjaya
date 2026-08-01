import React from 'react';

export interface FeatureCardProps {
  icon?: React.ReactNode;
  iconSrc?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  iconSrc,
  title,
  subtitle,
  className = '',
}) => {
  return (
    <div
      className={`bg-[#f4fdec] rounded-2xl p-5 flex flex-col items-start justify-start text-left shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${className}`}
    >
      {/* Top Icon or Image */}
      {iconSrc ? (
        <img src={iconSrc} alt={title} className="w-10 h-10 mb-3 object-contain" />
      ) : icon ? (
        <div className="mb-3 text-emerald-950 flex items-center justify-start">
          {icon}
        </div>
      ) : null}

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-bold text-black tracking-tight">
        {title}
      </h3>

      {/* Subtitle / Description */}
      {subtitle && (
        <p className="text-sm font-normal text-gray-800 mt-2 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
