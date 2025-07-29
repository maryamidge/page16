import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  type = 'button',
  className = ''
}) => {
  const baseClasses = "flex h-12 justify-center items-center gap-2 shadow-[0_4px_4px_0_rgba(190,92,85,0.42)] w-[396px] cursor-pointer px-[162px] py-4 rounded-lg max-md:w-[calc(100%_-_32px)] max-sm:w-[calc(100%_-_32px)] max-sm:px-5 max-sm:py-4 transition-all duration-200";
  
  const variantClasses = {
    primary: "bg-[#B5453D] hover:bg-[#A03D36] active:bg-[#8B3329]",
    secondary: "bg-gray-200 hover:bg-gray-300 active:bg-gray-400"
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
      aria-label={typeof children === 'string' ? children : undefined}
    >
      <span className="text-[#F8F1EC] text-center text-base font-semibold leading-6 uppercase">
        {children}
      </span>
    </button>
  );
};
