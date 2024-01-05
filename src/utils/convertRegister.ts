import { TabsKey } from '@/types/convertRegister';

export const convertText = (text: string, key: TabsKey): string => {
  switch (key) {
    case 'upperCase':
      return text.toUpperCase();
    case 'lowerCase':
      return text.toLowerCase();
    case 'capitalLetters':
      return text.replace(/(^|\s)([a-zA-ZА-Яа-я])/g, (char) =>
        char.toUpperCase()
      );
    case 'registerInversion':
      return text.replace(/[a-zA-Zа-яА-Я]/g, (char) =>
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
      );
    case 'bySuggestions':
      return text.replace(
        /(^|[.!?]\s+)([a-zA-Zа-яА-Я])/g,
        (_, separator, char) => separator + char.toUpperCase()
      );
    default:
      return text;
  }
};
