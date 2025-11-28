// F:\hbowa-solar-solutions (1)\app\solar-panels\specs\page.tsx
import { readFile } from 'fs/promises';
import { join } from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import styles from './MarkdownSpecs.module.css';
import StickyForm from './StickyForm';

async function getMarkdownHtml() {
  const filePath = join(process.cwd(), 'app', 'markdown', 'What Is a Gallon Filling Machine_.md');
  const raw = await readFile(filePath, 'utf-8');
  const processed = await remark().use(remarkGfm).use(html).process(raw);
  let htmlString = String(processed);

  /* 沿用旧卡片类名，样式不动 */
  htmlString = htmlString
    .replace(/<h1>/, `<h1 class="${styles.h1}">`)
    .replace(/<h2>/g, `<h2 class="${styles.h2}">`)
    .replace(/<h3>/g, `<h3 class="${styles.h3}">`)
    .replace(/<p>/g, `<p class="${styles.p}">`)
    .replace(/<ul>/g, `<ul class="${styles.ul}">`)
    .replace(/<ol>/g, `<ol class="${styles.ol}">`)
    .replace(/<li>/g, `<li class="${styles.li}">`)
    .replace(/<a /g, `<a class="${styles.a}" `)
    .replace(/<img /g, `<img class="${styles.img}" `)
    .replace(/<blockquote>/g, `<blockquote class="${styles.blockquote}">`)
    .replace(/<table>/g, `<table class="${styles.table}">`)
    .replace(/<thead>/g, `<thead class="${styles.thead}">`)
    .replace(/<tbody>/g, `<tbody class="${styles.tbody}">`)
    .replace(/<tr>/g, `<tr class="${styles.tr}">`)
    .replace(/<th>/g, `<th class="${styles.th}">`)
    .replace(/<td>/g, `<td class="${styles.td}">`)
    .replace(/<code>/g, `<code class="${styles.inlineCode}">`);

  return htmlString;
}

export default async function SpecsPage() {
  const html = await getMarkdownHtml();
  return (
    <div className={styles.layout}>
      {/* 左侧文章 - 原卡片样式保留 */}
      <div className={styles.container}>
        <article
          className={styles.article}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>

      {/* 右侧悬浮表单 */}
      <StickyForm />
    </div>
  );
}