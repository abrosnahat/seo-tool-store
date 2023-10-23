import Link from 'next/link';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.root}>
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
        <Link
          href='/tools'
          className={styles.link}
        >
          Инструменты
        </Link>
        <Link
          href='/tools'
          className={styles.link}
        >
          Инструменты
        </Link>
      </nav>
    </header>
  );
};
