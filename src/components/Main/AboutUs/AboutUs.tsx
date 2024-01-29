import { MainTitle } from '@/components/MainTitle/MainTitle';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import styles from './AboutUs.module.scss';

export const AboutUs = () => {
  return (
    <section className={styles.root}>
      <MainTitle>Коротко о нас</MainTitle>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <p className={styles.text}>
            Мы команда энтузиастов с опытом работы в сфере разработки и
            продвижения. Ведем активную работу по созданию и доработке новых
            инструментов для специалистов разных сфер. Цель, которую мы
            преследуем – это объединить все инструменты в одном месте, чтобы вы
            могли сосредоточиться на своих ключевых задачах в своей работе.
            Скорость работы сервисов, сведена к минимуму, что обеспечивает
            быструю обработку больших объемов данных. Если у вас возникают
            вопросы по работе инструментов или есть предложения по их улучшению,
            то пишите нам на почту.
          </p>
          <Button
            className={styles.allTools}
            as={Link}
            href='/tools'
            variant='shadow'
            color='primary'
            size='lg'
          >
            Начать пользоваться
          </Button>
        </div>
        <div className={styles.image}></div>
      </div>
    </section>
  );
};
