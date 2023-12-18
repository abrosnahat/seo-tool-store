import { Title } from '@/components/Title/Title';
import Image from 'next/image';
import styles from './Advantages.module.scss';
import FreeIcon from './img/free.png';
import SampleIcon from './img/sample.png';
import SupportIcon from './img/support.png';
import TimeIcon from './img/time.png';
import ToolsIcon from './img/tools.png';
import UsersIcon from './img/users.png';

export const Advantages = () => {
  return (
    <section className={styles.root}>
      <Title>Наши преимущества</Title>
      <div className={styles.advantages}>
        {ADVANTAGES.map((advantage, index) => (
          <div
            key={index}
            className={styles.advantage}
          >
            <Image
              src={advantage.image}
              width={80}
              height={80}
              className={styles.icon}
              alt='icon'
            />
            <div className={styles.title}>{advantage.title}</div>
            <p className={styles.subtitle}>{advantage.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const ADVANTAGES = [
  {
    title: 'Бесплатно и без регистрации',
    subtitle:
      'Пользуйтесь инструментами без подписок на тарифы абсолютно бесплатно',
    image: FreeIcon,
  },
  {
    title: 'Простой и удобный интерфейс',
    subtitle: 'Интуитивно понятный интерфейс с минимальной загруженностью',
    image: SampleIcon,
  },
  {
    title: 'Более 15 инструментов',
    subtitle: 'Каждый месяц разрабатываем для вас новые инструменты',
    image: ToolsIcon,
  },
  {
    title: 'Экономия времени',
    subtitle: 'Заботимся о том, чтобы вы не тратили время на рутинные задачи',
    image: TimeIcon,
  },
  {
    title: 'Круглосуточная поддержка',
    subtitle:
      'Наши специалисты работают круглосуточно, мы готовы ответить на ваши вопросы 24/7',
    image: SupportIcon,
  },
  {
    title: 'Более 1000+ пользователей',
    subtitle: 'Количество пользователей постоянно растет',
    image: UsersIcon,
  },
];
