'use client';

import { ToolContent } from '@/components/ToolContent/ToolContent';
import { ToolContentText } from '@/components/ToolContentText/ToolContentText';
import { ClearText } from '@/ui-kit/ClearText/ClearText';
import { Table } from '@/ui-kit/Table/Table';
import { countUniqueWords } from '@/utils/duplicateWordsCounter';
import { Button, Textarea } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

export const DuplicateWordsCounter = () => {
  const [showResult, setShowResult] = useState(false);
  const form = useForm<{
    text: string;
    ignoreWords: string;
    result: { key: number; word: string; count: number }[];
  }>({
    defaultValues: {
      text: '',
      ignoreWords: DEFAULT_IGNORE_WORDS,
      result: [],
    },
  });

  const handleCountUniqueWords = () => {
    const uniqueWords = countUniqueWords(
      form.getValues('text'),
      form.getValues('ignoreWords')
    );

    form.setValue('result', uniqueWords);
    !!form.getValues('text') && setShowResult(true);
  };

  return (
    <ToolContent>
      <ToolContentText>
        Подсчет повторяющихся слов — это онлайн-сервис, который анализирует ваш
        текст и показывает, какие слова или фразы вы употребляете чаще других.
        Его можно использовать для повышения удобочитаемости и ясности текста.
      </ToolContentText>

      <div className='w-full flex flex-col gap-8 md:flex-row'>
        <div className='w-full flex flex-col gap-4 items-start'>
          <Controller
            name='text'
            control={form.control}
            render={({ field }) => (
              <Textarea
                {...field}
                minRows={12}
                variant='faded'
                color='primary'
                label='Введите текст'
                labelPlacement='outside'
                endContent={
                  <ClearText onClick={() => form.setValue('text', '')} />
                }
              />
            )}
          />
          <Button
            variant='shadow'
            color='primary'
            onClick={handleCountUniqueWords}
            isDisabled={!form.watch('text')}
          >
            Подсчитать
          </Button>
        </div>
        <div className='flex flex-col gap-4 items-start'>
          <Controller
            name='ignoreWords'
            control={form.control}
            render={({ field }) => (
              <Textarea
                {...field}
                minRows={12}
                variant='faded'
                color='primary'
                label='Список игнорируемых слов'
                labelPlacement='outside'
                endContent={
                  <ClearText onClick={() => form.setValue('ignoreWords', '')} />
                }
              />
            )}
          />
          <Button
            variant='shadow'
            color='primary'
            onClick={() => form.setValue('ignoreWords', DEFAULT_IGNORE_WORDS)}
          >
            Ввести стандартный список слов
          </Button>
        </div>
      </div>

      {showResult && (
        <motion.div
          className='w-3/6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Table
            columns={[
              { key: 'word', label: 'Ключевое слово' },
              { key: 'count', label: 'Количество повторений' },
            ]}
            rows={form.watch('result')}
            withPagination
          />
        </motion.div>
      )}

      <h2 className='text-2xl font-bold'>
        Как программа поиска повторяющихся слов может помочь вам в письме?
      </h2>
      <ToolContentText>
        Сервис поиска одинаковых слов будет полезен при редактировании и
        корректировки текстов. Вы сможете увидеть, насколько вы избегаете
        тавтологии, используете разнообразный словарный запас и подбираете
        подходящие слова для вашей темы и аудитории.
      </ToolContentText>

      <h2 className='text-2xl font-bold'>Как пользоваться инструментом</h2>
      <ToolContentText>
        Вставьте любой текст в поле ввода и нажать кнопку
        &quot;Подсчитать&quot;. В течение нескольких секунд вы получите итоговый
        результат с количеством дублей слов.
      </ToolContentText>
    </ToolContent>
  );
};

const DEFAULT_IGNORE_WORDS = `а
бы
в
во
вот
для
до
если
же
за
и
из
или
к
ко
между
на
над
но
о
об
около
от
ото
по
под
подо
при
про
с
со
среди
то
у
чтобы`;
