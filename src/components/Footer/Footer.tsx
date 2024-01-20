import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.scss';
import Logo from './img/sts-logo.svg';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.root}>
      <div className={styles.footerContent}>
        <Link
          href='/'
          className={styles.logo}
        >
          <Image
            className={styles.logo}
            src={Logo}
            alt='STS Logo'
          />
        </Link>
        <nav className={styles.nav}>
          <Link
            href='/tools'
            className={styles.link}
          >
            Инструменты
          </Link>
        </nav>
      </div>
      <div className={styles.copyright}>
        © {currentYear} SEO Tool Store. All Rights Reserved.
      </div>
    </footer>
  );
};
