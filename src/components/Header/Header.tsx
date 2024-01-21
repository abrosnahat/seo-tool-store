'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import styles from './Header.module.scss';
import Logo from './img/sts-logo.svg';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isBordered
      className='md:py-3'
      maxWidth='xl'
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
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
      </NavbarBrand>
      <NavbarContent
        className={styles.nav}
        justify='center'
      >
        <NavbarItem isActive>
          <Link
            href='/tools'
            className={styles.link}
          >
            Инструменты
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <ThemeSwitcher />
        <NavbarMenuToggle className={styles.menuToggle} />
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            href='/tools'
            className={styles.link}
            onClick={() => setIsMenuOpen(false)}
          >
            Инструменты
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
