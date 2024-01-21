// app/components/ThemeSwitcher.tsx
'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import DarkIcon from './img/dark.svg';
import LightIcon from './img/light.svg';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {theme === 'dark' ? (
        <Image
          width={30}
          src={LightIcon}
          className='cursor-pointer'
          onClick={() => setTheme('light')}
          alt='Light icon'
        />
      ) : (
        <Image
          width={30}
          src={DarkIcon}
          className='cursor-pointer'
          onClick={() => setTheme('dark')}
          alt='Dark icon'
        />
      )}
    </div>
  );
}
