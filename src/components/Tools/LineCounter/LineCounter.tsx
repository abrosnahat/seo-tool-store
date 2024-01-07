'use client';

import { ToolContent } from '@/components/ToolContent/ToolContent';
import { ToolContentText } from '@/components/ToolContentText/ToolContentText';
import { ClearText } from '@/ui-kit/ClearText/ClearText';
import { Textarea } from '@/ui-kit/Textarea';
import { lineCounter } from '@/utils/lineCounter';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import styles from './LineCounter.module.scss';

export const LineCounter = () => {
  const form = useForm();
  const textValue = form.watch('text');

  const result = useMemo(() => lineCounter(textValue), [textValue]) || 0;

  return (
    <ToolContent>
      <ToolContentText>
        Онлайн сервис для подсчёта строк в тексте с учетом переносов.
      </ToolContentText>
      <Textarea
        rows={12}
        placeholder='Введите текст'
        endAdornment={<ClearText onClick={() => form.setValue('text', '')} />}
        {...form.register('text')}
      />
      <div className={styles.result}>Количество строк: {result}</div>

      <h2>Как использовать инструмент</h2>
      <ToolContentText>
        Для подсчета вставьте скопированный текст в форму. В этом же окне
        калькулятор отобразит количество строк в тексте.
      </ToolContentText>
      <ToolContentText>
        Воспользуйтесь нашим инструментом и избавьтесь от большого объема
        рутинной работы.
      </ToolContentText>
    </ToolContent>
  );
};
