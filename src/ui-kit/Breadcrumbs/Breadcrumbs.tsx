'use client';

import { TOOLS_TITLE } from '@/constants/tools';
import { ToolType } from '@/types/tools';
import { camelize } from '@/utils/camelize';
import {
  BreadcrumbItem,
  Breadcrumbs as BreadcrumbsComponents,
} from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathnameArray = pathname.split('/').slice(1);

  return (
    <BreadcrumbsComponents>
      <BreadcrumbItem>
        <Link href='/'>Главная</Link>
      </BreadcrumbItem>
      {pathnameArray.map((path) => (
        <BreadcrumbItem key={path}>
          {path === 'tools' ? (
            <Link href={`/${path}`}>Инструменты</Link>
          ) : (
            TOOLS_TITLE[camelize(path) as ToolType]
          )}
        </BreadcrumbItem>
      ))}
    </BreadcrumbsComponents>
  );
};
