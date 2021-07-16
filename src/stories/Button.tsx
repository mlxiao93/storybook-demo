import React from 'react';
import './button.css';

type ButtonProps = React.PropsWithChildren<{
  type?: 'primary' | 'secondary';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}>

export const Button = ({
  type = 'primary',
  size = 'medium',
  backgroundColor,
  children,
  ...props
}: ButtonProps) => {
  const mode = `storybook-button--${type}`;
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </button>
  );
};
