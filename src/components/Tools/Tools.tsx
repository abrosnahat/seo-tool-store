import { ToolType } from '@/types/tools';
import { ConvertRegister } from './ConvertRegister/ConvertRegister';
import { HtmlRedactor } from './HtmlRedactor/HtmlRedactor';
import { TextCounter } from './TextCounter/TextCounter';
import { Transliteration } from './Transliteration/Transliteration';

interface ToolsProps {
  tool: ToolType;
}

export const Tools: React.FC<ToolsProps> = ({ tool }) => {
  const tools: Record<ToolType, React.ReactNode> = {
    transliteration: <Transliteration />,
    textCounter: <TextCounter />,
    htmlRedactor: <HtmlRedactor />,
    convertRegister: <ConvertRegister />,
  };

  return <>{tools[tool]}</>;
};
