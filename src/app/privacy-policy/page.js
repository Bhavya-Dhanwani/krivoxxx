import LegalPage from '@/components/legal/LegalPage';

export const metadata = {
  title: 'Privacy Policy - Krivoxx',
  description: 'Read the Krivoxx privacy policy.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Privacy Policy"
      updated="Last updated: June 9, 2026"
      sections={[
        {
          title: 'Information We Collect',
          body: 'We collect the details you choose to share with us, including your name, email address, company name, selected services, budget range, and project message.',
        },
        {
          title: 'How We Use Information',
          body: 'We use your information to respond to enquiries, understand your project needs, prepare proposals, improve our services, and communicate with you about Krivoxx.',
        },
        {
          title: 'Data Sharing',
          body: 'We do not sell your personal information. We may share limited information with trusted service providers only when needed to operate our website, manage enquiries, or deliver our services.',
        },
        {
          title: 'Data Security',
          body: 'We use reasonable technical and organizational safeguards to protect your information, but no online transmission or storage method can be guaranteed as completely secure.',
        },
        {
          title: 'Your Choices',
          body: 'You can contact us to request access, correction, or deletion of your personal information, subject to legal and operational requirements.',
        },
        {
          title: 'Contact',
          body: 'For privacy questions, email us at hello@krivoxx.com.',
        },
      ]}
    />
  );
}
