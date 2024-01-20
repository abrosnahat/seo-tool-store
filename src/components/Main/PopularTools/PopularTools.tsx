import { Title } from '@/components/Title/Title';
import { ToolIcon } from '@/components/ToolIcon/ToolIcon';
import { TOOLS } from '@/data/tools';
import { Card, CardBody } from '@nextui-org/react';
import Link from 'next/link';
import styles from './PopularTools.module.scss';

export const PopularTools = () => {
  return (
    <section className={styles.root}>
      <Title>Популярные инструменты</Title>

      <Card>
        <CardBody className={styles.tools}>
          {TOOLS.map((category) =>
            category.items.map((tool) => (
              <Link
                href={`/tools/${tool.url}`}
                key={tool.id}
                className={styles.tool}
              >
                <ToolIcon
                  toolType={tool.type}
                  className={styles.icon}
                />
                <span className={styles.title}>{tool.title}</span>
              </Link>
            ))
          )}
        </CardBody>
      </Card>
    </section>
  );
};
