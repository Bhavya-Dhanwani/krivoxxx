'use client';

import { motion } from 'framer-motion';
import styles from './Container.module.css';

export default function Container({ children, as: Tag = 'div', className = '' }) {
  return (
    <Tag className={`${styles.container} ${className}`}>
      {children}
    </Tag>
  );
}

export function MotionContainer({ children, as: Tag = 'div', className = '', ...props }) {
  return (
    <motion.div
      className={`${styles.container} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
