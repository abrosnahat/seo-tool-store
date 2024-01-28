'use client';

import { ToolContent } from '@/components/ToolContent/ToolContent';
import { ToolContentText } from '@/components/ToolContentText/ToolContentText';
import { ClearText } from '@/ui-kit/ClearText/ClearText';
import { CopyText } from '@/ui-kit/CopyText/CopyText';
import {
  Card,
  CardBody,
  Checkbox,
  Input,
  Select,
  SelectItem,
  Textarea,
} from '@nextui-org/react';
import cn from 'classnames';
import beautify from 'js-beautify';
import { useTheme } from 'next-themes';
import { Highlight, themes } from 'prism-react-renderer';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

export const OpenGraphGenerator = () => {
  const { theme } = useTheme();
  const [showXFields, setShowXFields] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  const [isArticle, setIsArticle] = useState(false);
  const [code, setCode] = useState(DEFAULT_CODE);
  const form = useForm({
    defaultValues: {
      title: '',
      description: '',
      pagePicture: '',
      pageUrl: '',
      name: '',
      language: '',
      facebookId: '',
      video: '',
      articleAuthor: '',
      section: '',
      createdAt: '',
      siteAccountX: '',
      authorAccountX: '',
      previewPictureX: '',
      videoAudioX: '',
      tags: '',
    },
  });

  useEffect(
    () =>
      setCode(`
  ${DEFAULT_CODE}
  ${selectValue && `<meta property="og:type" content="${selectValue}">`}${
        form.watch('title') &&
        `<meta property="og:title" content="${form.watch('title')}">`
      }${
        form.watch('description') &&
        `<meta property="og:description" content="${form.watch(
          'description'
        )}">`
      }${
        form.watch('pagePicture') &&
        `<meta property="og:image" content="${form.watch('pagePicture')}">`
      }${
        form.watch('pageUrl') &&
        `<meta property="og:url" content="${form.watch('pageUrl')}">`
      }${
        form.watch('name') &&
        `<meta property="og:site_name" content="${form.watch('name')}">`
      }${
        form.watch('language') &&
        `<meta property="og:locale" content="${form.watch('language')}">`
      }${
        form.watch('video') &&
        `<meta property="og:video" content="${form.watch('video')}">`
      }${
        form.watch('facebookId') &&
        `<meta property="fb:app_id" content="${form.watch('facebookId')}">`
      }
      ${
        isArticle
          ? `<!-- Open Graph: Article -->
      ${
        form.watch('articleAuthor') &&
        `<meta property="og:author" content="${form.watch('articleAuthor')}">`
      }${
              form.watch('section') &&
              `<meta property="og:section" content="${form.watch('section')}">`
            }${
              form.watch('createdAt') &&
              `<meta property="og:published_time" content="${form.watch(
                'createdAt'
              )}">`
            }${
              form.watch('tags') &&
              `<meta property="og:tag" content="${form.watch('tags')}">`
            }`
          : ''
      }
      ${
        showXFields
          ? `<!-- Twitter -->
      <meta property="twitter:card" content="summary_large_image">${
        form.watch('siteAccountX') &&
        `<meta property="twitter:site" content="${form.watch('siteAccountX')}">`
      }${
              form.watch('authorAccountX') &&
              `<meta property="twitter:creator" content="${form.watch(
                'authorAccountX'
              )}">`
            }${
              form.watch('previewPictureX') &&
              `<meta property="twitter:image:src" content="${form.watch(
                'previewPictureX'
              )}">`
            }${
              form.watch('videoAudioX') &&
              `<meta property="twitter:player" content="${form.watch(
                'videoAudioX'
              )}">`
            }`
          : ''
      }
  `),
    [
      selectValue,
      showXFields,
      isArticle,
      form,
      form.watch('title'),
      form.watch('description'),
      form.watch('pagePicture'),
      form.watch('pageUrl'),
      form.watch('name'),
      form.watch('language'),
      form.watch('video'),
      form.watch('facebookId'),
      form.watch('articleAuthor'),
      form.watch('section'),
      form.watch('createdAt'),
      form.watch('tags'),
      form.watch('siteAccountX'),
      form.watch('authorAccountX'),
      form.watch('previewPictureX'),
      form.watch('videoAudioX'),
    ]
  );

  useEffect(
    () =>
      selectValue === 'article' ? setIsArticle(true) : setIsArticle(false),
    [selectValue]
  );

  return (
    <ToolContent>
      <ToolContentText>
        Инструмент поможет создать корректное и привлекательное отображение
        публикаций в соцсетях при репостах с вашего сайта. Сейчас Open Graph
        поддерживает большинство популярных соцсетей: ВКонтакте, Одноклассники,
        Twitter и другие. Все это легко настроить без труда и специальных
        навыков используя наш онлайн сервис.
      </ToolContentText>

      <form className='w-full flex flex-col gap-4'>
        <h3>Основные Метаданные</h3>
        <Select
          aria-label='Select code format'
          labelPlacement='outside'
          variant='faded'
          label='Тип страницы'
          placeholder='Выберите тип страницы'
          onChange={(e) => setSelectValue(e.target.value)}
        >
          {SELECT_ITEMS.map((item) => (
            <SelectItem
              key={item.value}
              value={item.value}
            >
              {item.label}
            </SelectItem>
          ))}
        </Select>
        <Controller
          name='title'
          control={form.control}
          render={({ field }) => (
            <Input
              {...field}
              variant='faded'
              label='Заголовок'
              labelPlacement='outside'
              placeholder='Любой заголовок, может совпадать в Title'
              color='primary'
            />
          )}
        />
        <Controller
          name='description'
          control={form.control}
          render={({ field }) => (
            <Textarea
              {...field}
              variant='faded'
              color='primary'
              label='Описание'
              placeholder='Несколько предложений описания'
              labelPlacement='outside'
              endContent={
                <ClearText onClick={() => form.setValue('description', '')} />
              }
            />
          )}
        />
        <Controller
          name='pagePicture'
          control={form.control}
          render={({ field }) => (
            <Input
              {...field}
              variant='faded'
              label='Картинка страницы'
              labelPlacement='outside'
              placeholder='https://site.ru/image.jpg'
              description='Рекомендуемые размеры: 1200px x 630px; минимальные: 600px x 315px'
              color='primary'
            />
          )}
        />
        <Controller
          name='pageUrl'
          control={form.control}
          render={({ field }) => (
            <Input
              {...field}
              variant='faded'
              label='Постоянный URL страницы'
              labelPlacement='outside'
              placeholder='https://site.ru/page/'
              color='primary'
            />
          )}
        />

        <h3>Дополнительные Метаданные</h3>
        <Controller
          name='name'
          control={form.control}
          render={({ field }) => (
            <Input
              {...field}
              variant='faded'
              label='Имя сайта'
              labelPlacement='outside'
              placeholder='Бренд или имя сайта'
              description='Будет отображаться после заголовка'
              color='primary'
            />
          )}
        />
        <Controller
          name='language'
          control={form.control}
          render={({ field }) => (
            <Input
              {...field}
              variant='faded'
              label='Язык на странице'
              labelPlacement='outside'
              placeholder='ru_RU'
              color='primary'
            />
          )}
        />
        <Controller
          name='video'
          control={form.control}
          render={({ field }) => (
            <Input
              {...field}
              variant='faded'
              label='Видео на странице'
              labelPlacement='outside'
              placeholder='https://site.ru/page/'
              color='primary'
            />
          )}
        />
        <Controller
          name='facebookId'
          control={form.control}
          render={({ field }) => (
            <Input
              {...field}
              variant='faded'
              label='Facebook ID страницы'
              labelPlacement='outside'
              placeholder=' '
              color='primary'
            />
          )}
        />

        {isArticle && (
          <>
            <h3>Статейные Метаданные</h3>
            <Controller
              name='articleAuthor'
              control={form.control}
              render={({ field }) => (
                <Input
                  {...field}
                  variant='faded'
                  label='Автор статьи'
                  labelPlacement='outside'
                  placeholder='https://vk.com/user'
                  description='Будет отображаться после заголовка'
                  color='primary'
                />
              )}
            />
            <Controller
              name='section'
              control={form.control}
              render={({ field }) => (
                <Input
                  {...field}
                  variant='faded'
                  label='Категория или раздел'
                  labelPlacement='outside'
                  placeholder='Новости'
                  color='primary'
                />
              )}
            />
            <Controller
              name='createdAt'
              control={form.control}
              render={({ field }) => (
                <Input
                  {...field}
                  variant='faded'
                  label='Время публикации'
                  labelPlacement='outside'
                  placeholder='2024-01-28T16:18:00+03:00'
                  description='Время в формате ISO 8601'
                  color='primary'
                />
              )}
            />
            <Controller
              name='tags'
              control={form.control}
              render={({ field }) => (
                <Input
                  {...field}
                  variant='faded'
                  label='Теги связанные со статьей'
                  labelPlacement='outside'
                  placeholder='Черное море'
                  color='primary'
                />
              )}
            />
          </>
        )}

        <h3>Теги для X (Twitter)</h3>
        <Checkbox
          checked={showXFields}
          onChange={(e) => setShowXFields(e.target.checked)}
        >
          Использовать теги для X (Twitter)
        </Checkbox>
        {showXFields && (
          <>
            <Controller
              name='siteAccountX'
              control={form.control}
              render={({ field }) => (
                <Input
                  {...field}
                  variant='faded'
                  label='X аккаунт сайта'
                  labelPlacement='outside'
                  placeholder='@siteru'
                  color='primary'
                />
              )}
            />
            <Controller
              name='authorAccountX'
              control={form.control}
              render={({ field }) => (
                <Input
                  {...field}
                  variant='faded'
                  label='X аккаунт автора статьи'
                  labelPlacement='outside'
                  placeholder='@olga'
                  color='primary'
                />
              )}
            />
            <Controller
              name='previewPictureX'
              control={form.control}
              render={({ field }) => (
                <Input
                  {...field}
                  variant='faded'
                  label='Превью картинки'
                  labelPlacement='outside'
                  placeholder='https://site.ru/img.png'
                  description='Минимальный размер 300px x 157px, максимальный 4096px x 4096px. Соотношение сторон 2:1'
                  color='primary'
                />
              )}
            />
            <Controller
              name='videoAudioX'
              control={form.control}
              render={({ field }) => (
                <Input
                  {...field}
                  variant='faded'
                  label='Ссылка на видео/аудио плеер'
                  labelPlacement='outside'
                  placeholder='https://site.ru/img.png'
                  description='HTTPS ссылка на видео или iFrame плеер, например Youtube Embed'
                  color='primary'
                />
              )}
            />
          </>
        )}
      </form>

      <h2 className='text-2xl font-bold'>Ваш сгенерированный код</h2>
      <Card className='w-full'>
        <CardBody>
          <CopyText
            text={beautify.html(code)}
            className='absolute top-3 right-3'
          />
          <Highlight
            theme={theme === 'light' ? themes.oneLight : themes.oneDark}
            code={beautify.html(code)}
            language='html'
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre
                className={cn(className, 'overflow-y-scroll !bg-inherit')}
                style={style}
              >
                <code>
                  {tokens.map((line, index) => (
                    <div
                      {...getLineProps({ line, key: index })}
                      key={index}
                    >
                      {line.map((token, key) => (
                        <span
                          {...getTokenProps({ token, key })}
                          key={key}
                        />
                      ))}
                    </div>
                  ))}
                </code>
              </pre>
            )}
          </Highlight>
        </CardBody>
      </Card>

      <ToolContentText>
        Микроразметка Open Graph позволит улучшить представление о компании,
        привлекать трафик и может косвенно повлиять на SEO.
      </ToolContentText>

      <ToolContentText>
        <h2 className='text-2xl font-bold'>
          Как пользоваться генератором мета тегов Open Graph
        </h2>

        <ul className='list-inside list-decimal'>
          <li>
            Заполните соответствующие поля, такие как заголовок, описание, URL и
            изображение;
          </li>
          <li>
            Выберите тип контента и выполните другие настройки в соответствии с
            вашими требованиями;
          </li>
          <li>
            Инструмент автоматически создает Open Graph метаданные в виде
            HTML-кода, который легко встроить в заголовок &lt;head&gt; вашей
            веб-страницы.
          </li>
        </ul>
      </ToolContentText>
      <ToolContentText>
        Основные теги:
        <ul className='list-inside list-disc'>
          <li>og:title — название материала;</li>
          <li>
            og:description — описание материала, заполнять не обязательно;
          </li>
          <li>og:image — ссылка на изображение;</li>
          <li>
            og:type — тип добавляемого материала, например, «article» – статья,
            «movie» — кино и так далее;
          </li>
          <li>
            og:url — ссылка на саму веб-страницу, которая добавляется в
            социальную сеть.
          </li>
        </ul>
      </ToolContentText>
    </ToolContent>
  );
};

const DEFAULT_CODE =
  '<!-- Open Graph Generated: seotoolstore.ru/tools/open-graph-generator/ -->';

const SELECT_ITEMS = [
  {
    label: 'Вебсайт',
    value: 'website',
  },
  {
    label: 'Статья',
    value: 'article',
  },
  {
    label: 'Место',
    value: 'place',
  },
  {
    label: 'Бизнес',
    value: 'business.business',
  },
  {
    label: 'Продукт',
    value: 'product',
  },
  {
    label: 'Ресторан',
    value: 'restaurant',
  },
];
