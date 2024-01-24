export const countUniqueWords = (text: string, ignoreWords: string) => {
  const uniqueWords: Record<string, number> = {};

  const words = text
    .toLowerCase()
    .replace(/[^a-zа-яё0-9\s]/gi, '')
    .split(/\s/);
  const ignoreList = ignoreWords.toLowerCase().split(/\s/);

  words.forEach((word) => {
    if (word !== '' && !ignoreList.includes(word)) {
      uniqueWords[word] = (uniqueWords[word] || 0) + 1;
    }
  });

  const resultArray = Object.keys(uniqueWords).map((word, index) => ({
    key: index,
    word: word,
    count: uniqueWords[word],
  }));

  const sortedResultArray = resultArray.sort((a, b) => b.count - a.count);

  return sortedResultArray;
};
