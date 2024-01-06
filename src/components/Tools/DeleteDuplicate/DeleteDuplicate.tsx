'use client';

import { ToolContent } from '@/components/ToolContent/ToolContent';
import { ToolContentText } from '@/components/ToolContentText/ToolContentText';
import { Button } from '@/ui-kit/Button';
import { ClearText } from '@/ui-kit/ClearText/ClearText';
import { Textarea } from '@/ui-kit/Textarea';
import { useForm } from 'react-hook-form';
import styles from './DeleteDuplicate.module.scss';

export const DeleteDuplicate = () => {
  const form = useForm();

  const handleDeleteDuplicate = (text: string) => {
    const result = text
      .split('\n')
      .filter((item, i, allItems) => {
        return i === allItems.indexOf(item);
      })
      .join('\n');

    form.setValue('text', result);
  };

  return (
    <ToolContent>
      <ToolContentText>
        Инструмент для удаления дубликатов строк онлайн выполняет автоматическое
        исключение повторяющихся строк или ключевых слов из текста. Сервис будет
        полезен специалистам по контекстной рекламе, маркетологам и
        копирайтерам.
      </ToolContentText>
      <div className={styles.text}>
        <ToolContentText>
          Введите список для удаления дубликатов
        </ToolContentText>
        <Textarea
          rows={12}
          endAdornment={<ClearText onClick={() => form.setValue('text', '')} />}
          {...form.register('text')}
        />
      </div>
      <Button
        className={styles.button}
        variant='purple'
        onClick={() => handleDeleteDuplicate(form.getValues('text'))}
      >
        Удалить дубли
      </Button>
      <h2>Как пользоваться инструментом</h2>
      <div className={styles.text}>
        <ToolContentText>
          Для того, чтобы удалить дубликаты из списка необходимо:
        </ToolContentText>
        <ol className={styles.textList}>
          <li>
            Вставить скопированный список ключевых слов в специальную форму и
            нажать кнопку «Удалить дубли». При добавлении слов вручную с
            клавиатуры следует вносить каждое новое слово в отдельной строке.
            Ограничение на длину проверяемого текста отсутствует.
          </li>
          <li>
            В этом же окне вы получаете итоговый результат, который можно
            скопировать в буфер обмена используя комбинацию клавиш Ctrl+C.
          </li>
        </ol>
      </div>
    </ToolContent>
  );
};
