import React from 'react';

const Button= ({
  variant = 'primary',
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyle = 'rounded-lg font-semibold';
  const variants = {
    primary: 'px-4 py-2 bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'px-4 py-2 bg-red-600 text-white hover:bg-red-700',
    outline: 'px-4 py-2 border border-gray-400 text-gray-700 hover:bg-gray-100',
    none: '',
  };

  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer';

  const finalClassName = `${baseStyle} ${variants[variant]} ${disabledStyle} ${className}`.trim();

  return (
    <button className={finalClassName} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
