import { ToolsType } from '@/types/tools';
import { Transliteration } from './Transliteration/Transliteration';

interface ToolsProps {
  tool: ToolsType;
}

export const Tools: React.FC<ToolsProps> = ({ tool }) => {
  const tools: Record<ToolsType, React.ReactNode> = {
    transliteration: <Transliteration />,
  };

  return <>{tools[tool]}</>;
};
