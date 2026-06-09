'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { navLinks } from '@/data/navigation';
import { SITE } from '@/constants';
import logoSrc from '@/assets/images/logo.png';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change (anchor click)
  const handleNavClick = () => setIsOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <Container>
        <nav className={styles.nav}>
          <a href="#hero" className={styles.logoWrap}>
            <Image
              src={logoSrc}
              alt="Krivoxx"
              className={styles.logoImg}
              priority
            />
            <span className={styles.logoText}>{SITE.name}</span>
          </a>

          {/* Desktop links */}
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>
                  <span className={styles.linkInner}>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className={styles.desktopCta}>
            <Button href="#contact" size="sm">
              Get in Touch
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className={styles.toggle}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
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
              <Button href="#contact" className={styles.mobileCta} onClick={handleNavClick}>
                Get in Touch
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
