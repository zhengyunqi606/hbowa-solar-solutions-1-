// F:\hbowa-solar-solutions (1)\app\solar-panels\specs\StickyForm.tsx
"use client";
import styles from './MarkdownSpecs.module.css';

export default function StickyForm() {
  return (
    <aside className={styles.formAside}>
      <h3 className={styles.formTitle}>Contact With Us</h3>
      <p className={styles.formDesc}>
        Simply fill out the form below as best you can. And don&rsquo;t sweat the details
      </p>

      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <label className={styles.label}>Enter Your Name*</label>
        <input className={styles.input} placeholder="Your Name" required />

        <label className={styles.label}>Add Your Email ID*</label>
        <input className={styles.input} type="email" placeholder="you@example.com" required />

        <label className={styles.label}>Phone Number* (e.g +442012345456)</label>
        <input className={styles.input} type="tel" placeholder="+442012345456" required />

        <label className={styles.label}>Company Name</label>
        <input className={styles.input} placeholder="Company" />

        <label className={styles.label}>Select Country*</label>
        <select className={styles.select} required>
          <option value="">-- Choose --</option>
          <option value="CN">China</option>
          <option value="US">United States</option>
          <option value="GB">United Kingdom</option>
        </select>

        <button type="submit" className={styles.submit}>Submit Form</button>
      </form>
    </aside>
  );
}