'use client';

import { AtSign, Globe, Link as LinkIcon, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from '@/components/ui/Container';
import { SITE } from '@/constants';
import logoSrc from '@/assets/images/logo.png';
import styles from './Footer.module.css';

const companyLinks = ['About Us', 'Our Process', 'Blog', 'Careers'];
const serviceLinks = ['Ads Campaigns', 'Website Development', 'Video Production', 'Brand Strategy & Design'];
const resourceLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
];

export default function Footer() {
  const pathname = usePathname();

  if (pathname === '/contact') return null;

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <Image src={logoSrc} alt="Krivoxx" className={styles.logoImg} />
              <span>
                <strong>{SITE.name}</strong>
                <small>Digital Marketing Agency</small>
              </span>
            </Link>
            <p>
              We help ambitious brands grow through strategy, creativity, and performance.
            </p>
            <a href={`mailto:${SITE.email}`} className={styles.email}>{SITE.email}</a>
          </div>

          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Services" links={serviceLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />

          <div>
            <h2 className={styles.columnTitle}>Let&apos;s Connect</h2>
            <div className={styles.social}>
              <a href={SITE.social.instagram} aria-label="Instagram"><AtSign size={16} /></a>
              <a href={SITE.social.linkedin} aria-label="LinkedIn"><LinkIcon size={16} /></a>
              <a href={SITE.social.twitter} aria-label="X"><X size={16} /></a>
              <a href="#" aria-label="Website"><Globe size={16} /></a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Krivoxx. All rights reserved.</p>
          <p>Made with passion</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h2 className={styles.columnTitle}>{title}</h2>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={typeof link === 'string' ? link : link.href}>
            <a href={getFooterHref(title, link)}>
              {typeof link === 'string' ? link : link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function getFooterHref(title, link) {
  if (typeof link !== 'string') return link.href;
  if (title === 'Services') return `/contact?service=${encodeURIComponent(link)}`;
  return '/contact';
}
