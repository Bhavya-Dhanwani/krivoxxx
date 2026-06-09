'use client';

import { motion } from 'framer-motion';
import styles from './Section.module.css';

export default function Section({
  children,
  variant = 'default',
  id,
  className = '',
}) {
  return (
    <section
      id={id}
      className={`${styles.section} ${styles[variant]} ${className}`}
    >
      {children}
    </section>
  );
}

export function MotionSection({
  children,
  variant = 'default',
  id,
  className = '',
  ...props
}) {
  return (
    <motion.section
      id={id}
      className={`${styles.section} ${styles[variant]} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      {...props}
    >
      {children}
    </motion.section>
  );
}
