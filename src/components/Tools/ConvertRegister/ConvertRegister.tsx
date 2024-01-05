'use client';

import { ToolContent } from '@/components/ToolContent/ToolContent';
import { ToolContentText } from '@/components/ToolContentText/ToolContentText';
import { TabsKey } from '@/types/convertRegister';
import { ClearText } from '@/ui-kit/ClearText/ClearText';
import { CopyText } from '@/ui-kit/CopyText/CopyText';
import { Tab } from '@/ui-kit/Tabs/Tab/Tab';
import { Tabs } from '@/ui-kit/Tabs/Tabs';
import { Textarea } from '@/ui-kit/Textarea';
import { convertText } from '@/utils/convertRegister';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './ConvertRegister.module.scss';

export const ConvertRegister = () => {
  const [currentTab, setCurrentTab] = useState<TabsKey>('upperCase');
  const form = useForm({
    defaultValues: {
      text: '',
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
        <Textarea
          rows={12}
          placeholder='Исходный текст'
          endAdornment={<ClearText onClick={() => form.setValue('text', '')} />}
          {...form.register('text')}
        />
        <Textarea
          rows={12}
          disabled
          placeholder='Результат'
          value={resultText}
          endAdornment={<CopyText text={resultText} />}
        />
      </div>
      <Tabs<TabsKey>
        value={currentTab}
        onChange={onTabChange}
        className={styles.tabs}
      >
        <Tab<TabsKey>
          value='upperCase'
          label={'ВЕРХНИЙ РЕГИСТР'}
        />
        <Tab<TabsKey>
          value='lowerCase'
          label={'нижний регистр'}
        />
        <Tab<TabsKey>
          value='capitalLetters'
          label={'Заглавные Буквы'}
        />
        <Tab<TabsKey>
          value='registerInversion'
          label={'иНВЕРСИЯ рЕГИСТРА'}
        />
        <Tab<TabsKey>
          value='bySuggestions'
          label={'По предложениям'}
        />
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
      <h2>Как пользоваться инструментом</h2>

      <div className={styles.text}>
        <ToolContentText>
          Для изменения регистра текста необходимо:
        </ToolContentText>
        <ul className={styles.textList}>
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
