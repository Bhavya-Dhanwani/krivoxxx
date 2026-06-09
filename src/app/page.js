import Hero from '@/components/hero/Hero';
import Services from '@/components/services/Services';
import Process from '@/components/process/Process';
import CTA from '@/components/cta/CTA';
import Contact from '@/components/contact/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <CTA />
      <Contact />
    </>
  );
}
