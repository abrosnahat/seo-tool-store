import cn from 'classnames';
import React from 'react';
import styles from './Loader.module.scss';
import LoaderIcon from './img/loader.svg';
import WatchIcon from './img/watch.svg';

export interface LoaderProps {
  className?: string;
  variant?: 'full' | 'short';
  withWatch?: boolean;
  small?: boolean;
}

export const Loader: React.FC<LoaderProps> = ({
  className,
  variant = 'full',
  withWatch,
  small,
}) => {
  return (
    <div className={cn(styles.root, className)}>
      <div className={cn(styles.iconWrapper, small && styles.small)}>
        <LoaderIcon className={cn(styles.icon)} />
        {withWatch && (
          <WatchIcon className={cn(styles.watch, small && styles.small)} />
        )}
      </div>
      {variant === 'full' && (
        <span className={cn(styles.label)}>Загрузка...</span>
      )}
    </div>
  );
};

export const PageLoader = () => (
  <Loader
    variant='short'
    withWatch
  />
);
