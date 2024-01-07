import { STOP_WORDS } from '@/constants/stopWords';

export const wordCombiner = (
  input1: string,
  input2: string,
  input3: string,
  options: {
    withQuotes?: boolean;
    squareBrackets?: boolean;
    showWithoutOperators?: boolean;
    addPlus?: boolean;
  }
) => {
  const words1 = input1.split('\n');
  const words2 = input2.split('\n');
  const words3 = input3.split('\n');

  const combinations: string[] = [];

  words1.forEach((word1) => {
    words2.forEach((word2) => {
      words3.forEach((word3) => {
        const combination = `${word1} ${word2} ${word3}`;

        if (options.withQuotes) {
          combinations.push(`"${combination}"`);
        }

        if (options.squareBrackets) {
          combinations.push(`[${combination}]`);
        }

        if (
          (!options.withQuotes && !options.squareBrackets) ||
          options.showWithoutOperators
        ) {
          combinations.push(combination);
        }
      });
    });
  });

  const result = options.addPlus
    ? combinations
        .map((sentence) =>
          sentence
            .split(' ')
            .map((word) => (isStopWord(word) ? `+${word}` : word))
            .join(' ')
        )
        .join('\n')
    : combinations.join('\n');

  return { result, numberCombinations: combinations.length };
};

const isStopWord = (word: string) => STOP_WORDS.includes(word);
