import Link from 'next/link';
import { url } from '../lib/site';
import { WhatsApp } from './Site';
import styles from './FilmQualityGuide.module.css';

/**
 * Educational colour-wrap inspection guide.
 * Content is localized in lib/content.json and does not assert verified
 * product-specific test results.
 */
export default function FilmQualityGuide({ lang, t }) {
  const q = t.wrapQuality;
  if (!q || !Array.isArray(q.steps)) return null;

  return (
    <section className={styles.section} aria-labelledby="wrap-quality-heading">
      <div className={styles.header}>
        <span className={styles.eyebrow}>{q.kicker}</span>
        <h2 id="wrap-quality-heading">{q.title}</h2>
        <p className={styles.subtitle}>{q.subtitle}</p>
        <p className={styles.intro}>{q.intro}</p>
      </div>

      <div className={styles.columnHead} aria-hidden="true">
        <span>{q.measure}</span>
        <span className={styles.goldHead}>
          <span className={styles.goldDot} />{q.goodTitle}
        </span>
        <span>
          <span className={styles.greyDot} />{q.badTitle}
        </span>
      </div>

      <div className={styles.rows}>
        {q.steps.map((step) => (
          <div className={styles.row} key={step.num}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>{step.num} / {step.code}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.caption}</p>
              </div>
            </div>

            <article className={[styles.card, styles.good].join(' ')}>
              <div className={styles.cardHeading}>
                <span className={styles.circle} aria-hidden="true">✓</span>
                <span className={styles.desktopLabel}>{q.goodLabel}</span>
                <span className={styles.mobileLabel}>{q.goodTitle}</span>
              </div>
              <ul>{step.good.map((item) => <li key={item}>{item}</li>)}</ul>
              <p className={styles.note}>{step.goodNote}</p>
            </article>

            <article className={[styles.card, styles.caution].join(' ')}>
              <div className={styles.cardHeading}>
                <span className={styles.circle} aria-hidden="true">!</span>
                <span className={styles.desktopLabel}>{q.badLabel}</span>
                <span className={styles.mobileLabel}>{q.badTitle}</span>
              </div>
              <ul>{step.bad.map((item) => <li key={item}>{item}</li>)}</ul>
              <p className={styles.note}>{step.badNote}</p>
            </article>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <div className={styles.footerCopy}>
          <h3>{q.conclusion}</h3>
          <p>{q.disclaimer}</p>
        </div>
        <div className={styles.actions}>
          <Link className={[styles.action, styles.primary].join(' ')}
            href={url(lang, 'films/colour-wrap')}>
            {q.cta} <span aria-hidden="true">↗</span>
          </Link>
          <WhatsApp className={[styles.action, styles.secondary].join(' ')}
            lang={lang} topic={q.sample}>
            {q.sample} <span aria-hidden="true">↗</span>
          </WhatsApp>
        </div>
      </div>
    </section>
  );
}
