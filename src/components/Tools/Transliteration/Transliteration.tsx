'use client';

import { FormField } from '@/ui-kit/FormField/FormField';
import { Input } from '@/ui-kit/Input';
import { Textarea } from '@/ui-kit/Textarea';
import { copyTextToClipBoard } from '@/utils/browser';
import { transliterate } from '@/utils/transliterate';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import styles from './Transliteration.module.scss';
import ClearIcon from './img/clear.svg';
import CopyIcon from './img/copy.svg';

export const Transliteration = () => {
  const form = useForm({
    defaultValues: {
      spaceSymbol: '-',
      rusText: '',
      translitText: '',
    },
  });

  const translitText = transliterate(
    form.watch('rusText'),
    form.watch('spaceSymbol')
  );

  const copyText = async () => {
    await copyTextToClipBoard(translitText);
  };

  return (
    <div className={styles.root}>
      <FormField
        className={styles.field}
        label='Пробел символом:'
      >
        <Input {...form.register('spaceSymbol')} />
      </FormField>
      <div className={styles.textareaWrapper}>
        <Textarea
          rows={8}
          placeholder='Введите текст на русском'
          endAdornment={
            <Image
              className={styles.icon}
              src={ClearIcon}
              alt='clear'
              onClick={() => form.setValue('rusText', '')}
            />
          }
          {...form.register('rusText')}
        />
        <Textarea
          rows={8}
          disabled
          placeholder='Результат транслитерации'
          value={translitText}
          endAdornment={
            <Image
              className={styles.icon}
              src={CopyIcon}
              alt='copy'
              onClick={copyText}
            />
          }
          {...form.register('translitText')}
        />
      </div>
    </div>
  );
};
