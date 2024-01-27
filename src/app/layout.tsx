import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import cn from 'classnames';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import './globals.css';
import BgLeft from './img/bg-left.png';
import BgRight from './img/bg-right.png';
import styles from './layout.module.scss';
import { Providers } from './providers';

const montserrat = Montserrat({
  subsets: ['cyrillic'],
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'SEO Tool Store',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <body className={cn(montserrat.className, styles.root)}>
        <Providers>
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </Providers>
        <Image
          className={cn(styles.bgLeft, 'dark:block')}
          src={BgLeft}
          alt=''
          priority={true}
        />
        <Image
          className={cn(styles.bgRight, 'dark:block')}
          src={BgRight}
          alt=''
          priority={true}
        />
      </body>
    </html>
  );
}
