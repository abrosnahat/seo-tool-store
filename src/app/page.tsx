import { AboutUs } from '@/components/Main/AboutUs/AboutUs';
import { Advantages } from '@/components/Main/Advantages/Advantages';
import { Banner } from '@/components/Main/Banner/Banner';
import { Faq } from '@/components/Main/Faq/Faq';
import { PopularTools } from '@/components/Main/PopularTools/PopularTools';
import { Reviews } from '@/components/Main/Reviews/Reviews';
import { Divider } from '@nextui-org/react';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.root}>
      <Banner />
      <Divider />
      <PopularTools />
      <Divider />
      <Advantages />
      <Divider />
      <AboutUs />
      <Divider />
      <Reviews />
      <Divider />
      <Faq />
    </div>
  );
}
