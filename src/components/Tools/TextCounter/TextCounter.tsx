'use client';

import { ToolContent } from '@/components/ToolContent/ToolContent';
import { ToolContentText } from '@/components/ToolContentText/ToolContentText';
import { Textarea } from '@/ui-kit/Textarea';
import { textCounter } from '@/utils/textCounter';
import Image from 'next/image';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import styles from './TextCounter.module.scss';
import ClearIcon from './img/clear.svg';

export const TextCounter = () => {
  const form = useForm();
  const textValue = form.watch('text');

  const stats = useMemo(() => textCounter(textValue), [textValue]);

  return (
    <ToolContent>
      <ToolContentText>
        Инструмент по подсчету символов онлайн позволяет в считанные секунды и
        совершенно бесплатно посчитать количество символов в тексте, узнать
        число знаков с учетом пробелов и без, а также определить сколько слов в
        тексте.
      </ToolContentText>
      <Textarea
        rows={12}
        placeholder='Введите текст'
        endAdornment={
          <Image
            className={styles.icon}
            src={ClearIcon}
            alt='clear'
            onClick={() => form.setValue('text', '')}
          />
        }
        {...form.register('text')}
      />

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Количество слов</span>
          <span className={styles.statValue}>{stats.words}</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statLabel}> Количество символов</span>
          <span className={styles.statValue}>{stats.chars}</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statLabel}>
            Количество символов без пробелов
          </span>
          <span className={styles.statValue}>{stats.charsNoSpaces}</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Количество пробелов</span>
          <span className={styles.statValue}>{stats.spaces}</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statLabel}>
            Количество кириллических символов
          </span>
          <span className={styles.statValue}>{stats.cyrillic}</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statLabel}>
            Количество латинских символов
          </span>
          <span className={styles.statValue}>{stats.latin}</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Количество цифр</span>
          <span className={styles.statValue}>{stats.digits}</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statLabel}>
            Количество остальных символов
          </span>
          <span className={styles.statValue}>{stats.others}</span>
        </div>
      </div>

      <ToolContentText>
        Сервис по подсчету количества символов в тексте будет полезен
        копирайтерам, SEO-специалистам и директологам. Процесс подсчета слов
        происходит без отправки текста на сервер (т.е. все происходит в
        браузере). Поэтому, вы можете быть уверены, что ваш текст нигде не
        сохраняется и не может быть использован третьими лицами.
      </ToolContentText>

      <h2>Как пользоваться инструментом</h2>
      <ToolContentText>
        Процедура анализа проста: скопируйте необходимый фрагмент или весь текст
        и вставьте его в специальное окно для подсчета длины. С помощью
        встроенной функции программа мгновенно предоставит вам результат
        проверки.
      </ToolContentText>
      <ToolContentText>
        Кроме того, следует отметить отсутствие ограничений на длину
        проверяемого текста. Это обеспечивает возможность анализа текстовых
        материалов и статей любого размера и формата.
      </ToolContentText>
    </ToolContent>
  );
};
