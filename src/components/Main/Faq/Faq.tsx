'use client';

import { MainTitle } from '@/components/MainTitle/MainTitle';
import { Accordion, AccordionItem } from '@nextui-org/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import styles from './Faq.module.scss';

export const Faq = () => {
  return (
    <section className={styles.root}>
      <MainTitle>FAQ</MainTitle>

      <Accordion
        variant='shadow'
        selectionMode='multiple'
      >
        {FAQ.map((item) => (
          <AccordionItem
            key={item.id}
            aria-label={item.question}
            title={item.question}
          >
            {item.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

const FAQ = [
  {
    id: 1,
    question: 'Нужна ли регистрация, чтобы пользоваться инструментами?',
    answer:
      'Нет, нашим сервисом можно пользоваться без регистрации, что делает его использование удобным и быстрым.',
  },
  {
    id: 2,
    question:
      'У меня возникли технические вопросы. Как мне связаться с вашей поддержкой?',
    answer:
      'Вы можете связаться с нашей командой поддержки через контактную форму на сайте или по электронной почте. Мы всегда готовы вам помочь.',
  },
  {
    id: 3,
    question: 'Есть ли ограничения по частоте использования инструментов?',
    answer:
      'Наши инструменты абсолютно бесплатны и не имеют ограничений в использовании.',
  },
];
