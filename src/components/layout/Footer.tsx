'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  companyName: 'SecureShield',
  tagline: 'Advanced IT Security Solutions for Modern Business Protection',
  description:
    'Protecting your digital assets with enterprise-grade security solutions, threat detection, and compliance management.',

  // Company Links
  companyLinks: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],

  // Legal Links
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Security', href: '/security' },
  ],

  // Social Links
  socialLinks: [
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
    { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
    { label: 'GitHub', href: 'https://github.com', icon: 'github' },
  ],

  // Certifications
  certifications: ['SOC 2 Type II', 'ISO 27001', 'GDPR Compliant'],

  // Contact Info
  contactEmail: 'security@secureshield.com',
  contactPhone: '+1 (555) 123-4567',
  address: '123 Security Blvd, Tech District, CA 94105',

  // Newsletter
  newsletterTitle: 'Security Updates',
  newsletterDescription: 'Get the latest security insights and threat intelligence',
  newsletterPlaceholder: 'Enter your email',
  newsletterButtonText: 'Subscribe',

  copyrightText: '© 2024 SecureShield. All rights reserved.',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleLinkClick = (href: string) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      navigate(href);
    }
  };

  const renderSocialIcon = (iconType: string) => {
    switch (iconType) {
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      case 'twitter':
        return <Twitter className="h-5 w-5" />;
      case 'github':
        return <Github className="h-5 w-5" />;
      default:
        return <Shield className="h-5 w-5" />;
    }
  };

  return (
    <footer id="footer" className="bg-card text-card-foreground border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold">
                <span data-editable="companyName">{config.companyName}</span>
              </h3>
            </div>
            <p className="text-lg font-medium text-primary mb-3">
              <span data-editable="tagline">{config.tagline}</span>
            </p>
            <p className="text-muted-foreground mb-6 max-w-md">
              <span data-editable="description">{config.description}</span>
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span data-editable="contactEmail">{config.contactEmail}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span data-editable="contactPhone">{config.contactPhone}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span data-editable="address">{config.address}</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {config.companyLinks.map((link, idx) => (
                <li key={idx}>
                  <Button
                    variant="ghost"
                    className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start"
                    onClick={() => handleLinkClick(link.href)}
                    data-editable-href={`companyLinks[${idx}].href`}
                    data-href={link.href}
                  >
                    <span data-editable={`companyLinks[${idx}].label`}>{link.label}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {config.legalLinks.map((link, idx) => (
                <li key={idx}>
                  <Button
                    variant="ghost"
                    className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start"
                    onClick={() => handleLinkClick(link.href)}
                    data-editable-href={`legalLinks[${idx}].href`}
                    data-href={link.href}
                  >
                    <span data-editable={`legalLinks[${idx}].label`}>{link.label}</span>
                  </Button>
                </li>
              ))}
            </ul>

            {/* Certifications */}
            <div className="mt-6">
              <h5 className="font-medium mb-3 text-sm">Certifications</h5>
              <div className="space-y-1">
                {config.certifications.map((cert, idx) => (
                  <div key={idx} className="text-xs text-muted-foreground">
                    <span data-editable={`certifications[${idx}]`}>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            <span data-editable="copyrightText">{config.copyrightText}</span>
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {config.socialLinks.map((social, idx) => (
              <Button
                key={idx}
                variant="ghost"
                size="sm"
                className="h-9 w-9 p-0 text-muted-foreground hover:text-foreground"
                onClick={() => handleLinkClick(social.href)}
                data-editable-href={`socialLinks[${idx}].href`}
                data-href={social.href}
                aria-label={social.label}
              >
                {renderSocialIcon(social.icon)}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
