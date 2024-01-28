import { ToolType } from '@/types/tools';

export const TOOLS_TITLE: Record<ToolType, string> = {
  transliteration: 'Транслитерация текста',
  textCounter: 'Подсчет длины текста и строки',
  htmlRedactor: 'HTML редактор онлайн',
  convertRegister: 'Конвертер регистров',
  deleteDuplicate: 'Удаление дубликатов',
  wordCombiner: 'Комбинатор ключевых слов и фраз',
  lineCounter: 'Посчитать количество строк онлайн',
  faqSchemaGenerator: 'Генератор FAQPage JSON-LD разметки',
  duplicateWordsCounter: 'Поиск повторяющихся слов',
  synonyms: 'Синонимы онлайн',
  openGraphGenerator: 'Open Graph Генератор',
};
