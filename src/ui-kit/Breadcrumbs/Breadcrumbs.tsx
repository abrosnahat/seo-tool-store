'use client';

import { TOOLS_TITLE } from '@/constants/tools';
import { ToolType } from '@/types/tools';
import {
  BreadcrumbItem,
  Breadcrumbs as BreadcrumbsComponents,
} from '@nextui-org/react';
import { camelCase } from 'lodash';
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
        item: {
          '@id': 'https://seotoolstore.ru',
          name: 'seotoolstore.ru',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@id': 'https://seotoolstore.ru/tools',
          name: 'Инструменты',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@id': `https://seotoolstore.ru/tools/${pathnameArray[1]}`,
          name: TOOLS_TITLE[camelCase(pathnameArray[1]) as ToolType],
        },
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
              TOOLS_TITLE[camelCase(path) as ToolType]
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
