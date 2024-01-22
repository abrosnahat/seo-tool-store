'use client';

import { Card, CardBody, Input, Textarea } from '@nextui-org/react';
import Image from 'next/image';
import { Controller, UseFieldArrayRemove } from 'react-hook-form';
import styles from './Question.module.scss';
import DeleteIcon from './img/delete.svg';

interface QuestionProps {
  id: number;
  control: any;
  remove: UseFieldArrayRemove;
}

export const Question: React.FC<QuestionProps> = ({ id, control, remove }) => {
  return (
    <Card>
      <CardBody className={styles.faqItem}>
        <div className={styles.faqInputs}>
          <Controller
            name={`questions.${id}.question`}
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                variant='faded'
                labelPlacement='outside'
                placeholder={`Вопрос ${id + 1}`}
                color='primary'
              />
            )}
          />
          <Controller
            name={`questions.${id}.answer`}
            control={control}
            render={({ field }) => (
              <Textarea
                {...field}
                variant='faded'
                color='primary'
                placeholder={`Ответ ${id + 1}`}
              />
            )}
          />
        </div>
        <Image
          className={styles.delete}
          width={25}
          src={DeleteIcon}
          alt='Delete icon'
          onClick={() => remove(id)}
        />
      </CardBody>
    </Card>
  );
};
