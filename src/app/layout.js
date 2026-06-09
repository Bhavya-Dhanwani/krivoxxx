import { Geist } from 'next/font/google';
import { Toaster } from 'sonner';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/footer/Footer';
import PageTransition from '@/components/ui/PageTransition';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Krivoxx - Digital Agency',
  description:
    'A premium digital marketing agency specializing in strategy, design, and growth. We build brands that dominate.',
  openGraph: {
    title: 'Krivoxx - Digital Agency',
    description:
      'A premium digital marketing agency specializing in strategy, design, and growth.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body>
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: 'var(--color-text-primary)',
              color: 'var(--color-bg)',
              border: 'none',
              fontSize: '14px',
              borderRadius: '12px',
            },
          }}
        />
      </body>
    </html>
  );
}
