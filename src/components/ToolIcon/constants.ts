import { ToolType } from '@/types/tools';
import { ImageProps } from 'next/image';
import HtmlRedactor from './img/html-redactor.svg';
import TextCounterIcon from './img/text-counter.png';
import TransliterationIcon from './img/transliteration.svg';

export const TOOLS_ICONS: Record<ToolType, ImageProps['src']> = {
  transliteration: TransliterationIcon,
  textCounter: TextCounterIcon,
  htmlRedactor: HtmlRedactor,
};
