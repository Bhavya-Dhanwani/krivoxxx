'use client';

import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import Container from '@/components/ui/Container';
import { processSteps } from '@/data/process';
import styles from './Process.module.css';

function ProcessStep({ step }) {
  return (
    <motion.div className={styles.step} whileHover={{ y: -5 }}>
      <span className={styles.number}>{step.number}</span>
      <h3 className={styles.stepTitle}>{step.title}</h3>
      <p className={styles.stepDesc}>{step.description}</p>
    </motion.div>
  );
}

export default function Process() {
  return (
    <section id="process" className={styles.process}>
      <Container>
        <div className={styles.header}>
          <span className={styles.kicker}>
            Why Krivoxx <Plus size={14} />
          </span>
          <h2>
            Our Process. Simple, Clear, <span>Effective.</span>
          </h2>
        </div>

        <div className={styles.timeline}>
          {processSteps.map((step) => (
            <ProcessStep key={step.number} step={step} />
          ))}
        </div>
      </Container>
    </section>
  );
}
