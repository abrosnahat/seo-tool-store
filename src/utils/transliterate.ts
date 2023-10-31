import { CONVERTER } from '@/constants/converter';

export const transliterate = (word: string, symbol: string) => {
  let answer = '';
  for (var i = 0; i < word.length; ++i) {
    if (CONVERTER[word[i]] == undefined) {
      answer += word[i];
    } else {
      answer += CONVERTER[word[i]];
    }
  }

  answer = answer.replace(/[^-0-9a-zA-Z]/g, symbol);
  answer = answer.replace(/[-]+/g, symbol);
  answer = answer.replace(/^\-|-$/g, '');

  return answer;
};
