'use client';

import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.cta}>
      <Container>
        <div className={styles.inner}>
          <h2 className={styles.heading}>
            Ready to scale your brand?
          </h2>
          <p className={styles.description}>
            Let&apos;s build something extraordinary together. Tell us about your project and
            we&apos;ll create a strategy that delivers.
          </p>
          <Button href="#contact" size="lg" showArrow>
            Start Your Project
          </Button>
        </div>
      </Container>
    </section>
  );
}
