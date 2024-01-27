import { ToolType } from '@/types/tools';
import { ConvertRegister } from './ConvertRegister/ConvertRegister';
import { DeleteDuplicate } from './DeleteDuplicate/DeleteDuplicate';
import { DuplicateWordsCounter } from './DuplicateWordsCounter/DuplicateWordsCounter';
import { FaqSchemaGenerator } from './FaqSchemaGenerator/FaqSchemaGenerator';
import { HtmlRedactor } from './HtmlRedactor/HtmlRedactor';
import { LineCounter } from './LineCounter/LineCounter';
import { Synonyms } from './Synonyms/Synonyms';
import { TextCounter } from './TextCounter/TextCounter';
import { Transliteration } from './Transliteration/Transliteration';
import { WordCombiner } from './WordCombiner/WordCombiner';

interface ToolsProps {
  tool: ToolType;
}

export const Tools: React.FC<ToolsProps> = ({ tool }) => {
  const tools: Record<ToolType, React.ReactNode> = {
    transliteration: <Transliteration />,
    textCounter: <TextCounter />,
    htmlRedactor: <HtmlRedactor />,
    convertRegister: <ConvertRegister />,
    deleteDuplicate: <DeleteDuplicate />,
    wordCombiner: <WordCombiner />,
    lineCounter: <LineCounter />,
    faqSchemaGenerator: <FaqSchemaGenerator />,
    duplicateWordsCounter: <DuplicateWordsCounter />,
    synonyms: <Synonyms />,
  };

  return <>{tools[tool]}</>;
};
