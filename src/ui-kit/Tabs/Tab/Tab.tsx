import cn from 'classnames';
import React from 'react';
import styles from './Tab.module.scss';

export interface TabBaseProps<T> {
  value: T;
  onChange?: (value: T) => void;
}

export interface TabProps<T> extends TabBaseProps<T> {
  label: string;
  isActive?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const Tab = <T,>({
  value,
  label,
  isActive,
  onChange,
  startIcon,
  endIcon,
}: TabProps<T>) => {
  return (
    <div
      className={cn(styles.root, isActive && styles.isActive)}
      onClick={() => onChange?.(value)}
    >
      {startIcon && <span className={styles.icon}>{startIcon}</span>}
      {label}
      {endIcon && <span className={styles.icon}>{endIcon}</span>}
    </div>
  );
};
