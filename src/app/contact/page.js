import Contact from '@/components/contact/Contact';

export const metadata = {
  title: 'Contact Krivoxx - Digital Marketing Agency',
  description:
    'Tell Krivoxx about your project and get a response within 24 hours.',
};

export default async function ContactPage({ searchParams }) {
  const params = await searchParams;

  return <Contact standalone initialService={params?.service} />;
}
