'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { navLinks } from '@/data/navigation';
import { SITE } from '@/constants';
import logoSrc from '@/assets/images/logo.png';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  if (pathname === '/contact') return null;

  const handleNavClick = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logoWrap} aria-label="Krivoxx home">
            <Image
              src={logoSrc}
              alt="Krivoxx"
              className={styles.logoImg}
              priority
            />
            <span className={styles.logoBlock}>
              <span className={styles.logoText}>
                Krivo<span>xx</span>
              </span>
              <span className={styles.logoSub}>Digital Marketing Agency</span>
            </span>
          </Link>

          <ul className={styles.links}>
            {navLinks.slice(0, 4).map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>
                  <span className={styles.linkInner}>{link.label}</span>
                  {link.label === 'Services' && <ChevronDown size={14} />}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.desktopCta}>
            <Button href="/contact" size="sm" showArrow>
              Let&apos;s Talk
            </Button>
          </div>

          <button
            className={styles.toggle}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Container>
              <ul className={styles.mobileLinks}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={styles.mobileLink}
                      onClick={handleNavClick}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <Button href="/contact" className={styles.mobileCta} onClick={handleNavClick} showArrow>
                Let&apos;s Talk
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
