import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import MouseTrail from '@/components/decorative/MouseTrail';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <MouseTrail />
      <Container>
        <div className={styles.inner}>
          <Badge>Trusted by industry leaders</Badge>

          <h1 className={styles.title}>
            We build brands that
            <span className={styles.highlight}> dominate</span>
          </h1>

          <p className={styles.description}>
            A data-driven digital agency that turns ambitious brands into market leaders.
            Strategy, design, and growth — executed with precision.
          </p>

          <div className={styles.actions}>
            <Button href="#contact" size="lg" showArrow>
              Start Your Project
            </Button>
            <Button href="#services" variant="secondary" size="lg">
              View Services
            </Button>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>200+</span>
              <span className={styles.statLabel}>Projects Delivered</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Global Brands</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>98%</span>
              <span className={styles.statLabel}>Client Retention</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
