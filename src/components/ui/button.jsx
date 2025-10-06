import React from 'react';

export const Button = ({ children, variant = 'default', asChild = false, className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors';
  const variantStyles = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
  };

  const buttonClass = `${baseStyles} ${variantStyles[variant]} ${className}`;

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
