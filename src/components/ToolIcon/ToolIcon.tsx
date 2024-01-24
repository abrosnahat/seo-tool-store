import { ToolType } from '@/types/tools';
import cn from 'classnames';
import Image from 'next/image';
import { TOOLS_ICONS } from './constants';

interface ToolContentProps {
  toolType: ToolType;
  className?: string;
}

export const ToolIcon: React.FC<ToolContentProps> = ({
  toolType,
  className,
}) => {
  return (
    <Image
      src={TOOLS_ICONS[toolType]}
      className={cn(className, 'w-[40px] h-[40]')}
      alt='icon'
    />
  );
};
