import cn from 'classnames';
import React from 'react';
import styles from './TextField.module.scss';
import ErrorIcon from './img/error.svg';

export interface TextFieldProps {
  children: React.ReactNode;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  className?: string;
  error?: string;
  disabled?: boolean;
}

export const TextField: React.FC<TextFieldProps> = ({
  children,
  startAdornment,
  endAdornment,
  className,
  error,
  disabled,
}) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={cn(
          styles.root,
          disabled && styles.isDisabled,
          error && styles.isError,
          className
        )}
      >
        {startAdornment && (
          <div className={cn(styles.adornment)}>{startAdornment}</div>
        )}
        {children}
        {endAdornment && (
          <div className={cn(styles.adornment)}>{endAdornment}</div>
        )}
        {error && (
          <div className={cn(styles.adornment)}>
            <ErrorIcon />
          </div>
        )}
      </div>
    </div>
  );
};
