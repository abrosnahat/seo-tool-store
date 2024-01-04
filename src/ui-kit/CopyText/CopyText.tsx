'use client';

import { copyTextToClipBoard } from '@/utils/browser';
import cn from 'classnames';
import Image from 'next/image';
import styles from './CopyText.module.scss';
import CopyIcon from './img/copy.svg';

interface CopyTextProps {
  text: string;
  className?: string;
}

export const CopyText: React.FC<CopyTextProps> = ({ text, className }) => {
  const copyText = async () => {
    await copyTextToClipBoard(text);
  };

  return (
    <Image
      className={cn(styles.icon, className)}
      src={CopyIcon}
      alt='copy'
      onClick={copyText}
    />
  );
};
