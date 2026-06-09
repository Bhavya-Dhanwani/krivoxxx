import LegalPage from '@/components/legal/LegalPage';

export const metadata = {
  title: 'Terms & Conditions - Krivoxx',
  description: 'Read the Krivoxx terms and conditions.',
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      eyebrow="Terms & Conditions"
      title="Terms & Conditions"
      updated="Last updated: June 9, 2026"
      sections={[
        {
          title: 'Use Of This Website',
          body: 'By using this website, you agree to use it lawfully and respectfully. You must not misuse the site, attempt unauthorized access, or interfere with its normal operation.',
        },
        {
          title: 'Service Enquiries',
          body: 'Submitting a contact form does not create a client relationship or guarantee availability, pricing, timelines, or acceptance of a project.',
        },
        {
          title: 'Proposals And Payments',
          body: 'Project scope, deliverables, timelines, fees, payment terms, and revisions are confirmed separately in written proposals, agreements, or invoices.',
        },
        {
          title: 'Intellectual Property',
          body: 'Website content, branding, design, and materials belong to Krivoxx or their respective owners. You may not copy, reproduce, or reuse them without permission.',
        },
        {
          title: 'Limitation Of Liability',
          body: 'We aim to keep information accurate and services reliable, but we are not liable for indirect losses, interruptions, or damages arising from website use.',
        },
        {
          title: 'Contact',
          body: 'For questions about these terms, email us at hello@krivoxx.com.',
        },
      ]}
    />
  );
}
