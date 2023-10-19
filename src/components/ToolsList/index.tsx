import Image from 'next/image';
import Link from 'next/link';
import Icon from './icon.svg';
import styles from './toolsList.module.scss';

export const ToolsList = () => {
  return (
    <div className={styles.root}>
      {MOCK_DATA.map((tool) => (
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
  );
};

const MOCK_DATA = [
  {
    id: '1',
    url: 'transliteration',
    title: 'Транслитерация текста',
    description:
      'Описание инструмента Описание инструмента Описание инструмента Описание инструмента',
  },
  {
    id: '2',
    url: 'transliteration',
    title: 'Транслитерация текста',
    description:
      'Описание инструмента Описание инструмента Описание инструмента Описание инструмента',
  },
  {
    id: '3',
    url: 'transliteration',
    title: 'Транслитерация текста',
    description:
      'Описание инструмента Описание инструмента Описание инструмента Описание инструмента',
  },
  {
    id: '4',
    url: 'transliteration',
    title: 'Транслитерация текста',
    description:
      'Описание инструмента Описание инструмента Описание инструмента Описание инструмента',
  },
  {
    id: '5',
    url: 'transliteration',
    title: 'Транслитерация текста',
    description:
      'Описание инструмента Описание инструмента Описание инструмента Описание инструмента',
  },
  {
    id: '6',
    url: 'transliteration',
    title: 'Транслитерация текста',
    description:
      'Описание инструмента Описание инструмента Описание инструмента Описание инструмента',
  },
  {
    id: '7',
    url: 'transliteration',
    title: 'Транслитерация текста',
    description:
      'Описание инструмента Описание инструмента Описание инструмента Описание инструмента',
  },
];
