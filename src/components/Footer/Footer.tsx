import Link from 'next/link';
import styles from './Footer.module.scss';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.root}>
      <div className={styles.footerContent}>
        <Link
          href='/'
          className={styles.logo}
        >
          Logo
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
