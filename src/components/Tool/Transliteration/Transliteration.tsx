'use client';

import { FormField } from '@/ui-kit/FormField/FormField';
import { Input } from '@/ui-kit/Input';
import { Table } from '@/ui-kit/Table/Table';
import { Textarea } from '@/ui-kit/Textarea';
import { copyTextToClipBoard } from '@/utils/browser';
import { transliterate } from '@/utils/transliterate';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { Description } from '../Description/Description';
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
      <Description>
        Транслитерация онлайн - это простой и удобный сервис, предназначенный
        для преобразования текста с кириллицы в латиницу.
      </Description>
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
      <p className={styles.text}>
        Транслит с русского на английский включает замену каждой буквы русского
        алфавита соответствующей буквой английского алфавита. Например, буква
        &quot;а&quot; заменяется на &quot;a&quot;, &quot;б&quot; на
        &quot;b&quot;, &quot;в&quot; на &quot;v&quot; и так далее.
      </p>
      <div className={styles.table}>
        <p className={styles.text}>
          Вот несколько примеров транслитерации с русского на английский:
        </p>
        <Table
          headers={['Русский', 'Транслитерация']}
          data={[
            { ru: 'Привет', translit: 'Privet' },
            { ru: 'Таблица', translit: 'Tablica' },
            { ru: 'Загранпаспорт', translit: 'Zagranpasport' },
          ]}
        />
      </div>
      <div className={styles.text}>
        <h2>Инструкция</h2>
        <p>
          Работать с программой очень просто. В левом окне вставляете текст на
          кириллице, а затем алгоритм мгновенно распознает и обрабатывает этот
          фрагмент. Готовый результат транслитерации отобразиться в правом окне.
        </p>
        <p>Используйте в своей работе:</p>
        <ul className={styles.textList}>
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
        <h2>Где применяется</h2>
        <p>Основные направления по использованию инструмента:</p>
        <ul className={styles.textList}>
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
    </div>
  );
};
