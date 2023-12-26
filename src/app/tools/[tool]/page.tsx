import { Title } from '@/components/Title/Title';
import { Tools } from '@/components/Tools/Tools';
import { TOOLS_TITLE } from '@/constants/tools';
import { ToolType } from '@/types/tools';
import { camelize } from '@/utils/camelize';
import { Metadata } from 'next';
import styles from './page.module.scss';

interface ToolsProps {
  params: { tool: ToolType };
}

export async function generateMetadata({
  params,
}: ToolsProps): Promise<Metadata> {
  return {
    title: TOOLS_TITLE[camelize(params.tool) as ToolType],
  };
}

export default function ToolPage({ params }: ToolsProps) {
  const toolType = camelize(params.tool) as ToolType;

  return (
    <div className={styles.root}>
      <Title>{TOOLS_TITLE[toolType]}</Title>
      <Tools tool={toolType} />
    </div>
  );
}
