'use client';

import { ToolContent } from '@/components/ToolContent/ToolContent';
import { ToolContentText } from '@/components/ToolContentText/ToolContentText';
import { ClearText } from '@/ui-kit/ClearText/ClearText';
import { CopyText } from '@/ui-kit/CopyText/CopyText';
import { wordCombiner } from '@/utils/wordCombiner';
import { Button, Card, CardBody, Checkbox, Textarea } from '@nextui-org/react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styles from './WordCombiner.module.scss';

export const WordCombiner = () => {
  const form = useForm({
    defaultValues: {
      input1: '',
      input2: '',
      input3: '',
      withQuotes: false,
      squareBrackets: false,
      showWithoutOperators: false,
      addPlus: false,
      result: '',
    },
  });
  const [numberCombinations, setNumberCombinations] = useState<number>();

  const handleWordCombiner = () => {
    const combiningWords = wordCombiner(
      form.getValues('input1'),
      form.getValues('input2'),
      form.getValues('input3'),
      {
        withQuotes: form.getValues('withQuotes'),
        squareBrackets: form.getValues('squareBrackets'),
        showWithoutOperators: form.getValues('showWithoutOperators'),
        addPlus: form.getValues('addPlus'),
      }
    );

    form.setValue('result', combiningWords.result);
    setNumberCombinations(combiningWords.numberCombinations);
  };

  return (
    <ToolContent>
      <ToolContentText>
        Инструмент помогает перемножить слова и фразы из каждого списка слов.
        Сервис будет полезен маркетологам, SEO-специалистам и директологам.
      </ToolContentText>

      <div className={styles.textareaWrapper}>
        <Controller
          name='input1'
          control={form.control}
          render={({ field }) => (
            <Textarea
              {...field}
              minRows={12}
              variant='faded'
              color='primary'
              placeholder='Список слов'
              endContent={
                <ClearText onClick={() => form.setValue('input1', '')} />
              }
            />
          )}
        />
        <Controller
          name='input2'
          control={form.control}
          render={({ field }) => (
            <Textarea
              {...field}
              minRows={12}
              variant='faded'
              color='primary'
              placeholder='Список слов'
              endContent={
                <ClearText onClick={() => form.setValue('input2', '')} />
              }
            />
          )}
        />
        <Controller
          name='input3'
          control={form.control}
          render={({ field }) => (
            <Textarea
              {...field}
              minRows={12}
              variant='faded'
              color='primary'
              placeholder='Список слов'
              endContent={
                <ClearText onClick={() => form.setValue('input3', '')} />
              }
            />
          )}
        />
      </div>

      <Card>
        <CardBody className={styles.settings}>
          <ToolContentText>
            <b>Дополнительные настройки</b>
          </ToolContentText>
          <div className={styles.checkboxWrapper}>
            <Checkbox
              checked={form.watch('withQuotes')}
              onChange={(e) => form.setValue('withQuotes', e.target.checked)}
            >
              {'Заключить в " "'}
            </Checkbox>
            <Checkbox
              checked={form.watch('squareBrackets')}
              onChange={(e) =>
                form.setValue('squareBrackets', e.target.checked)
              }
            >
              Заключить в [ ]
            </Checkbox>
            <Checkbox
              checked={form.watch('showWithoutOperators')}
              onChange={(e) =>
                form.setValue('showWithoutOperators', e.target.checked)
              }
              isDisabled={
                !(
                  form.getValues('withQuotes') ||
                  form.getValues('squareBrackets')
                )
              }
            >
              Добавить комбинации без операторов
            </Checkbox>
            <Checkbox
              checked={form.watch('addPlus')}
              onChange={(e) => form.setValue('addPlus', e.target.checked)}
            >
              Добавить «+» к стоп-словам
            </Checkbox>
          </div>
        </CardBody>
      </Card>

      <Button
        variant='shadow'
        color='primary'
        size='lg'
        onClick={handleWordCombiner}
      >
        Сгенерировать фразы
      </Button>

      {form.getValues('result') && (
        <div className={styles.result}>
          <ToolContentText>Всего строк: {numberCombinations}</ToolContentText>
          <Controller
            name='result'
            control={form.control}
            render={({ field }) => (
              <Textarea
                {...field}
                minRows={12}
                variant='faded'
                color='primary'
                endContent={<CopyText text={form.getValues('result')} />}
              />
            )}
          />
        </div>
      )}

      <h2 className='text-2xl font-bold'>Как пользоваться комбинатором</h2>
      <ToolContentText>
        Вы можете ввести слова в каждый из нужных вам поля или скопировать их из
        файла. Затем остается нажать кнопку «Сгенерировать фразы». Пустые или
        повторяющиеся строки не учитываются. Пересечение слов осуществляется
        между всеми указанными столбцами в режиме реального времени.
      </ToolContentText>
      <ToolContentText>
        Например, у вас есть сервисный центр, где вы оказываете услугу по
        ремонту бытовой техники. Слово «ремонт» будет в первом списке. Во втором
        списке необходимо указать, ремонт какой техники вы оказываете:
        стиральной машины. А в третьем прописываются населенный пункт: Москва.
      </ToolContentText>
      <div className={styles.text}>
        <ToolContentText>
          В результате использования комбинатора ключевых фраз получается список
          готовых запросов:
        </ToolContentText>
        <ul className='list-inside list-disc'>
          <li>Ремонт стиральной машины Москва</li>
        </ul>
        <ToolContentText>
          Скомбинированный список ключей может быть использован для последующей
          работы с ними в Key Collector, Яндекс.Директ или других инструментах.
        </ToolContentText>
      </div>
    </ToolContent>
  );
};
