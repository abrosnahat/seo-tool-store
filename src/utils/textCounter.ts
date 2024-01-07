export const textCounter = (text: string) => {
  const stats = {
    words: 0,
    chars: 0,
    charsNoSpaces: 0,
    spaces: 0,
    cyrillic: 0,
    latin: 0,
    digits: 0,
    others: 0,
  };

  const alphaNumericRegex = /[a-zA-Zа-яА-Я]/;
  const spaceRegex = /\s/;
  const cyrillicRegex = /[а-яА-Я]/;
  const latinRegex = /[a-zA-Z]/;
  const digitRegex = /\d/;
  const specialRegex = /[^\w\sа-яА-Яa-zA-Z\d]/;

  const chars = text?.split('');

  chars?.forEach((char) => {
    stats.chars++;

    if (spaceRegex.test(char)) {
      stats.spaces++;
    } else {
      stats.charsNoSpaces++;
    }

    if (cyrillicRegex.test(char)) {
      stats.cyrillic++;
    }

    if (latinRegex.test(char)) {
      stats.latin++;
    }

    if (digitRegex.test(char)) {
      stats.digits++;
    }

    if (specialRegex.test(char)) {
      stats.others++;
    }
  });

  const words = text?.split(spaceRegex);

  words?.forEach((word) => {
    if (word.length > 0 && alphaNumericRegex.test(word)) {
      stats.words++;
    }
  });

  return stats;
};
