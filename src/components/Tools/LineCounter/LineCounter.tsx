'use client';

import { ToolContent } from '@/components/ToolContent/ToolContent';
import { ToolContentText } from '@/components/ToolContentText/ToolContentText';
import { ClearText } from '@/ui-kit/ClearText/ClearText';
import { lineCounter } from '@/utils/lineCounter';
import { Card, CardBody, Textarea } from '@nextui-org/react';
import { useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';

export const LineCounter = () => {
  const form = useForm();
  const textValue = form.watch('text');

  const result = useMemo(() => lineCounter(textValue), [textValue]) || 0;

  return (
    <ToolContent>
      <ToolContentText>
        Онлайн сервис для подсчёта строк в тексте с учетом переносов.
      </ToolContentText>

      <Controller
        name='text'
        control={form.control}
        render={({ field }) => (
          <Textarea
            {...field}
            minRows={12}
            variant='faded'
            color='primary'
            placeholder='Введите текст'
            endContent={<ClearText onClick={() => form.setValue('text', '')} />}
          />
        )}
      />

      <Card className='font-bold'>
        <CardBody>Количество строк: {result}</CardBody>
      </Card>

      <h2 className='text-2xl font-bold'>Как использовать инструмент</h2>
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
