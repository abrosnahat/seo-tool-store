import { useMemo } from 'react';
import data from '../../../../data/dictionary.json';

export const useSynonymMap = () => {
  const createSynonymMap = (data: {
    wordList: { name: string; synonyms: string[] }[];
  }) => {
    const { wordList } = data;
    const synonymMap = new Map();
    for (let entry of wordList) {
      if (entry.synonyms && entry.synonyms.length > 0) {
        synonymMap.set(entry.name.toLowerCase(), entry.synonyms);
      }
    }

    return synonymMap;
  };

  const synonymMap = useMemo(
    () =>
      createSynonymMap(
        data as { wordList: { name: string; synonyms: string[] }[] }
      ),
    []
  );

  return synonymMap;
};
