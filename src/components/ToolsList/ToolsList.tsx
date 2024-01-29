import { TOOLS } from '@/data/tools';
import { Card, CardBody } from '@nextui-org/react';
import Link from 'next/link';
import { Title } from '../Title/Title';
import { ToolIcon } from '../ToolIcon/ToolIcon';
import styles from './ToolsList.module.scss';

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
                key={tool.id}
                href={`/tools/${tool.url}`}
              >
                <Card
                  isPressable
                  isHoverable
                  className='w-full h-full'
                >
                  <CardBody className='flex-row gap-3 items-center'>
                    <ToolIcon toolType={tool.type} />
                    <div className={styles.text}>
                      <div className={styles.title}>{tool.title}</div>
                      <div className={styles.description}>
                        {tool.description}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
