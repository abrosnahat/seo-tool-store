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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: 'https://seotoolstore.ru',
        name: 'seotoolstore.ru',
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: 'https://seotoolstore.ru/tools',
        name: 'Инструменты',
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: `https://seotoolstore.ru/tools/${pathnameArray[1]}`,
        name: TOOLS_TITLE[camelize(pathnameArray[1]) as ToolType],
      },
    ],
  };

  return (
    <>
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
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};
