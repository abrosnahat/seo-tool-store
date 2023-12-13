'use client';

import { Title } from '@/components/Title/Title';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import styles from './Faq.module.scss';

export const Faq = () => {
  return (
    <section className={styles.root}>
      <Title>FAQ</Title>

      <div>
        {FAQ.map((item) => (
          <details
            className={styles.details}
            key={item.id}
          >
            <summary className={styles.summary}>
              {item.question} <span className={styles.plus}></span>
            </summary>
            <p className={styles.answer}>{item.answer}</p>
          </details>
        ))}
      </div>
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
