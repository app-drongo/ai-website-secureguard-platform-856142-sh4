'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Shield, Clock, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const DEFAULT_CONTACT = {
  title: 'Get in Touch',
  subtitle:
    'Ready to secure your business? Our cybersecurity experts are here to help you build a robust defense strategy.',
  formTitle: 'Send us a message',
  formSubtitle: "Fill out the form below and we'll get back to you within 24 hours",
  nameLabel: 'Full Name',
  namePlaceholder: 'Enter your full name',
  emailLabel: 'Email Address',
  emailPlaceholder: 'Enter your email address',
  companyLabel: 'Company',
  companyPlaceholder: 'Enter your company name',
  messageLabel: 'Message',
  messagePlaceholder: 'Tell us about your security needs...',
  submitText: 'Send Message',
  contactMethods: [
    {
      icon: 'Mail',
      title: 'Email Us',
      description: 'Get in touch via email',
      value: 'security@yourplatform.com',
      available: '24/7 Support',
    },
    {
      icon: 'Phone',
      title: 'Call Us',
      description: 'Speak with our experts',
      value: '+1 (555) 123-4567',
      available: 'Mon-Fri 9AM-6PM EST',
    },
    {
      icon: 'MapPin',
      title: 'Visit Us',
      description: 'Our headquarters',
      value: '123 Security Blvd, Tech City, TC 12345',
      available: 'By appointment only',
    },
  ],
  features: [
    {
      icon: 'Shield',
      title: 'Enterprise Security',
      description: 'Advanced threat protection for your business',
    },
    {
      icon: 'Clock',
      title: '24/7 Monitoring',
      description: 'Round-the-clock security monitoring and response',
    },
    {
      icon: 'MessageSquare',
      title: 'Expert Consultation',
      description: 'Free security assessment and consultation',
    },
  ],
} as const;

type ContactProps = Partial<typeof DEFAULT_CONTACT>;

export default function Contact(props: ContactProps) {
  const config = { ...DEFAULT_CONTACT, ...props };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  const getIcon = (iconName: string) => {
    const icons = {
      Mail: Mail,
      Phone: Phone,
      MapPin: MapPin,
      Shield: Shield,
      Clock: Clock,
      MessageSquare: MessageSquare,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Mail;
    return <IconComponent className="h-6 w-6" />;
  };

  return (
    <section id="contact" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="bg-card text-card-foreground">
            <CardContent className="p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-2">
                  <span data-editable="formTitle">{config.formTitle}</span>
                </h3>
                <p className="text-muted-foreground">
                  <span data-editable="formSubtitle">{config.formSubtitle}</span>
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                data-form-id="692af8afbc968af0315abffc"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      <span data-editable="nameLabel">{config.nameLabel}</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder={config.namePlaceholder}
                      value={formData.name}
                      onChange={e => handleInputChange('name', e.target.value)}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      <span data-editable="emailLabel">{config.emailLabel}</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={config.emailPlaceholder}
                      value={formData.email}
                      onChange={e => handleInputChange('email', e.target.value)}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">
                    <span data-editable="companyLabel">{config.companyLabel}</span>
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder={config.companyPlaceholder}
                    value={formData.company}
                    onChange={e => handleInputChange('company', e.target.value)}
                    className="bg-background border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    <span data-editable="messageLabel">{config.messageLabel}</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder={config.messagePlaceholder}
                    value={formData.message}
                    onChange={e => handleInputChange('message', e.target.value)}
                    required
                    rows={5}
                    className="bg-background border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <span data-editable="submitText">
                    {isSubmitting ? 'Sending...' : config.submitText}
                  </span>
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              {config.contactMethods.map((method, idx) => (
                <Card key={idx} className="bg-muted/50 border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                        {getIcon(method.icon)}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">
                          <span data-editable={`contactMethods[${idx}].title`}>{method.title}</span>
                        </h4>
                        <p className="text-muted-foreground text-sm mb-2">
                          <span data-editable={`contactMethods[${idx}].description`}>
                            {method.description}
                          </span>
                        </p>
                        <p className="font-medium">
                          <span data-editable={`contactMethods[${idx}].value`}>{method.value}</span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <span data-editable={`contactMethods[${idx}].available`}>
                            {method.available}
                          </span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Why Choose Our Platform?</h4>
              <div className="space-y-4">
                {config.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="bg-accent text-accent-foreground p-2 rounded-lg">
                      {getIcon(feature.icon)}
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">
                        <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        <span data-editable={`features[${idx}].description`}>
                          {feature.description}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
