'use client';

import { ToolContent } from '@/components/ToolContent/ToolContent';
import { ToolContentText } from '@/components/ToolContentText/ToolContentText';
import { TabsKey } from '@/types/convertRegister';
import { ClearText } from '@/ui-kit/ClearText/ClearText';
import { CopyText } from '@/ui-kit/CopyText/CopyText';
import { convertText } from '@/utils/convertRegister';
import { Tab, Tabs, Textarea } from '@nextui-org/react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styles from './ConvertRegister.module.scss';

export const ConvertRegister = () => {
  const [currentTab, setCurrentTab] = useState<TabsKey>('upperCase');
  const form = useForm({
    defaultValues: {
      text: '',
      resultText: '',
    },
  });

  const onTabChange = (tab: TabsKey) => {
    setCurrentTab(tab);
  };

  const resultText = convertText(form.watch('text'), currentTab);

  return (
    <ToolContent>
      <ToolContentText>
        Предлагаем вам воспользоваться бесплатным инструментом для
        преобразования заглавных и строчных символов. Конвертер регистра
        доступен онлайн и в нем отсутствуют ограничения по объему символов.
      </ToolContentText>
      <div className={styles.textareaWrapper}>
        <Controller
          name='text'
          control={form.control}
          render={({ field }) => (
            <Textarea
              {...field}
              minRows={12}
              variant='faded'
              color='primary'
              placeholder='Исходный текст'
              endContent={
                <ClearText onClick={() => form.setValue('text', '')} />
              }
            />
          )}
        />
        <Controller
          name='resultText'
          control={form.control}
          render={({ field }) => (
            <Textarea
              {...field}
              minRows={12}
              value={resultText}
              variant='faded'
              color='primary'
              placeholder='Исходный текст'
              endContent={<CopyText text={resultText} />}
              disabled
            />
          )}
        />
      </div>

      <Tabs
        items={TABS}
        color='primary'
        classNames={{
          tabList: 'flex-wrap lg:flex-nowrap',
        }}
        selectedKey={currentTab}
        onSelectionChange={setCurrentTab as any}
        fullWidth
      >
        {(item) => (
          <Tab
            key={item.id}
            title={item.label}
          />
        )}
      </Tabs>

      <ToolContentText>
        Инструмент незаменим для работы редакторов, копирайтеров, журналистов.
        Помогает при написании курсовых, рефератов и дипломов. Конвертер
        поддерживает любой язык, в котором существует разница между заглавными и
        строчными буквами, будь то алфавит на основе латиницы или кириллицы.
      </ToolContentText>
      <ToolContentText>
        Кроме стандартного режима, такого как набор каждого предложения с
        большой буквы, есть и другие. Например, конвертер регистра выделяет
        каждое слово текста заглавной буквой, чередует регистры, оставляет
        только строчные буквы.
      </ToolContentText>
      <h2 className='text-2xl font-bold'>Как пользоваться инструментом</h2>

      <div className={styles.text}>
        <ToolContentText>
          Для изменения регистра текста необходимо:
        </ToolContentText>
        <ul className='list-inside list-disc'>
          <li>вставить или написать текст в левое поле;</li>
          <li>выбрать необходимую настройку ниже;</li>
          <li>
            скопировать полученный результат с помощью функции сервиса или
            клавиш Ctrl+C.
          </li>
        </ul>
      </div>
    </ToolContent>
  );
};

const TABS: { id: TabsKey; label: string }[] = [
  {
    id: 'upperCase',
    label: 'ВЕРХНИЙ РЕГИСТР',
  },
  {
    id: 'lowerCase',
    label: 'нижний регистр',
  },
  {
    id: 'capitalLetters',
    label: 'Заглавные Буквы',
  },
  {
    id: 'registerInversion',
    label: 'иНВЕРСИЯ рЕГИСТРА',
  },
  {
    id: 'bySuggestions',
    label: 'По предложениям',
  },
];
