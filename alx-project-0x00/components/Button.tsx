// components/Button.tsx
import { ButtonProps } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProps> = ({ 
  title, 
  size = 'medium', 
  shape = 'rounded-md', 
  variant = 'primary',
  onClick 
}) => {
  // Size classes
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  // Shape classes
  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full'
  };

  // Variant classes
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    outline: 'border border-blue-500 text-blue-500 hover:bg-blue-50'
  };

  const buttonClasses = [
    'font-semibold',
    'transition-colors',
    'cursor-pointer',
    sizeClasses[size],
    shapeClasses[shape],
    variantClasses[variant]
  ].join(' ');

  return (
    <button className={buttonClasses} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;