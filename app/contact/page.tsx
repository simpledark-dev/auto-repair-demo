import type { Metadata } from 'next';
import { absoluteUrl } from '@/lib/seo';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ContactPageContent from './components/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact Us - Auto Repair & Car Repair Mechanic | Montréal, QC',
  description:
    'Contact Garage Henriquez for auto repair and car repair services in Montréal, QC. Call (514) 933-4493, email us, or visit our mechanic shop at 2001 Rue Centre. Serving Montréal and the surrounding area.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    url: absoluteUrl('/contact'),
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Banner */}
      <ContactPageContent />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
