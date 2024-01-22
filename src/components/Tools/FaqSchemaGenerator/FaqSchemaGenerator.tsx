'use client';

import { ToolContent } from '@/components/ToolContent/ToolContent';
import { ToolContentText } from '@/components/ToolContentText/ToolContentText';
import { CopyText } from '@/ui-kit/CopyText/CopyText';
import { getHtmlCode, getJsonLdScript } from '@/utils/faqSchemeGenerator';
import {
  Button,
  Card,
  CardBody,
  Select,
  SelectItem,
  Textarea,
} from '@nextui-org/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import styles from './FaqSchemaGenerator.module.scss';
import { Question } from './Question/Question';
import ExampleImg from './img/example.png';

export const FaqSchemaGenerator = () => {
  const [value, setValue] = useState<string>();

  const form = useForm({
    defaultValues: {
      questions: [{ question: '', answer: '' }],
      json: '',
      html: 'html',
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: 'questions',
    control: form.control,
  });

  useEffect(() => {
    const jsonLdData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: form.getValues('questions').map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };

    form.setValue('json', getJsonLdScript(jsonLdData)),
      [form, form.watch('questions')];
  });

  useEffect(() => {
    form.setValue('html', getHtmlCode(form.getValues('questions'))),
      [form, form.watch('questions')];
  });

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
            {fields.map((field, index) => (
              <Question
                key={field.id}
                id={index}
                control={form.control}
                remove={remove}
              />
            ))}

            <Button
              variant='shadow'
              color='primary'
              onClick={() => append({ question: '', answer: '' })}
            >
              Добавить вопрос
            </Button>
          </div>
        </div>
        <div className={styles.block}>
          <ToolContentText>
            <b>Код</b>
          </ToolContentText>
          <Card>
            <CardBody className='gap-4'>
              <Select
                className='max-w-xs'
                aria-label='Select code format'
                labelPlacement='outside'
                variant='faded'
                defaultSelectedKeys={['json']}
                onChange={(e) => setValue(e.target.value)}
              >
                {SELECT_ITEMS.map((item) => (
                  <SelectItem
                    key={item.value}
                    value={item.value}
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </Select>

              <Controller
                name='html'
                control={form.control}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    className={value !== 'html' ? 'hidden' : ''}
                    minRows={12}
                    maxRows={30}
                    variant='faded'
                    color='primary'
                    endContent={<CopyText text={field.value} />}
                  />
                )}
              />
              <Controller
                name='json'
                control={form.control}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    className={value === 'html' ? 'hidden' : ''}
                    minRows={12}
                    maxRows={30}
                    variant='faded'
                    color='primary'
                    endContent={<CopyText text={field.value} />}
                  />
                )}
              />
            </CardBody>
          </Card>
        </div>
      </div>

      <div className={styles.text}>
        <ToolContentText>
          Микроразметка FAQ необходима для того, чтобы:
        </ToolContentText>
        <ul className='list-inside list-disc'>
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

      <h2 className='text-2xl font-bold'>Как пользоваться инструментом </h2>
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

const SELECT_ITEMS = [
  {
    label: 'JSON-LD',
    value: 'json',
  },
  {
    label: 'HTML',
    value: 'html',
  },
];

const JSON_DEFAULT = `<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":
[]
}
</script>
<!-- FAQPage Code Generated by https://seotoolstore.ru/tools/faq-schema-generator/ -->`;
