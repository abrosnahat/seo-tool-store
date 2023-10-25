'use client';

import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.scss';
import BurgerIcon from './img/burger.svg';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.root}>
      <Link
        href='/'
        className={styles.logo}
      >
        Logo
      </Link>
      <nav className={cn(styles.nav, isOpen && styles.isOpen)}>
        <Link
          href='/tools'
          className={styles.link}
        >
          Инструменты
        </Link>
      </nav>
      <Image
        onClick={handleToggle}
        src={BurgerIcon}
        className={styles.burgerIcon}
        width={34}
        height={25}
        alt='burger icon'
      />
    </header>
  );
};
