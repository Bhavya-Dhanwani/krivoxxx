'use client';

import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section id="cta" className={styles.cta}>
      <Container>
        <div className={styles.inner}>
          <div>
            <span className={styles.kicker}>Let&apos;s Build Something Extraordinary</span>
            <h2>
              Have a <em>project</em>
              <br />
              in mind?
            </h2>
            <p>Let&apos;s create something people remember.</p>
          </div>

          <div className={styles.action}>
            <Button href="/contact" size="lg" showArrow>
              Book a Free Call
            </Button>
            <span>We&apos;re ready when you are!</span>
          </div>

          <ArrowRight className={styles.watermark} size={130} />
        </div>
      </Container>
    </section>
  );
}
