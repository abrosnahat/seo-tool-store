import { MEDIA } from '@awl/core/src/constants/responsive';
import { DEFAULT_MOBILE_DESKTOP_BREAKPOINT } from '@src/constants/media';
import cn from 'classnames';
import React from 'react';
import styles from './Desktop.module.scss';

interface DesktopProps {
  className?: string;
  children: React.ReactNode;
  breakpoint?: keyof typeof MEDIA;
}

export const Desktop: React.FC<DesktopProps> = ({
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
