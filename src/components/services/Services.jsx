'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Plus } from 'lucide-react';
import Container from '@/components/ui/Container';
import { services, values } from '@/data/services';
import styles from './Services.module.css';

function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.article className={styles.card} whileHover={{ y: -8 }}>
      <div className={styles.iconWrap}>
        <Icon size={34} strokeWidth={2.2} />
      </div>
      <span className={styles.cardNumber}>{String(index + 1).padStart(2, '0')}</span>
      <h3 className={styles.cardTitle}>{service.title}</h3>
      <p className={styles.cardDesc}>{service.description}</p>
      <a
        href={`/contact?service=${encodeURIComponent(service.title)}`}
        className={styles.cardAction}
        aria-label={`Start ${service.title}`}
      >
        <ArrowRight size={20} />
      </a>
    </motion.article>
  );
}

function ValueItem({ item }) {
  const Icon = item.icon;

  return (
    <div className={styles.valueItem}>
      <Icon size={40} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <Container>
        <div className={styles.layout}>
          <aside className={styles.intro}>
            <span className={styles.kicker}>
              What We Do <Plus size={14} />
            </span>
            <h2>
              End-to-end digital solutions that drive{' '}
              <span>real growth.</span>
            </h2>
            <p>
              From strategy to execution, we build digital experiences that deliver
              measurable results and real impact.
            </p>
            <a href="/contact" className={styles.explore}>
              Explore All Services
              <ArrowRight size={16} />
            </a>
          </aside>

          <div className={styles.grid}>
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>

        <div className={styles.values}>
          {values.map((item) => (
            <ValueItem key={item.title} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
