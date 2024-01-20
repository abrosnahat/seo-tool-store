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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar
      position='static'
      isBordered
      className='py-3'
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
        <NavbarItem>
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
        <NavbarMenuToggle
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className={styles.menuToggle}
        />
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            href='/tools'
            className={styles.link}
          >
            Инструменты
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
