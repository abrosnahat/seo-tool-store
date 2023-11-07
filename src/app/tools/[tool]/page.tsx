import { Title } from '@/components/Title/Title';
import { Tool } from '@/components/Tool/Tool';
import { TOOLS_TITLE } from '@/constants/tools';
import { ToolsType } from '@/types/tools';
import { Metadata } from 'next';
import styles from './page.module.scss';

interface ToolsProps {
  params: { tool: ToolsType };
}

export async function generateMetadata({
  params,
}: ToolsProps): Promise<Metadata> {
  return {
    title: TOOLS_TITLE[params.tool],
  };
}

export default function ToolPage({ params }: ToolsProps) {
  return (
    <div className={styles.root}>
      <Title>{TOOLS_TITLE[params.tool]}</Title>
      <Tool tool={params.tool} />
    </div>
  );
}
