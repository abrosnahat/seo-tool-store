import { ToolsList } from '@/components/ToolsList/ToolsList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tools',
};

export default function Tools() {
  return <ToolsList />;
}
