import { Title } from '@/components/Title/Title';
import { TOOLS } from '@/data/tools';
import Image from 'next/image';
import Link from 'next/link';
import styles from './PopularTools.module.scss';
import Icon from './img/icon.svg';

export const PopularTools = () => {
  return (
    <section className={styles.root}>
      <Title>Популярные инструменты</Title>
      <div className={styles.tools}>
        {TOOLS.map((category) =>
          category.items.map((tool) => (
            <Link
              href={`/tools/${tool.url}`}
              key={tool.id}
              className={styles.tool}
            >
              <Image
                src={Icon}
                width={30}
                height={30}
                className={styles.icon}
                alt='icon'
              />
              <span className={styles.title}>{tool.title}</span>
            </Link>
          ))
        )}
      </div>
    </section>
  );
};
