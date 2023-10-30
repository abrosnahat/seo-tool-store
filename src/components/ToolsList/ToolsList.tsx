import { TOOLS } from '@/data/tools';
import Image from 'next/image';
import Link from 'next/link';
import { Title } from '../Title/Title';
import styles from './ToolsList.module.scss';
import Icon from './icon.svg';

export const ToolsList = () => {
  return (
    <div className={styles.root}>
      {TOOLS.map((category) => (
        <div
          className={styles.category}
          key={category.title}
        >
          <Title>{category.title}</Title>
          <div className={styles.tools}>
            {category.items.map((tool) => (
              <Link
                href={`/tools/${tool.url}`}
                className={styles.item}
                key={tool.id}
              >
                <Image
                  src={Icon}
                  width={40}
                  height={40}
                  className={styles.icon}
                  alt='icon'
                />
                <div className={styles.text}>
                  <div className={styles.title}>{tool.title}</div>
                  <div className={styles.description}>{tool.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

