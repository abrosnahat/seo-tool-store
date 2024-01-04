import cn from 'classnames';
import Image from 'next/image';
import React from 'react';
import styles from './Loader.module.scss';
import LoaderIcon from './img/loader.svg';

export interface LoaderProps {
  className?: string;
  variant?: 'full' | 'short';
  small?: boolean;
}

export const Loader: React.FC<LoaderProps> = ({
  className,
  variant = 'short',

  small,
}) => {
  return (
    <div className={cn(styles.root, className)}>
      <div className={cn(styles.iconWrapper, small && styles.small)}>
        <Image
          src={LoaderIcon}
          className={cn(styles.icon)}
          alt='Loader icon'
        />
      </div>
      {variant === 'full' && (
        <span className={cn(styles.label)}>Загрузка...</span>
      )}
    </div>
  );
};
