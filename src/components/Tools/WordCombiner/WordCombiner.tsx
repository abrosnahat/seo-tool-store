'use client';

import { ToolContent } from '@/components/ToolContent/ToolContent';
import { ToolContentText } from '@/components/ToolContentText/ToolContentText';
import { Button } from '@/ui-kit/Button';
import { Checkbox } from '@/ui-kit/Checkbox/Checkbox';
import { ClearText } from '@/ui-kit/ClearText/ClearText';
import { CopyText } from '@/ui-kit/CopyText/CopyText';
import { Textarea } from '@/ui-kit/Textarea';
import { wordCombiner } from '@/utils/wordCombiner';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
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
        <Textarea
          rows={12}
          placeholder='Список слов'
          endAdornment={
            <ClearText onClick={() => form.setValue('input1', '')} />
          }
          {...form.register('input1')}
        />
        <Textarea
          rows={12}
          placeholder='Список слов'
          endAdornment={
            <ClearText onClick={() => form.setValue('input2', '')} />
          }
          {...form.register('input2')}
        />
        <Textarea
          rows={12}
          placeholder='Список слов'
          endAdornment={
            <ClearText onClick={() => form.setValue('input3', '')} />
          }
          {...form.register('input3')}
        />
      </div>

      <div className={styles.settings}>
        <ToolContentText>
          <b>Дополнительные настройки</b>
        </ToolContentText>
        <div className={styles.checkboxWrapper}>
          <Checkbox
            checked={form.watch('withQuotes')}
            onChange={(e) => form.setValue('withQuotes', e.target.checked)}
            label={'Заключить в " "'}
          />
          <Checkbox
            checked={form.watch('squareBrackets')}
            onChange={(e) => form.setValue('squareBrackets', e.target.checked)}
            label={'Заключить в [ ]'}
          />
          <Checkbox
            checked={form.watch('showWithoutOperators')}
            onChange={(e) =>
              form.setValue('showWithoutOperators', e.target.checked)
            }
            label={'Добавить комбинации без операторов'}
            disabled={
              !(
                form.getValues('withQuotes') || form.getValues('squareBrackets')
              )
            }
          />
          <Checkbox
            checked={form.watch('addPlus')}
            onChange={(e) => form.setValue('addPlus', e.target.checked)}
            label={'Добавить «+» к стоп-словам'}
          />
        </div>
      </div>

      <Button
        className={styles.button}
        variant='purple'
        onClick={handleWordCombiner}
      >
        Сгенерировать фразы
      </Button>

      {form.getValues('result') && (
        <div className={styles.result}>
          <ToolContentText>Всего строк: {numberCombinations}</ToolContentText>
          <Textarea
            rows={12}
            endAdornment={<CopyText text={form.getValues('result')} />}
            {...form.register('result')}
          />
        </div>
      )}

      <h2>Как пользоваться комбинатором</h2>
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
        <ul className={styles.textList}>
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
