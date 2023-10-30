'use client';

import { FormField } from '@/ui-kit/FormField/FormField';
import { Input } from '@/ui-kit/Input';
import { Textarea } from '@/ui-kit/Textarea';
import { Metadata } from 'next';
import { useForm } from 'react-hook-form';
import styles from './Transliteration.module.scss';

// @TODO: Починить title
export const metadata: Metadata = {
  title: 'Транслитерация текста',
};

export const Transliteration = () => {
  const form = useForm({
    defaultValues: {
      spaceSymbol: '-',
      rusText: '',
      translitText: '',
    },
  });

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
          {...form.register('rusText')}
        />
        <Textarea
          rows={8}
          placeholder='Результат транслитерации'
          disabled
          {...form.register('translitText')}
        />
      </div>
    </div>
  );
};
