'use client';

import cn from 'classnames';
import Image from 'next/image';
import styles from './ClearText.module.scss';
import ClearIcon from './img/clear.svg';

interface ClearTextProps {
  onClick: React.MouseEventHandler<HTMLImageElement>;
  className?: string;
}

export const ClearText: React.FC<ClearTextProps> = ({ onClick, className }) => {
  return (
    <Image
      className={cn(styles.icon, className)}
      src={ClearIcon}
      alt='clear'
      onClick={onClick}
    />
  );
};
