import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Banner.module.scss';
import BannerGif from './img/banner.gif';

export const Banner = () => {
  return (
    <section className={styles.root}>
      <div className={styles.text}>
        <h1 className={styles.title}>
          SEO&nbsp;инструменты и <span className={styles.purple}>сервисы</span>
        </h1>
        <p className={styles.description}>
          SEO Tool Store - сборник бесплатных инструментов для специалистов по
          продвижению, веб-мастеров, администраторов сайтов и копирайтеров.
          Оптимизируйте свою работу вместе с нами.
        </p>
        <Button
          className={styles.allTools}
          href='/tools'
          as={Link}
          variant='shadow'
          color='primary'
          size='lg'
        >
          Все инструменты
        </Button>
      </div>
      <Image
        className={styles.banner}
        src={BannerGif}
        alt={'Banner'}
      />
    </section>
  );
};
