import Image from 'next/image';
import Link from 'next/link';
import styles from './ToolsList.module.scss';
import Icon from './icon.svg';
import { Title } from '../Title/Title';

export const ToolsList = () => {
  return (
    <div className={styles.root}>
      {DATA.map((category) => (
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

const DATA = [
  {
    title: 'Работа с контентом и текстами',
    items: [
      {
        id: '1',
        url: 'transliteration',
        title: 'Транслитерация текста',
        description:
          'Описание инструмента Описание инструмента Описание инструмента Описание инструмента',
      },
      {
        id: '2',
        url: 'html-redactor',
        title: 'HTML редактор онлайн',
        description:
          'Описание инструмента Описание инструмента Описание инструмента Описание инструмента',
      },
      {
        id: '3',
        url: 'text-counter',
        title: 'Подсчет длины текста',
        description:
          'Описание инструмента Описание инструмента Описание инструмента Описание инструмента',
      },
      {
        id: '4',
        url: 'convert-register',
        title: 'Конвертер регистров',
        description:
          'Описание инструмента Описание инструмента Описание инструмента Описание инструмента',
      },
      {
        id: '5',
        url: 'delete-duplicate',
        title: 'Удаление дубликатов',
        description:
          'Описание инструмента Описание инструмента Описание инструмента Описание инструмента',
      },
      {
        id: '6',
        url: 'duplicate-counter',
        title: 'Подсчет повторяющихся слов',
        description:
          'Описание инструмента Описание инструмента Описание инструмента Описание инструмента',
      },
      {
        id: '7',
        url: 'google-rich',
        title: 'Google Rich Snippets для FAQ',
        description:
          'Описание инструмента Описание инструмента Описание инструмента Описание инструмента',
      },
    ],
  },
];
