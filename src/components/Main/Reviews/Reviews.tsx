'use client';

import { Title } from '@/components/Title/Title';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Reviews.module.scss';
import DefaultIcon from './img/default.svg';
import QuotesIcon from './img/quotes.svg';
import Review1Image from './img/review1.jpg';
import Review2Image from './img/review2.jpg';
import Review3Image from './img/review3.jpg';
import StarsIcon from './img/stars.svg';

export const Reviews = () => {
  return (
    <section className={styles.root}>
      <Title>Отзывы</Title>

      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        modules={[Navigation]}
        navigation={true}
        className={styles.swiper}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {REVIEWS.map((review) => (
          <SwiperSlide
            key={review.id}
            className={styles.slide}
          >
            <div className={styles.header}>
              <div className={styles.user}>
                <Image
                  src={review.image}
                  width={50}
                  height={50}
                  className={styles.avatar}
                  alt='avatar'
                />
                <span className={styles.name}>{review.name}</span>
              </div>
              <Image
                width={40}
                height={30}
                src={QuotesIcon}
                alt='quotes'
              />
            </div>
            <p className={styles.text}>{review.text}</p>
            <Image
              src={StarsIcon}
              width={100}
              height={16}
              alt='stars'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const REVIEWS = [
  {
    id: 1,
    name: 'Александр М.',
    image: Review1Image,
    text: '"Простой и надежный генератор мета-тегов Open Graph для социальных сетей. Сэкономил мне уйму времени и усилий."',
  },
  {
    id: 2,
    name: 'Антон',
    image: Review2Image,
    text: '"Отличные инструменты для копирайтеров. С ними моя работа стала более эффективной."',
  },
  {
    id: 3,
    name: 'Прохорова Анастасия',
    image: DefaultIcon,
    text: '"Самый удобный инструмент по созданию расширенных сниппетов под Гугл, которым я только пользовалась."',
  },
  {
    id: 4,
    name: 'Ярослав Ч.',
    image: Review3Image,
    text: '"Этот сервис объединяет все, что нужно маркетологам, копирайтерам и SEO специалистам. Однозначно рекомендую!"',
  },
];
