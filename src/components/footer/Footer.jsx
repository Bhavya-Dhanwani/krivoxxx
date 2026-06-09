'use client';

import { ArrowUp } from 'lucide-react';
import Container from '@/components/ui/Container';
import { navLinks } from '@/data/navigation';
import { SITE } from '@/constants';
import styles from './Footer.module.css';

export default function Footer() {
  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.top}>
            <div className={styles.brand}>
              <a href="#hero" className={styles.logo}>
                {SITE.name}
              </a>
              <p className={styles.tagline}>{SITE.tagline}</p>
            </div>

            <ul className={styles.links}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              className={styles.topButton}
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>

          <div className={styles.bottom}>
            <p className={styles.copyright}>
              &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
            </p>
            <div className={styles.social}>
              <a href={SITE.social.twitter} className={styles.socialLink} aria-label="Twitter">
                Twitter
              </a>
              <a href={SITE.social.linkedin} className={styles.socialLink} aria-label="LinkedIn">
                LinkedIn
              </a>
              <a href={SITE.social.instagram} className={styles.socialLink} aria-label="Instagram">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
