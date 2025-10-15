import React from 'react';

export const Button = ({ children, variant = 'default', size = 'default', asChild = false, className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors';
  
  const sizeStyles = {
    default: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  const variantStyles = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
    secondary: 'bg-white text-indigo-600 hover:bg-indigo-50 border border-indigo-200',
  };

  const buttonClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (asChild && React.Children.count(children) === 1) {
    const child = React.Children.only(children);
    return React.cloneElement(child, {
      className: `${buttonClass} ${child.props.className || ''}`,
      ...props,
    });
  }

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};
