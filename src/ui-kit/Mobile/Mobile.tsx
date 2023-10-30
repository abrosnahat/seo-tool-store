import { MEDIA } from '@awl/core/src/constants/responsive';
import { DEFAULT_MOBILE_DESKTOP_BREAKPOINT } from '@src/constants/media';
import cn from 'classnames';
import React from 'react';
import styles from './Mobile.module.scss';

interface MobileProps {
  className?: string;
  children: React.ReactNode;
  breakpoint?: keyof typeof MEDIA;
}

export const Mobile: React.FC<MobileProps> = ({
  className,
  children,
  breakpoint = DEFAULT_MOBILE_DESKTOP_BREAKPOINT,
}) => {
  return (
    <div className={cn(styles[`breakpoint-${breakpoint}`], className)}>
      {children}
    </div>
  );
};
