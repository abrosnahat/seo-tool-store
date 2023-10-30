import cn from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './FormField.module.scss';

interface FormFieldProps {
  label: ReactNode;
  children: ReactNode;
  className?: string;
  hideLabelInMobile?: boolean;
  desktopDirection?: 'column' | 'row';
  RootTag?: 'label' | 'div';
}

export const FormField: FC<FormFieldProps> = ({
  label,
  children,
  className,
  hideLabelInMobile,
  desktopDirection = 'column',
  RootTag = 'label',
}) => {
  return (
    <RootTag
      className={cn(
        styles.wrapper,
        styles[`desktopDirection-${desktopDirection}`],
        className
      )}
    >
      <span
        className={cn(
          styles.label,
          hideLabelInMobile && styles.hideInMobile,
          styles[`desktopDirection-${desktopDirection}`]
        )}
      >
        {label}
      </span>
      {children}
    </RootTag>
  );
};
