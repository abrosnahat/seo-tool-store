import cn from 'classnames';
import React from 'react';
import styles from './Divider.module.scss';

interface DividerProps {
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ className }) => {
  return <div className={cn(styles.root, className)} />;
};
