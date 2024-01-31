import { CONVERTER } from '@/constants/converter';

export const transliterate = (word: string, symbol: string) => {
  let answer = '';
  for (let i = 0; i < word.length; ++i) {
    if (CONVERTER[word[i]] == undefined) {
      answer += word[i];
    } else {
      answer += CONVERTER[word[i]];
    }
  }

  answer = answer.replace(/\s/g, symbol);

  return answer;
};
