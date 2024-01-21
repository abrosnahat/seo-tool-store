'use client';

import { copyTextToClipBoard } from '@/utils/browser';
import cn from 'classnames';
import Image from 'next/image';
import { useState } from 'react';
import styles from './CopyText.module.scss';
import CheckIcon from './img/check.svg';
import CopyIcon from './img/copy.svg';

interface CopyTextProps {
  text: string;
  className?: string;
}

export const CopyText: React.FC<CopyTextProps> = ({ text, className }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyText = async () => {
    await copyTextToClipBoard(text);

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  };

  return (
    <Image
      className={cn(styles.icon, className)}
      src={isCopied ? CheckIcon : CopyIcon}
      alt='copy'
      onClick={copyText}
    />
  );
};
