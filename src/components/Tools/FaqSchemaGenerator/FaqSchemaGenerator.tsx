'use client';

import { ToolContent } from '@/components/ToolContent/ToolContent';
import { ToolContentText } from '@/components/ToolContentText/ToolContentText';
import { ClearText } from '@/ui-kit/ClearText/ClearText';
import { Input } from '@/ui-kit/Input';
import { Select } from '@/ui-kit/Select/Select';
import { Textarea } from '@/ui-kit/Textarea';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import styles from './FaqSchemaGenerator.module.scss';
import DeleteIcon from './img/delete.svg';
import ExampleImg from './img/example.png';

export const FaqSchemaGenerator = () => {
  const form = useForm();

  return (
    <ToolContent>
      <ToolContentText>
        Онлайн инструмент для создания разметки для блока FAQ на сайте в формате
        HTML и JSON-LD.
      </ToolContentText>
      <div className={styles.tool}>
        <div className={styles.faq}>
          <ToolContentText>
            <b>FAQs</b>
          </ToolContentText>
          <div className={styles.block}>
            <div className={styles.faqItem}>
              <div className={styles.faqInputs}>
                <Input />
                <Textarea />
              </div>
              <Image
                className={styles.delete}
                width={25}
                src={DeleteIcon}
                alt='Delete icon'
              />
            </div>
            <div className={styles.faqItem}>
              <div className={styles.faqInputs}>
                <Input />
                <Textarea />
              </div>
              <Image
                className={styles.delete}
                width={25}
                src={DeleteIcon}
                alt='Delete icon'
              />
            </div>
          </div>
        </div>
        <div className={styles.block}>
          <ToolContentText>
            <b>Код</b>
          </ToolContentText>
          <Select
            options={[{ label: 'biba', value: 'bo' }]}
            onChange={() => null}
          />
          <Textarea
            rows={12}
            placeholder='Введите текст'
            endAdornment={
              <ClearText onClick={() => form.setValue('text', '')} />
            }
            {...form.register('text')}
          />
        </div>
      </div>

      <div className={styles.text}>
        <ToolContentText>
          Микроразметка FAQ необходима для того, чтобы:
        </ToolContentText>
        <ul className={styles.textList}>
          <li>увеличить видимость сайта в результатах поиска Google;</li>
          <li>предоставить дополнительную информацию в ответ на запрос.</li>
          <li>привлечь внимание пользователя и повысить CTR.</li>
        </ul>
      </div>

      <Image
        className={styles.example}
        src={ExampleImg}
        alt='Example'
      />

      <h2>Как пользоваться инструментом </h2>
      <ToolContentText>
        Заполните в форме “FAQs”, такие поля как вопрос и ответ и нажмите кнопку
        “Добавить вопрос”. Инструмент автоматически составит работающий код
        FAQPage JSON-LD или HTML на основе добавленного вами текста.
      </ToolContentText>
      <ToolContentText>
        Далее необходимо внедрить предоставленный код на страницу сайта, где
        располагается блок с часто задаваемыми вопросами (FAQ) или разделом
        “Вопрос-ответ“. Поисковые системы могут анализировать данные из разметки
        и применять их для создания расширенного сниппета в результатах поиска.
      </ToolContentText>
    </ToolContent>
  );
};
