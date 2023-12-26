import { ToolType } from '@/types/tools';
import { TextCounter } from './TextCounter/TextCounter';
import { Transliteration } from './Transliteration/Transliteration';

interface ToolsProps {
  tool: ToolType;
}

export const Tool: React.FC<ToolsProps> = ({ tool }) => {
  const tools: Record<ToolType, React.ReactNode> = {
    transliteration: <Transliteration />,
    textCounter: <TextCounter />,
  };

  return <>{tools[tool]}</>;
};
