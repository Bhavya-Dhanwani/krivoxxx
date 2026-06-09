'use client';

import { useRef, useState } from 'react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { CirclePlay } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  const [trail, setTrail] = useState([]);
  const trailId = useRef(0);
  const lastPoint = useRef({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const distance = Math.hypot(x - lastPoint.current.x, y - lastPoint.current.y);

    if (distance < 9) return;

    const directionX = (x - lastPoint.current.x) / distance;
    const directionY = (y - lastPoint.current.y) / distance;
    const sideX = -directionY;
    const sideY = directionX;
    lastPoint.current = { x, y };

    const burst = Array.from({ length: 9 }, (_, index) => {
      trailId.current += 1;
      const behind = 14 + Math.random() * 120;
      const scatter = -54 + Math.random() * 108;
      const forwardNoise = -18 + Math.random() * 36;

      return {
        id: trailId.current,
        x: x - directionX * behind + sideX * scatter + directionX * forwardNoise,
        y: y - directionY * behind + sideY * scatter + directionY * forwardNoise,
        size: 4 + Math.random() * 8,
        driftX: -42 + Math.random() * 84,
        driftY: -42 + Math.random() * 84,
        delay: index * 9,
      };
    });

    setTrail((current) => [...current.slice(-115), ...burst]);
  };

  return (
    <section
      id="hero"
      className={styles.hero}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTrail([])}
    >
      <div className={styles.trailLayer} aria-hidden="true">
        {trail.map((point) => (
          <span
            key={point.id}
            className={styles.trailBox}
            style={{
              left: point.x,
              top: point.y,
              width: point.size,
              height: point.size,
              '--trail-drift-x': `${point.driftX}px`,
              '--trail-drift-y': `${point.driftY}px`,
              animationDelay: `${point.delay}ms`,
            }}
          />
        ))}
      </div>
      <div className={`${styles.rings} ${styles.ringsLeft}`} />
      <div className={`${styles.rings} ${styles.ringsRight}`} />
      <Container>
        <div className={styles.inner}>
          <Badge>Digital Marketing Agency</Badge>

          <h1 className={styles.title}>
            WE GROW
            <span className={styles.highlight}>BRANDS.</span>
            YOU GROW
            <span className={styles.highlight}>REVENUE.</span>
          </h1>

          <p className={styles.description}>
            We help ambitious brands turn strategy into results through performance
            marketing, stunning websites, and powerful content.
          </p>

          <div className={styles.actions}>
            <Button href="/contact" size="md" showArrow>
              Start Your Project
            </Button>
            <Button href="#process" variant="secondary" size="md" className={styles.watch}>
              <CirclePlay size={22} />
              See How We Work
            </Button>
          </div>

          <a href="#services" className={styles.scrollHint}>
            <span>↓</span>
            Scroll to Explore
          </a>
        </div>
      </Container>
    </section>
  );
}
