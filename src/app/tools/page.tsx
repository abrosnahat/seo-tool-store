import { ToolsList } from '@/components/ToolsList/ToolsList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Инструменты для SEO-специалистов, веб-мастера, копирайтера - всё для анализа и продвижения',
  description:
    'Комплект инструментов для веб разработки и сео оптимизации. Используйте наш сервис в работе с текстом и программным кодом без регистрации.',
};

export default function ToolsPage() {
  return <ToolsList />;
}
