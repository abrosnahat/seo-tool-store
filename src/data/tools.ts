import { ToolType } from '@/types/tools';

type Tools = {
  title: string;
  items: {
    id: string;
    type: ToolType;
    url: string;
    title: string;
    description: string;
  }[];
}[];

export const TOOLS: Tools = [
  {
    title: 'Работа с контентом и текстами',
    items: [
      {
        id: '1',
        type: 'transliteration',
        url: 'transliteration',
        title: 'Транслитерация текста',
        description:
          'Преобразуйте буквы с кириллицы в латиницу по ГОСТ и различным стандартам.',
      },
      {
        id: '2',
        type: 'htmlRedactor',
        url: 'html-redactor',
        title: 'HTML редактор онлайн',
        description:
          'Инструмент, который предназначен для редактирования и просмотра HTML-кода.',
      },
      {
        id: '3',
        type: 'textCounter',
        url: 'text-counter',
        title: 'Подсчет длины текста и строки',
        description:
          'Позволяет посчитать количество символов в тексте, узнать число знаков с учетом пробелов и без.',
      },
      {
        id: '4',
        type: 'convertRegister',
        url: 'convert-register',
        title: 'Конвертер регистров',
        description:
          'Инструмент для преобразования заглавных и строчных символов в тексте.',
      },
      {
        id: '5',
        type: 'deleteDuplicate',
        url: 'delete-duplicate',
        title: 'Удаление дубликатов',
        description:
          'Выполняет автоматическое удаление повторяющихся строк или ключевых слов из текста.',
      },
      // {
      //   id: '6',
      //   type: 'duplicateCounter',
      //   url: 'duplicate-counter',
      //   title: 'Подсчет повторяющихся слов',
      //   description:
      //     'Описание инструмента Описание инструмента Описание инструмента Описание инструмента',
      // },
      // {
      //   id: '7',
      //   type: 'googleRich',
      //   url: 'google-rich',
      //   title: 'Google Rich Snippets для FAQ',
      //   description:
      //     'Описание инструмента Описание инструмента Описание инструмента Описание инструмента',
      // },
    ],
  },
];
