// app/sucessfull-case/mountain-tourist-resort/page.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import path from 'path';
import { promises as fs } from 'fs';
import styles from './casetwo.module.css';
import Image from 'next/image';

async function getMarkdownContent() {
  const fullPath = path.join(process.cwd(), 'app/markdown/home-casetwo.md');
  return fs.readFile(fullPath, 'utf8');
}

export default async function MountainTouristResortPage() {
  const content = await getMarkdownContent();

  return (
    <article className={`${styles.proseEnhance} prose prose-lg mx-auto max-w-5xl px-6 py-10 lg:prose-xl`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => <h1 className={styles.customH1}>{children}</h1>,
          table: ({ children }) => <table className={styles.customTable}>{children}</table>,

          // 1. 图片 + 图题
          img: ({ src, alt }) => {
            if (!src || typeof src !== 'string') return null;
            return (
              <figure className={styles.imageWrapper}>
                <Image
                  src={src}
                  alt={alt || '项目图片'}
                  width={1200}
                  height={800}
                  className={styles.customImage}
                  style={{ width: '100%', height: 'auto' }}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                />
                {alt && <figcaption className={styles.imageCaption}>{alt}</figcaption>}
              </figure>
            );
          },

          // 2. 用 <div> 彻底替换 <p>，断绝任何 <p> 嵌套 <figure> 的可能
          p: ({ children }) => <div className="mb-4">{children}</div>,

          // 3. 可选：让 div 看起来依旧像段落
          //    如果你需要真正的段落样式，自己在 CSS 里写 .mb-4 或继承 prose
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}