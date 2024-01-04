'use client';

import { ToolContent } from '@/components/ToolContent/ToolContent';
import { ToolContentText } from '@/components/ToolContentText/ToolContentText';
import { CopyText } from '@/ui-kit/CopyText/CopyText';
import { Loader } from '@/ui-kit/Loader';
import { htmlToMarkdown } from '@/utils/htmlToMarkdown';
import cn from 'classnames';
import beautify from 'js-beautify';
import dynamic from 'next/dynamic';
import { Highlight, themes } from 'prism-react-renderer';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import styles from './HtmlRedactor.module.scss';
const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <Loader />,
});

const modules = {
  toolbar: [
    [{ header: ['1', '2', '3', '4', '5', '6', false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ script: 'sub' }, { script: 'super' }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ color: [] }, { background: [] }],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'script',
  'list',
  'bullet',
  'color',
  'background',
  'link',
  'image',
  'video',
];

export const HtmlRedactor = () => {
  const [code, setCode] = useState(REDACTOR_DEFAULT_VALUE);

  const markdown = htmlToMarkdown(code);

  return (
    <ToolContent>
      <ToolContentText>
        HTML редактор онлайн - это бесплатный веб-сервис, предназначенный для
        редактирования и просмотра HTML-кода, который будет полезен
        программистам, верстальщикам и контент-менеджерам.
      </ToolContentText>
      <div className={styles.block}>
        <h2>Визуальный редактор</h2>
        <ReactQuill
          value={code}
          onChange={setCode}
          modules={modules}
          formats={formats}
        />
      </div>

      <div className={styles.block}>
        <h2>HTML</h2>
        <div className={styles.code}>
          <CopyText
            text={code}
            className={styles.copy}
          />
          <Highlight
            theme={themes.oneLight}
            code={beautify.html(code)}
            language='html'
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre
                className={cn(className, styles.pre)}
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
        </div>
      </div>
      <div className={styles.block}>
        <h2>Markdown</h2>
        <div className={styles.code}>
          <CopyText
            text={markdown}
            className={styles.copy}
          />
          <Highlight
            theme={themes.oneLight}
            code={markdown}
            language='markdown'
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre
                className={cn(className, styles.pre)}
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
        </div>
      </div>
      <ToolContentText>
        Данный инструмент существенно ускоряет процесс верстки и дает
        возможность предпросмотром сразу визуально увидеть результат. Этот
        принцип называется WYSIWYG и расшифровывается как What You See Is What
        You Get.
      </ToolContentText>
      <h2>Как работает онлайн-редактор кода HTML</h2>
      <ToolContentText>
        Визуальный редактор работает без установки дополнительных программ и
        состоит из 2 блоков: в левом окне можно использовать редактор, в правом
        — форматировать исходный код. В режиме реального времени программа
        создает чистый HTML-код, который работает в большинстве современных
        браузеров (Firefox, Google Chrome, Opera, Safari и тд).
      </ToolContentText>
      <ToolContentText>
        Текст можно писать сразу, а можно скопировать из любого другого
        текстового редактора, например, Microsoft Office, Open Office, Google
        doc и так далее. Большинство стилей будет перенесено корректно, в
        частности, заголовки, ссылки, жирный шрифт, курсив, параграфы,
        нумерованные и ненумерованные списки.
      </ToolContentText>
      <ToolContentText>
        Делая акцент на простоте, наш текстовый HTML редактор предлагает
        интуитивно понятный интерфейс, который упрощает навигацию и внесение
        изменений в HTML файлы как для начинающих, так и для опытных
        разработчиков. Создавайте и редактируйте HTML файлы без особых усилий,
        каких-либо загрузок или регистрации.
      </ToolContentText>
    </ToolContent>
  );
};

const REDACTOR_DEFAULT_VALUE =
  '<h1><strong>Заголовок H1</strong></h1><p><br></p><p>Введите текст здесь 🤗</p>';
