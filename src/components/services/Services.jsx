'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { services } from '@/data/services';
import styles from './Services.module.css';

// Single service card
function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.article
      className={styles.card}
      whileHover={{ y: -6 }}
    >
      <div className={styles.iconWrap}>
        <Icon size={24} />
      </div>
      <h3 className={styles.cardTitle}>{service.title}</h3>
      <p className={styles.cardDesc}>{service.description}</p>
    </motion.article>
  );
}

export default function Services() {
  return (
    <Section id="services" variant="muted">
      <Container>
        <div className={styles.header}>
          <h2 className={styles.heading}>What we do</h2>
          <p className={styles.subheading}>
            Full-service digital marketing capabilities designed to scale your business.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
