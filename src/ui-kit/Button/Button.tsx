import cn from 'classnames';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { Loader } from '../Loader';
import styles from './Button.module.scss';

export interface ButtonProps {
  children?: ReactNode;
  type?: 'button' | 'submit';
  className?: string;
  variant?: 'text' | 'purple' | 'link' | 'transparent';
  size?: 'normal' | 'small';
  disabled?: boolean;
  loading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  active?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  className,
  variant = 'text',
  size = 'normal',
  disabled,
  loading,
  onClick,
  startIcon,
  endIcon,
  active,
  href,
}) => {
  const button = (
    <button
      className={cn(
        styles.root,
        variant && styles[variant],
        size && styles[size],
        active && styles.active,
        disabled && styles.disabled,
        loading && styles.loading,
        className
      )}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {loading ? (
        <Loader
          small
          variant='short'
        />
      ) : (
        startIcon
      )}
      {children}
      {endIcon}
    </button>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(styles.linkButton, className)}
      >
        {button}
      </Link>
    );
  }

  return button;
};
