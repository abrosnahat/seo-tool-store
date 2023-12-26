import { ToolType } from '@/types/tools';
import { ImageProps } from 'next/image';
import TextCounterIcon from './img/text-counter.png';
import transliterationIcon from './img/transliteration.svg';

export const TOOLS_ICONS: Record<ToolType, ImageProps['src']> = {
  transliteration: transliterationIcon,
  textCounter: TextCounterIcon,
};
