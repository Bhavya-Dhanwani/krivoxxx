'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import styles from './Contact.module.css';

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().min(1, 'Company name is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  // Handle form submission
  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success('Thank you! We will be in touch shortly.');
    reset();
  };

  return (
    <Section id="contact" variant="default">
      <Container>
        <div className={styles.inner}>
          <div className={styles.header}>
            <h2 className={styles.heading}>Get in touch</h2>
            <p className={styles.subheading}>
              Ready to start your project? Fill out the form and we&apos;ll get back to you
              within 24 hours.
            </p>
          </div>

          <form
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                  placeholder="Your full name"
                  {...register('name')}
                />
                {errors.name && (
                  <span className={styles.error}>{errors.name.message}</span>
                )}
              </div>

              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                  placeholder="you@company.com"
                  {...register('email')}
                />
                {errors.email && (
                  <span className={styles.error}>{errors.email.message}</span>
                )}
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="company" className={styles.label}>
                Company
              </label>
              <input
                id="company"
                type="text"
                className={`${styles.input} ${errors.company ? styles.inputError : ''}`}
                placeholder="Your company name"
                {...register('company')}
              />
              {errors.company && (
                <span className={styles.error}>{errors.company.message}</span>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                placeholder="Tell us about your project..."
                {...register('message')}
              />
              {errors.message && (
                <span className={styles.error}>{errors.message.message}</span>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              showArrow
              disabled={isSubmitting}
              className={styles.submit}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className={styles.spinner} />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </Container>
    </Section>
  );
}
