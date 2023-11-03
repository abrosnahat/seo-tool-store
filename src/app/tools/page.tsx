import { ToolsList } from '@/components/ToolsList/ToolsList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Инструменты',
};

export default function Tools() {
  return <ToolsList />;
}
