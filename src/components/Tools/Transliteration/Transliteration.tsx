'use client';

import { ToolContent } from '@/components/ToolContent/ToolContent';
import { ToolContentText } from '@/components/ToolContentText/ToolContentText';
import { ClearText } from '@/ui-kit/ClearText/ClearText';
import { CopyText } from '@/ui-kit/CopyText/CopyText';
import { Table } from '@/ui-kit/Table/Table';
import { transliterate } from '@/utils/transliterate';
import { Input, Textarea } from '@nextui-org/react';
import { Controller, useForm } from 'react-hook-form';
import styles from './Transliteration.module.scss';

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
    <ToolContent>
      <ToolContentText>
        Транслитерация онлайн - это простой и удобный сервис, предназначенный
        для преобразования текста с кириллицы в латиницу.
      </ToolContentText>

      <Controller
        name='spaceSymbol'
        control={form.control}
        render={({ field }) => (
          <Input
            {...field}
            variant='faded'
            label='Пробел символом:'
            labelPlacement='outside'
            placeholder=' '
            className='w-25'
            color='primary'
          />
        )}
      />

      <div className={styles.textareaWrapper}>
        <Controller
          name='rusText'
          control={form.control}
          render={({ field }) => (
            <Textarea
              {...field}
              minRows={8}
              variant='faded'
              color='primary'
              placeholder='Введите текст на русском'
              endContent={
                <ClearText onClick={() => form.setValue('rusText', '')} />
              }
            />
          )}
        />
        <Controller
          name='translitText'
          control={form.control}
          render={({ field }) => (
            <Textarea
              {...field}
              minRows={8}
              variant='faded'
              color='primary'
              placeholder='Результат транслитерации'
              value={translitText}
              endContent={<CopyText text={translitText} />}
              disabled
            />
          )}
        />
      </div>
      <ToolContentText>
        Транслит с русского на английский включает замену каждой буквы русского
        алфавита соответствующей буквой английского алфавита. Например, буква
        &quot;а&quot; заменяется на &quot;a&quot;, &quot;б&quot; на
        &quot;b&quot;, &quot;в&quot; на &quot;v&quot; и так далее.
      </ToolContentText>
      <div className={styles.table}>
        <ToolContentText>
          Вот несколько примеров транслитерации с русского на английский:
        </ToolContentText>
        <Table
          columns={[
            { key: 'ru', label: 'Русский' },
            { key: 'translit', label: 'Транслитерация' },
          ]}
          rows={[
            { key: '1', ru: 'Привет', translit: 'Privet' },
            { key: '2', ru: 'Таблица', translit: 'Tablica' },
            { key: '3', ru: 'Загранпаспорт', translit: 'Zagranpasport' },
          ]}
        />
      </div>
      <div className={styles.text}>
        <h2 className='text-2xl font-bold'>Инструкция</h2>
        <p>
          Работать с программой очень просто. В левом окне вставляете текст на
          кириллице, а затем алгоритм мгновенно распознает и обрабатывает этот
          фрагмент. Готовый результат транслитерации отобразиться в правом окне.
        </p>
        <p>Используйте в своей работе:</p>
        <ul className='list-inside list-disc'>
          <li>
            Разделитель слов – позволяет добавить любой символ или букву на
            место пробела;
          </li>
          <li>Очистить — функция удаляет содержимое левой формы;</li>
          <li>
            Копировать — функция копирования итога транслитерации в буфер
            обмена.
          </li>
        </ul>
        <p>
          И что важно, наш сервис не накладывает ограничения на количество
          введенных знаков. Вы можете переводить абсолютно любой объем контента,
          без каких-либо ограничений.
        </p>
      </div>
      <div className={styles.text}>
        <h2 className='text-2xl font-bold'>Где применяется</h2>
        <p>Основные направления по использованию инструмента:</p>
        <ul className='list-inside list-disc'>
          <li>
            Используется веб-мастерами в SEO оптимизации сайтов для того, чтобы
            сформировать ЧеловекоПонятный УРЛ (ЧПУ).
          </li>
          <li>
            Транслитерация незаменима в англоязычных системах, где отсутствует
            поддержка кириллицы, для перевода различных наименований, таких как
            имена, фамилии, файлы и папки на нужный язык.
          </li>
        </ul>
      </div>
    </ToolContent>
  );
};
