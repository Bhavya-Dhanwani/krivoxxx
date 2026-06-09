'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { processSteps } from '@/data/process';
import styles from './Process.module.css';

// Single process step
function ProcessStep({ step }) {
  return (
    <motion.div
      className={styles.step}
      whileHover={{ y: -4 }}
    >
      <span className={styles.number}>{step.number}</span>
      <div className={styles.content}>
        <h3 className={styles.stepTitle}>{step.title}</h3>
        <p className={styles.stepDesc}>{step.description}</p>
      </div>
    </motion.div>
  );
}

export default function Process() {
  return (
    <Section id="process" variant="default">
      <Container>
        <div className={styles.header}>
          <h2 className={styles.heading}>How we work</h2>
          <p className={styles.subheading}>
            A proven process that delivers results, from discovery to optimization.
          </p>
        </div>

        <div className={styles.grid}>
          {processSteps.map((step, index) => (
            <ProcessStep key={step.number} step={step} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
