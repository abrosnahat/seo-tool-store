'use client';

import { ToolContent } from '@/components/ToolContent/ToolContent';
import { ToolContentText } from '@/components/ToolContentText/ToolContentText';
import { Button, Card, CardBody, Input } from '@nextui-org/react';
import { Controller, useForm } from 'react-hook-form';
import { useSynonymMap } from './hooks/useSynonymMap';

export const Synonyms = () => {
  const synonymMap = useSynonymMap();
  const form = useForm({
    defaultValues: {
      word: '',
      result: [],
    },
  });

  const onSubmit = (data: { word: string }) =>
    form.setValue(
      'result',
      synonymMap.get(data.word) || ['Синонимов не найдено']
    );

  return (
    <ToolContent>
      <ToolContentText>
        Словарь синонимов русского языка - это бесплатный сервис выполняющий
        подбор синонимов к словам в тексте без потери смысла.
      </ToolContentText>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full flex gap-3 items-center'
      >
        <Controller
          name='word'
          control={form.control}
          render={({ field }) => (
            <Input
              {...field}
              variant='faded'
              placeholder='Введите слово для поиска синонима'
              color='primary'
            />
          )}
        />
        <Button
          variant='shadow'
          color='primary'
          className='w-60 h-[56px]'
          type='submit'
        >
          Подобрать
        </Button>
      </form>

      {form.watch('result').length > 1 && (
        <div className='text-xl font-bold'>
          Синонимы к слову «{form.getValues('word')}» найдено{' '}
          {form.getValues('result').length}
        </div>
      )}
      {form.watch('result').length >= 1 && (
        <Card>
          <CardBody>
            {form.watch('result').map((word, index) => (
              <div
                key={index}
                className='text-lg py-2'
              >
                {word}
              </div>
            ))}
          </CardBody>
        </Card>
      )}

      <h2 className='text-2xl font-bold'>Как работает словарь синонимов</h2>
      <ToolContentText>
        С помощью нашего онлайн словаря синонимов можно легко найти слова с
        похожим смыслом. Инструмент будет полезен тем, кто работает с текстами и
        стремится повысить свой уровень грамотности.
      </ToolContentText>
      <ToolContentText>
        Для начала работы введите слово в поле формы поиска и нажмите кнопку
        «Подобрать». Затем сервис в режиме реального времени подберет список
        синонимов и отобразит в виде списка.
      </ToolContentText>

      <ToolContentText>
        <h2 className='text-2xl font-bold'>Преимущества инструмента</h2>
        <ul className='list-inside list-disc'>
          <li>Подбор синонимов доступен 24/7;</li>
          <li>
            Позволяет сэкономить время на нахождение подходящих слов и улучшить
            процесс написания текстов;
          </li>
          <li>Бесплатное использование;</li>
          <li>Постоянное обновление базы.</li>
        </ul>
      </ToolContentText>
    </ToolContent>
  );
};
