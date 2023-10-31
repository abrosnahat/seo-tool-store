'use client';

import { FormField } from '@/ui-kit/FormField/FormField';
import { Input } from '@/ui-kit/Input';
import { Textarea } from '@/ui-kit/Textarea';
import { transliterate } from '@/utils/transliterate';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import styles from './Transliteration.module.scss';
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
          value={translitText}
          endAdornment={
            <Image
              src={CopyIcon}
              alt=''
            />
          }
        />
      </div>
    </div>
  );
};
