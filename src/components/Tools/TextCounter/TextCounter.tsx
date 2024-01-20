'use client';

import { ToolContent } from '@/components/ToolContent/ToolContent';
import { ToolContentText } from '@/components/ToolContentText/ToolContentText';
import { ClearText } from '@/ui-kit/ClearText/ClearText';
import { textCounter } from '@/utils/textCounter';
import { Card, CardBody, Textarea } from '@nextui-org/react';
import { useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styles from './TextCounter.module.scss';

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

      <div className={styles.stats}>
        <Card>
          <CardBody className={styles.stat}>
            <span className={styles.statLabel}>Количество слов</span>
            <span className={styles.statValue}>{stats.words}</span>
          </CardBody>
        </Card>
        <Card>
          <CardBody className={styles.stat}>
            <span className={styles.statLabel}> Количество символов</span>
            <span className={styles.statValue}>{stats.chars}</span>
          </CardBody>
        </Card>
        <Card>
          <CardBody className={styles.stat}>
            <span className={styles.statLabel}>
              Количество символов без пробелов
            </span>
            <span className={styles.statValue}>{stats.charsNoSpaces}</span>
          </CardBody>
        </Card>
        <Card>
          <CardBody className={styles.stat}>
            <span className={styles.statLabel}>Количество пробелов</span>
            <span className={styles.statValue}>{stats.spaces}</span>
          </CardBody>
        </Card>
        <Card>
          <CardBody className={styles.stat}>
            <span className={styles.statLabel}>
              Количество кириллических символов
            </span>
            <span className={styles.statValue}>{stats.cyrillic}</span>
          </CardBody>
        </Card>
        <Card>
          <CardBody className={styles.stat}>
            <span className={styles.statLabel}>
              Количество латинских символов
            </span>
            <span className={styles.statValue}>{stats.latin}</span>
          </CardBody>
        </Card>
        <Card>
          <CardBody className={styles.stat}>
            <span className={styles.statLabel}>Количество цифр</span>
            <span className={styles.statValue}>{stats.digits}</span>
          </CardBody>
        </Card>
        <Card>
          <CardBody className={styles.stat}>
            <span className={styles.statLabel}>
              Количество остальных символов
            </span>
            <span className={styles.statValue}>{stats.others}</span>
          </CardBody>
        </Card>
      </div>

      <ToolContentText>
        Сервис по подсчету количества символов в тексте будет полезен
        копирайтерам, SEO-специалистам и директологам. Процесс подсчета слов
        происходит без отправки текста на сервер (т.е. все происходит в
        браузере). Поэтому, вы можете быть уверены, что ваш текст нигде не
        сохраняется и не может быть использован третьими лицами.
      </ToolContentText>

      <h2 className='text-2xl font-bold'>Как пользоваться инструментом</h2>
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
