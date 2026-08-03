import React from 'react';

export interface FeatureCardProps {
  icon?: React.ReactNode;
  iconSrc?: string;
  title: string;
  subtitle?: string;
  className?: string;
  variant?: 'cream' | 'green';
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  iconSrc,
  title,
  subtitle,
  className = '',
  variant = 'cream',
}) => {
  const isGreen = variant === 'green';

  return (
    <div
      className={`p-7 rounded-3xl text-left shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group ${
        isGreen
          ? 'bg-[#003825] text-white'
          : 'bg-[#FFEFD7] text-[#003825]'
      } ${className}`}
    >
      {/* Top Icon or Image */}
      {iconSrc ? (
        <img src={iconSrc} alt={title} className="w-12 h-12 mb-5 object-contain" />
      ) : icon ? (
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform ${
            isGreen ? 'bg-white/10 text-amber-300' : 'bg-amber-200/70 text-[#003825]'
          }`}
        >
          {icon}
        </div>
      ) : null}

      <div>
        {/* Title */}
        <h3 className={`text-xl font-bold mb-2 ${isGreen ? 'text-white' : 'text-[#003825]'}`}>
          {title}
        </h3>

        {/* Subtitle / Description */}
        {subtitle && (
          <p className={`text-sm leading-relaxed ${isGreen ? 'text-amber-100/90' : 'text-gray-700'}`}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
