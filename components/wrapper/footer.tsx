"use client"

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Chrome, Github, Twitter, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

interface FooterLink {
  title: string;
  href: string;
}

const footerLinks: Record<string, FooterLink[]> = {
  Product: [
    { title: 'Features', href: '/features' },
    { title: 'Pricing', href: '/pricing' },
    { title: 'Integrations', href: '/integrations' },
  ],
  Company: [
    { title: 'About', href: '/about' },
    { title: 'Blog', href: '/blog' },
    { title: 'Careers', href: '/careers' },
  ],
  Resources: [
    { title: 'Documentation', href: '/docs' },
    { title: 'Support', href: '/support' },
    { title: 'Terms', href: '/terms' },
  ],
};

export default function Footer() {
  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: NewsletterFormValues) => {
    try {
      // TODO: Implement newsletter subscription
      console.log('Newsletter subscription:', data);
      toast.success('Thanks for subscribing!');
      form.reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Newsletter Section */}
          <div className="lg:order-last lg:border-l lg:pl-8">
            <div className="max-w-md">
              <h3 className="text-2xl font-semibold tracking-tight">
                Stay up to date
              </h3>
              <p className="mt-4 text-muted-foreground">
                Get the latest updates about new features and platform improvements.
              </p>
              <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="mt-6 space-y-4"
              >
                <div>
                  <Input
                    {...form.register('email')}
                    placeholder="Enter your email"
                    type="email"
                    aria-label="Email for newsletter"
                    className="w-full"
                  />
                  {form.formState.errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </form>
            </div>
          </div>

          {/* Links Section */}
          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold">{category}</h4>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} ResellersConnect. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://github.com" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
