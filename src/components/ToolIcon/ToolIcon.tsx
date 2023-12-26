import { ToolType } from '@/types/tools';
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
      width={40}
      height={40}
      className={className}
      alt='icon'
    />
  );
};
