'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './Button.module.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  showArrow = false,
  className = '',
  ...props
}) {
  const Component = href ? 'a' : motion.button;

  const motionProps = href
    ? { href, className: `${styles.button} ${styles[variant]} ${styles[size]} ${className}` }
    : {
        className: `${styles.button} ${styles[variant]} ${styles[size]} ${className}`,
        whileTap: { scale: 0.98 },
        ...props,
      };

  return (
    <Component {...motionProps}>
      {children}
      {showArrow && <ArrowRight size={18} className={styles.arrow} />}
    </Component>
  );
}
