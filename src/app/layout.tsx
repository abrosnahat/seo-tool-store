import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import classNames from 'classnames';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.scss';
import styles from './layout.module.scss';

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
      <body className={classNames(montserrat.className, styles.root)}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
