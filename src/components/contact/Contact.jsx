'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Code,
  Loader2,
  Lock,
  Megaphone,
  PenTool,
  Users,
  Video,
} from 'lucide-react';
import { toast } from 'sonner';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import styles from './Contact.module.css';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const serviceOptions = [
  { label: 'Ads Campaigns', icon: Megaphone },
  { label: 'Website Development', icon: Code },
  { label: 'Video Production', icon: Video },
  { label: 'Brand Strategy & Design', icon: PenTool },
  { label: 'SEO', icon: BarChart3 },
  { label: 'Social Media Marketing', icon: Users },
];

const budgetOptions = [
  'Under Rs 25,000',
  'Rs 25,000 - Rs 75,000',
  'Rs 75,000 - Rs 2,50,000',
  'Rs 2,50,000+',
];

export default function Contact({ standalone = false, initialService }) {
  const defaultService = serviceOptions.some((service) => service.label === initialService)
    ? initialService
    : 'Website Development';
  const [selectedServices, setSelectedServices] = useState([defaultService]);
  const [selectedBudget, setSelectedBudget] = useState('Rs 75,000 - Rs 2,50,000');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const toggleService = (label) => {
    setSelectedServices((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label]
    );
  };

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 900));
    toast.success('Thank you! We will be in touch shortly.');
    reset();
    setSelectedServices([defaultService]);
    setSelectedBudget('Rs 75,000 - Rs 2,50,000');
  };

  return (
    <section id="contact" className={`${styles.contact} ${standalone ? styles.standalone : ''}`}>
      <div className={`${styles.dots} ${styles.dotsLeft}`} />
      <div className={`${styles.dots} ${styles.dotsRight}`} />
      <div className={`${styles.ring} ${styles.ringLeft}`} />
      <div className={`${styles.ring} ${styles.ringRight}`} />

      <Container>
        {standalone && (
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        )}

        <div className={styles.header}>
          <Badge>Contact Us</Badge>
          <h1>
            LET&apos;S TALK
            <span>ABOUT YOUR PROJECT</span>
          </h1>
          <p>Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="name" className={styles.label}>Full Name</label>
              <input
                id="name"
                type="text"
                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                placeholder="Enter your name"
                {...register('name')}
              />
              {errors.name && <span className={styles.error}>{errors.name.message}</span>}
            </div>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <input
                id="email"
                type="email"
                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                placeholder="Enter your email"
                {...register('email')}
              />
              {errors.email && <span className={styles.error}>{errors.email.message}</span>}
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="company" className={styles.label}>Company / Brand (Optional)</label>
            <input
              id="company"
              type="text"
              className={styles.input}
              placeholder="Enter your company or brand name"
              {...register('company')}
            />
          </div>

          <div className={styles.field}>
            <span className={styles.label}>Services You&apos;re Interested In</span>
            <div className={styles.serviceGrid}>
              {serviceOptions.map((service) => {
                const Icon = service.icon;
                const active = selectedServices.includes(service.label);
                return (
                  <button
                    key={service.label}
                    type="button"
                    className={`${styles.option} ${active ? styles.activeOption : ''}`}
                    onClick={() => toggleService(service.label)}
                  >
                    <Icon size={20} />
                    {service.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className={styles.field}>
            <span className={styles.label}>Budget Range <em>(Optional)</em></span>
            <div className={styles.budgetGrid}>
              {budgetOptions.map((budget) => (
                <button
                  key={budget}
                  type="button"
                  className={`${styles.budget} ${selectedBudget === budget ? styles.activeBudget : ''}`}
                  onClick={() => setSelectedBudget(budget)}
                >
                  {budget}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="message" className={styles.label}>Tell Us About Your Project</label>
            <textarea
              id="message"
              rows={5}
              className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
              placeholder="Write about your project, goals, target audience, timeline, and anything else we should know..."
              {...register('message')}
            />
            {errors.message && <span className={styles.error}>{errors.message.message}</span>}
          </div>

          <button type="submit" className={styles.submit} disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 size={19} className={styles.spinner} />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <span>
                  <ArrowRight size={22} />
                </span>
              </>
            )}
          </button>

          <p className={styles.privacy}>
            <Lock size={17} />
            We respect your privacy. Your information is safe with us.
          </p>
        </form>
      </Container>
    </section>
  );
}
