import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import styles from './LegalPage.module.css';

export default function LegalPage({ eyebrow, title, updated, sections }) {
  return (
    <section className={styles.legal}>
      <Container>
        <Link href="/" className={styles.backLink}>
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <div className={styles.header}>
          <Badge>{eyebrow}</Badge>
          <h1>{title}</h1>
          <p>{updated}</p>
        </div>

        <div className={styles.card}>
          {sections.map((section) => (
            <section key={section.title} className={styles.section}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
}
