import { Header } from '@/components/Header/Header';
import classNames from 'classnames';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import styles from './layout.module.scss';

const poppins = Poppins({ subsets: ['latin-ext'], weight: '400' });

export const metadata: Metadata = {
  title: 'SEO Tool Store',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <body className={classNames(poppins.className, styles.root)}>
        <Header />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
