import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';
import { Heart } from 'lucide-react';
import BrandLogo from '@/components/branding/BrandLogo';
import { CONTACT_INFO } from '@/config/contact';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'baidees-salon'
  );

  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <BrandLogo variant="horizontal" size="md" className="mb-4" />
            <p className="text-sm text-muted-foreground mb-4">
              Where Style Meets Confidence
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold transition-colors"
                aria-label="X (Twitter)"
              >
                <SiX className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/" className="hover:text-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-gold transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-gold transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gold transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                Phone:{' '}
                <a
                  href={`tel:${CONTACT_INFO.phone.tel}`}
                  className="hover:text-gold transition-colors"
                >
                  {CONTACT_INFO.phone.display}
                </a>
              </li>
              <li>Email: {CONTACT_INFO.email}</li>
              <li className="pt-2">
                <strong className="text-foreground">Hours:</strong>
                <br />
                {CONTACT_INFO.hours.weekdays}
                <br />
                {CONTACT_INFO.hours.weekend}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Baidees Salon. All rights reserved.
          </p>
          <p className="mt-2 flex items-center justify-center gap-1">
            Built with <Heart className="h-4 w-4 text-gold fill-gold" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
